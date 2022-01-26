import PluginBase from 'terminal-in-react/lib/js/components/Plugin';


export default class CTFPlugin extends PluginBase {
    static displayName = 'CTFPlugin';
    static version = '1.0.0';

    commands = {
        ls: () => 'secret.txt',
        cat: {
            method: (args, print, runCommand) => {
                if (args._[0] != 'secret.txt') {
                    print('no file called ' + args._[0]);
                } else {
                    print('Y0U F0UND TH3 S3CR3T FL4G!');
                }
            },
        },
    };

    descriptions = {
        ls: 'list files in current directory',
        cat: 'read a file',
    };

}