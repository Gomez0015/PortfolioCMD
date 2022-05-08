import "./App.css";
import Terminal from "terminal-in-react";
import CTFPlugin from "./customPlugin/ctfPlugin.js";

function App() {
  const showMsg = () => "Hello World";

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Terminal
          // plugins={[
          //   CTFPlugin,
          // ]}
          color="green"
          backgroundColor="black"
          barColor="black"
          startState="maximised"
          style={{ fontWeight: "bold", fontSize: "1em" }}
          hideTopBar={true}
          commands={{
            linktree: () => {
              return (
                <ul>
                  <li>
                    <a href="https://github.com/Gomez0015" target="_blank">
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/oscargomezceo/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UCGxmNncs5ihjB-xk_9UUHyw"
                      target="_blank"
                    >
                      Youtube
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Gomez0015/CTF-Writeups"
                      target="_blank"
                    >
                      My Writeups
                    </a>
                  </li>
                </ul>
              );
            },
            mystory: () => {
              return (
                <p>
                  Hey my name is Oscar Gomez and since I was 12 I started
                  coding, it started with scratch but I got really bored really
                  fast, I wanted to do some real raw coding, not blocks that
                  aren't very diverse. I started with games but moved on quickly
                  since I was very bad at design and anything else than coding
                  involved in games. I then stopped for a while and when I found
                  out about Web Development I took courses on Udemy to become a
                  Full-Stack Developer from Html to APIs and Blockchain. The
                  next thing I learned is IOS App development I also used Udemy
                  to learn everything about IOS development and be able to make
                  any app I need. I also taught myself Python with a try and
                  failure mindset, which ended up in me creating my youtube
                  channel to help other people learn! In April of 2022, I finished
                  the CyberSecurity Bootcamp at IronHack. Since then have been accepted 
                  into a CyberSecurity masters program at Ecole 2600 & founded CTF Cafe.
                  I have worked with many companies and individuals, created my own startups some flopped and some
                  worked very well, I have participated in CTF competitions and
                  created many open source projects. All in hopes to help grow
                  and develop the tech world. I still have many years ahead of
                  me as I am only 17 and I will keep learning to code as I think
                  it is truly my passion.
                </p>
              );
            },
            achievements: () => {
              return (
                <ul>
                  <li>
                    <p>
                      Udemy Full Stack Web Development Bootcamp @ April 19th
                      2020
                    </p>
                  </li>
                  <li>
                    <p>Started Python Tutorials on Youtube @ Nov 16th 2020</p>
                  </li>
                  <li>
                    <p>Internship (Comitium) CTO (Upgrowy) @ Jan 2021</p>
                  </li>
                  <li>
                    <p>IronHack CyberSecurity Bootcamp @ December 2021</p>
                  </li>
                  <li>
                    <p>Finished 35th Place in 24h@CTF @ 6th Feb 2022</p>
                  </li>
                  <li>
                    <p>Launched Rudolph AIO @ Febuary 2022</p>
                  </li>
                  <li>
                    <p>
                      Got Accepted into a CyberSecurity masters program @ April
                      2022
                    </p>
                  </li>
                  <li>
                    <p>Founded CTF Cafe @ April 2022</p>
                  </li>
                  <li>
                    <p>Finished 24th Place in THCon 2k22 @ 16th April 2022</p>
                  </li>
                </ul>
              );
            },
          }}
          descriptions={{
            show: "show the motd",
            clear: "clear the terminal",
            help: "list all available commands",
            linktree: "all my links (Github, Youtube, ect)",
            mystory: "Storytime...",
            achievements: "My Biggest Achievements",
          }}
          msg="
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
help - list all available commands"
        />
      </div>
    </div>
  );
}

export default App;
