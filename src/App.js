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
            'linktree': () => {return <ul><li><a href="https://www.youtube.com/channel/UCGxmNncs5ihjB-xk_9UUHyw" target="_blank">Youtube</a></li><li><a href="https://github.com/Gomez0015" target="_blank">Github</a></li></ul>},
            showmsg: showMsg,
            popup: () => alert('Terminal in React')
          }}
          descriptions={{
            'linktree': 'all my links (Github, Youtube, ect)',
            showmsg: 'shows a message',
            alert: 'alert', popup: 'alert'
          }}
          msg='
_______                                      ______             ________                     
__  __ \__________________ ________   ______ ___  /_______ _    ___  __ \_____ ____  _______ 
_  / / /_  ___/  ___/  __ `/_  ___/   _  __ `/_  //_/  __ `/    __  /_/ /  __ `/_  |/_/  __ \
/ /_/ /_(__  )/ /__ / /_/ /_  /       / /_/ /_  ,<  / /_/ /     _  _, _// /_/ /__>  < / /_/ /
\____/ /____/ \___/ \__,_/ /_/        \__,_/ /_/|_| \__,_/      /_/ |_| \__,_/ /_/|_| \____/ 
‎                                                 
Try typing help'
          
        />
      </div>
    </div>
  );
}

export default App;
