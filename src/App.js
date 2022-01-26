import './App.css';
import Terminal from 'terminal-in-react';

function App() {

  const showMsg = () => 'Hello World'
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          startState='maximised'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          hideTopBar='true'
          commands={{
            linktree: () => {return <ul><li><a href="https://github.com/Gomez0015" target="_blank">Github</a></li><li><a href="https://www.linkedin.com/in/oscargomezceo/" target="_blank">LinkedIn</a></li><li><a href="https://www.youtube.com/channel/UCGxmNncs5ihjB-xk_9UUHyw" target="_blank">Youtube</a></li></ul>},
            ls: () => 'secret.txt',
            cat: {
              method: (args, print, runCommand) => {
                if(args._[0] != 'secret.txt') {
                  print('no file called ' + args._[0]);
                } else {
                  print('Y0U F0UND TH3 S3CR3T FL4G!');
                }
              },
            },
            showmsg: showMsg,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            linktree: 'all my links (Github, Youtube, ect)',
            ls: 'list files in directory',
            cat: 'read contents of a file',
          }}
          msg='
_______                                      ______             ________                     
__  __ \__________________ ________   ______ ___  /_______ _    ___  __ \_____ ____  _______ 
_  / / /_  ___/  ___/  __ `/_  ___/   _  __ `/_  //_/  __ `/    __  /_/ /  __ `/_  |/_/  __ \
/ /_/ /_(__  )/ /__ / /_/ /_  /       / /_/ /_  ,<  / /_/ /     _  _, _// /_/ /__>  < / /_/ /
\____/ /____/ \___/ \__,_/ /_/        \__,_/ /_/|_| \__,_/      /_/ |_| \__,_/ /_/|_| \____/ 
‎                                                 
Full Stack Developer and Cybersecurity Student
‎
Commands:
show - show the motd
clear - clear the screen
help - list all the commands
linktree - all my links (Github, Youtube, ect)
showmsg - shows a message
popup - alert'
        />
      </div>
    </div>
  );
}

export default App;
