import './App.css';
import Terminal from 'terminal-in-react';
import CTFPlugin from './customPlugin/ctfPlugin.js';

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
          plugins={[
            CTFPlugin,
          ]}
          color='green'
          backgroundColor='black'
          barColor='black'
          startState='maximised'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          hideTopBar={true}
          commands={{
            linktree: () => {return <ul><li><a href="https://github.com/Gomez0015" target="_blank">Github</a></li><li><a href="https://www.linkedin.com/in/oscargomezceo/" target="_blank">LinkedIn</a></li><li><a href="https://www.youtube.com/channel/UCGxmNncs5ihjB-xk_9UUHyw" target="_blank">Youtube</a></li></ul>},
          }}
          descriptions={{
            show: 'show the motd',
            clear: 'clear the terminal',
            help: 'list all available commands',
            linktree: 'all my links (Github, Youtube, ect)',
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
Basic Commands:
clear - clear the terminal
help - list all available commands'
        />
      </div>
    </div>
  );
}

export default App;
