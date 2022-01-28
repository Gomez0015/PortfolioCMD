import PluginBase from 'terminal-in-react/lib/js/components/Plugin';
import { flag, filesystem } from './consts';
import { crackSHA1 } from './encryption/sha1Algo';
import { crackMd5 } from './encryption/md5Algo';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const filename = 'sample.txt';

export default class CTFPlugin extends PluginBase {
    static displayName = 'CTFPlugin';
    static version = '1.0.0';

    constructor(api, config) {
        if (cookies.get('userData') == undefined) {
            api.setData({
                currentDir: '/',
                currentUser: 'guest',
                filesystem: filesystem,
            });
            const cookies = new Cookies();
            cookies.set('userData', api.getData(), { path: '/' });
            api.setPromptPrefix('/@' + 'guest' + ':~');
        } else {
            api.setData(cookies.get('userData'));
            api.setPromptPrefix(api.getData().currentDir + '@' + api.getData().currentUser + ':~');
        }

        api.setPromptSymbol('$');
        super(api, config);
    }

    commands = {
        cd: this.enterDir(),
        ls: this.listDirContents(),
        cat: this.readFile(),
        crackMD5: this.crackMD5(),
        crackSHA1: this.crackSHA1()
    };

    descriptions = {
        cd: 'enter a directory',
        ls: 'list files in current directory',
        cat: 'read a file',
        crackMD5: 'crack MD5 hash',
        crackSHA1: 'crack SHA1 hash'
    };

    crackMD5() {
        return {
            method: (args) => {
                const hash = args._[0];

                return crackMd5(hash);
            },
        };
    }

    crackSHA1() {
        return {
            method: (args) => {
                const hash = args._[0];

                return crackSHA1(hash);
            },
        };
    }

    readFile() {
        return {
            method: (args) => {
                let pluginData = this.api.getData();

                var pieces = (pluginData.currentDir + args._[0]).split('/');

                pieces = pieces.filter(element => {
                    return element !== '';
                });

                for (let i = 0; i < pieces.length; i++) {
                    pieces[i] = pieces[i].replace(/.txt/g, 'txt');
                }

                pieces.unshift('/');

                var node = pluginData.filesystem;

                for (var i = 0; i < pieces.length; ++i) {
                    console.log(node)
                    node = node[pieces[i]];
                }

                if (!node) {
                    return 'no such file';
                } else {
                    return node;
                }
            },
        };
    }


    listDirContents() {
        return (args, callback) => {
            const pluginData = this.api.getData();

            var pieces = pluginData.currentDir.split('/');

            pieces = pieces.filter(element => {
                return element !== '';
            });

            pieces.unshift('/');

            var node = pluginData.filesystem;

            for (var i = 0; i < pieces.length; ++i) {
                node = node[pieces[i]];
            }

            let files = Object.keys(node);

            for (let i = 0; i < files.length; i++) {
                files[i] = files[i].replace(/txt/g, '.txt');
            }

            return files;
        };
    }

    enterDir() {
        return {
            method: (args) => {
                let pluginData = this.api.getData();

                if (args._[0] == '..') {
                    var newPath = pluginData.currentDir.split('/');

                    newPath = newPath.filter(element => {
                        return element !== '';
                    });

                    newPath.pop();

                    if (newPath.length <= 0) {
                        newPath = '/';
                    } else {
                        newPath = '/' + newPath.join('/') + '/';
                    }

                    this.api.setPromptPrefix(newPath + '@' + pluginData.currentUser + ':~');
                    pluginData.currentDir = newPath;
                    this.api.setData(pluginData);
                    cookies.set('userData', pluginData, { path: '/' });
                } else {

                    var pieces = (args._[0] + '/').split('/');

                    pieces = pieces.filter(element => {
                        return element !== '';
                    });

                    var currentDirArray = pluginData.currentDir.split('/');

                    currentDirArray = currentDirArray.filter(element => {
                        return element !== '';
                    });

                    var node = pluginData.filesystem['/'];

                    for (let i = 0; i < currentDirArray.length; i++) {
                        node = node[currentDirArray[i]];
                    }

                    for (var i = 0; i < pieces.length; ++i) {
                        console.log(node, pieces[i]);
                        node = node[pieces[i]];
                        if (node) {
                            break;
                        }
                    }

                    if (!node) {
                        return 'no such directory';
                    } else {
                        var newPath = pluginData.currentDir + args._[0] + '/';

                        this.api.setPromptPrefix(newPath + '@' + pluginData.currentUser + ':~');
                        pluginData.currentDir = newPath;
                        this.api.setData(pluginData);
                        cookies.set('userData', pluginData, { path: '/' });
                    }
                }
            },
        };

    }

}