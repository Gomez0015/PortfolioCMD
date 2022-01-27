import PluginBase from 'terminal-in-react/lib/js/components/Plugin';
import { flag, filesystem } from './consts';
const filename = 'sample.txt';

export default class CTFPlugin extends PluginBase {
    static displayName = 'CTFPlugin';
    static version = '1.0.0';

    constructor(api, config) {
        api.setData({
            currentDir: '/',
            currentUser: 'guest'
        });
        api.setPromptPrefix('/@' + 'guest' + ':~');
        api.setPromptSymbol('$');
        super(api, config);
    }

    commands = {
        cd: this.enterDir(),
        ls: this.listDirContents(),
        cat: this.readFile(),
    };

    descriptions = {
        cd: 'enter a directory',
        ls: 'list files in current directory',
        cat: 'read a file',
    };

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

                var node = filesystem;

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

            var node = filesystem;

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
                } else {

                    var pieces = (pluginData.currentDir + args._[0] + '/').split('/');

                    pieces = pieces.filter(element => {
                        return element !== '';
                    });

                    pieces.unshift('/')

                    var node = filesystem;

                    for (var i = 0; i < pieces.length; ++i) {
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
                    }
                }
            },
        };

    }

}