import React from 'react';
import pongstart from '../images/pong-start.png';
import pongend from '../images/pong-end.png';
import bigbee from '../images/bees-big.png';
import leftbee from '../images/bees-left.png';
import scriptinterp from '../images/scriptInterpreter.png';
import web from '../images/myweb.png';
import httpscreenshot from '../images/httpserverterminal.png';
import chat from '../images/connectionchat.png';
import joinroom from '../images/JoinRoom.png';
import reactlogin from '../images/reactlogin.png';
import reactchatroom from '../images/reactchatroom.png';
import DNS from '../images/DNS.png';
import DNSconnection from '../images/DNSconnection.png';
// import startDNS from '../images/startDNS.png';
import synthesizer from '../images/synthesizer.png';
import knivesmenu from '../images/rainingknivesmenu.png';
import knivesingame from '../images/rainingknivesingame.png';

// import rightbee from '../images/bees-right.png';
// import beeclosing from '../images/bees-closing.png';

function Projects() {
  const sectionStyle = {
    position: 'relative',
    zIndex: 1,
    marginBottom: '40px',
    padding: '20px',
    backgroundColor: '#ffffffff',
    // backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '2rem',
    color: '#333',
    borderBottom: '2px solid #0077ff',
    paddingBottom: '8px',
    marginBottom: '16px',
  };

  // const beegameStyle = {
  //   // fontSize: '2rem',
  //   // color: '#333',
  //   borderBottom: '2px solid #efef0eff',
  //   paddingBottom: '8px',
  //   marginBottom: '16px',
  // };


const projectItem = {
    marginBottom: '12px',
    fontSize: '1.1rem',
    color: '#555',
    overflowWrap: 'anywhere',
  };

const projectsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '40px',
  alignItems: 'stretch',
};

const projectCardStyle = {
  backgroundColor: '#ffffffff',
  // backgroundColor: '#bddcf5ff',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, .5)',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginBottom: '8px',
};

const imageRowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '16px',
};

const projectImageStyle = {
  width: '100%',
  maxWidth: '700px',
  height: 'auto',
  objectFit: 'cover',
  borderRadius: '6px',
};

const gameDescription={
  fontSize: '15px',
};

const mediaBlockStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  alignItems: 'flex-start',
};

  return (
    <div
      style={{
        padding: '40px',
        background: 'linear-gradient(to bottom right, #c2e9fb, #a1c4fd, #d4fc79)',
        minHeight: '100vh',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <style>{`
        .project-card {
          transition: transform 180ms ease, box-shadow 180ms ease;
          will-change: transform;
        }
        .project-card:hover {
          transform: scale(1.02);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22);
        }
        .project-card ul {
          margin: 0;
          padding-left: 18px;
        }
        .project-card li {
          overflow-wrap: anywhere;
        }
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .image-row {
            flex-direction: column;
          }
          .media-block {
            width: 100%;
          }
          .project-image {
            width: 100%;
            max-width: 100%;
            height: auto;
          }
        }
      `}</style>
      {/* Class Projects */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>📘 Class Projects</h2>
        <div style={projectsGridStyle} className="projects-grid">
          <div style={projectCardStyle} className="project-card">

            {/*Pong game layout */}
            <h2><strong>Pong Game</strong></h2>Built classic Pong game entirely in C++ using the SFML (Simple and Fast Multimedia Library) framework. The game features real-time input handling, 2D sprite rendering, collision detection, and score tracking.
            <div style={imageRowStyle} className="image-row">
              <div style={mediaBlockStyle} className="media-block">
                <ul style={gameDescription}>
                  <li>Two player game</li>
                  <li>Both players start with zero points</li>
                  <li>Ball origin starts at center screen</li>
                  <li>Paddles start at same size</li>
                </ul>
                <img src={pongstart} alt="Pong start" style={projectImageStyle} className="project-image" loading="lazy" decoding="async" />
              </div>
              <div style={mediaBlockStyle} className="media-block">
                <ul style={gameDescription}>
                  <li>Score is collected on scoreboard</li>
                  <li>First player to reach 5 wins</li>
                  <li>End of game screen shows winner</li>
                  <li>Window closes 3 seconds after finish</li>
                </ul>
                <img src={pongend} alt="Pong end" style={projectImageStyle} className="project-image" loading="lazy" decoding="async" />
              </div>
              {/* add more */}
            </div>
              <li style={projectItem}>
              [<a href="https://github.com/ojkavapalu/6010-Final-Project" target="_blank" rel="noreferrer">GitHub Source Code</a>]
              </li>
          </div>
        </div>
        
        {/*Not the Bees layout */}
        <div style={projectsGridStyle} className="projects-grid">
          <div style={projectCardStyle} className="project-card">
            <h2><strong>NotTheBees game</strong></h2>Used DOM concepts to create a bees game. 
            HTML5 for Canvas for rendering, Vanilla JavaScript for game logic and animation (requestAnimationFrame), CSS for basic layout. 
            Image assets (.png, .webp) for sprites and background.
            <div style={imageRowStyle} className="image-row">
              <div style={mediaBlockStyle} className="media-block">
                <ul style={gameDescription}>
                  <li> Move the mouse to move the honey.</li>
                  <li> Bees continuously steer toward the honey and follow it.</li>
                </ul>
                <img src={leftbee} alt="Bees left" style={projectImageStyle} className="project-image" loading="lazy" decoding="async" />
              </div>
  
              <div style={mediaBlockStyle} className="media-block">
                <ul style={gameDescription}>
                  <li>When all bees reach the honey, the game ends and a big bee appears.</li>
                  <li> Click “Restart Game” to spawn a new swarm and play again.</li>
                </ul>
                <img src={bigbee} alt="Big bee" style={projectImageStyle} className="project-image" loading="lazy" decoding="async" />
              </div>
              {/* add more */}
            </div>
            <p>Summary: a playful mouse controlled canvas game where a swarm of bees relentlessly 
              tracks the honey you move around the screen. When every bee catches up, 
              they combine into a big bee and you can restart.</p>
            <li style={projectItem}>
              [<a href="https://github.com/Jbon-44/dev-portfolio-projects/tree/main/NotTheBees" target="_blank" rel="noreferrer">GitHub Source Code</a>]
            </li>
          </div>
        </div>

        {/* Music Synthesizer */}
        <div style={projectsGridStyle} className="projects-grid">
          <div style={projectCardStyle} className="project-card">
            <h2><strong>Music Synthesizer</strong></h2> Desktop synthesizer app that generates audio waveforms in real time Java (core language), 
            JavaFX for the desktop UI and interactive widgets, 
            Custom audio synthesis logic (DSP style waveform generation),
            OOP patterns for modular components (sources, widgets, controllers).
            <div style={imageRowStyle} className="image-row">
              <div style={mediaBlockStyle} className="media-block">
                <ul style={gameDescription}>
                  <li> Modular signal chain with sources (e.g., variable frequency sine wave) and controls</li>
                  <li> Interactive UI widgets for adjusting parameters like frequency and volume</li>
                  <li> Emphasis on clean separation between audio generation and UI controls</li>
                  <li> Extensible design so new wave types and effects can be added easily</li>
                </ul>
                <img src={synthesizer} alt="Bees left" style={projectImageStyle} className="project-image" loading="lazy" decoding="async" />
              </div>
              {/* add more */}
            </div>
            {/* need to add synthesizer link */}
          </div>
        </div>


          {/*Script Interpreter layout*/}
        <div style={projectsGridStyle} className="projects-grid">
          <div style={projectCardStyle} className="project-card">
            <h2><strong>Script Interpreter</strong></h2> Interpreter for a Small Expression Language (C++)
            <div style={imageRowStyle} className="image-row">
              <div style={mediaBlockStyle} className="media-block">
                <ul style={gameDescription}>
                  <li> Parses a custom expression language into an AST</li>
                  <li> Evaluates expressions with an environment (variables/bindings)</li>
                  <li> Supports arithmetic/boolean expressions and control constructs (as implemented)</li>
                  <li> Prints raw or pretty printed AST output</li>
                  <li> Includes a CLI with modes: --interp, --print, --pretty-print, --testt</li>
                  <li> Unit tests for parser/evaluator behavior (Catch2) </li>
                </ul>
                <img src={scriptinterp} alt="ScriptInterpreter" style={projectImageStyle} className="project-image" loading="lazy" decoding="async" />
              </div>
            </div>
            <li style={projectItem}>
              [<a href="https://github.com/Jbon-44/dev-portfolio-projects/tree/main/ScriptingInterpreter" target="_blank" rel="noreferrer">GitHub Source Code</a>]
            </li>
          </div>
        </div>

      {/**HTTP mini server layout */}
        <div style={projectsGridStyle} className="projects-grid">
          <div style={projectCardStyle} className="project-card">
            <h2><strong>MyHttpServer</strong></h2>Built a HTTP server using websocket, HTTPRequest and HTTPResponse classes to parse requests using Java, Javascript, CSS, HTML.
            <div style={imageRowStyle} className="image-row">
              <div style={mediaBlockStyle} className="media-block">
                <ul style={gameDescription}>
                    <li>Accepts TCP connections and parses the first request line</li>
                    <li>Maps / to index.html and serves files from src/</li>
                </ul>
              <img src={httpscreenshot} alt="httpscreenshot" style={projectImageStyle} className="project-image" loading="lazy" decoding="async" />
              </div>
              <div style={mediaBlockStyle} className="media-block">
                <ul style={gameDescription}>
                  <li>Sends basic HTTP headers and file contents (HTML/CSS)</li>
                  <li>Returns a simple 404 Not Found for missing files</li>
                </ul>
              <img src={web} alt="web" style={projectImageStyle} className="project-image" loading="lazy" decoding="async" />
              </div>
              {/* add more */}
            </div>
            <li style={projectItem}>
              [<a href="https://github.com/Jbon-44/dev-portfolio-projects/tree/main/MyHttpServer" target="_blank" rel="noreferrer">GitHub Source Code</a>]
            </li>
          </div>
        </div>


        {/** Webchat */}
        <div style={projectsGridStyle} className="projects-grid">
          <div style={projectCardStyle} className="project-card">
            <h2><strong>Webchat</strong></h2> JavaScript, HTML, CSS, and Java (WebSocket server packaged as RoomChatServer.jar file)
            <div style={imageRowStyle} className="image-row">
              <div style={mediaBlockStyle} className="media-block">
                <ul style={gameDescription}>
                  <li> Uses localStorage to carry username/room from the join page to the chat page.</li>
                  <li> Connects to a WebSocket server at ws://host and sends join and message commands.</li>
                </ul>
                <img src={chat} alt="chat connection" style={projectImageStyle} className="project-image" loading="lazy" decoding="async" />
              </div>
              <div style={mediaBlockStyle} className="media-block">  
                <ul style={gameDescription}>
                  <li> Renders message, join, and leave events into a scrolling chat log.</li>
                  <li> Enforces lowercase room names on the join form for consistency.</li>
                </ul>
                <img src={joinroom} alt="joining chat room" style={projectImageStyle} className="project-image" loading="lazy" decoding="async" />
              </div>
              {/* add more */}
            </div>
            <li style={projectItem}>
              [<a href="https://github.com/Jbon-44/dev-portfolio-projects/tree/main/WebChat" target="_blank" rel="noreferrer">GitHub Source Code</a>]
            </li>
          </div>
        </div>


        {/* React Chat client */}
        <div style={projectsGridStyle} className="projects-grid">
          <div style={projectCardStyle} className="project-card">
            <h2><strong>React Chat Client server</strong></h2>Created client web chat server in react with functional components, hooks, CSS for layout and styling.
            <div style={imageRowStyle} className="image-row">
             <div style={mediaBlockStyle} className="media-block">
                <ul style={gameDescription}>
                  <li> Browser-based chat client that connects to a WebSocket server and supports room-based messaging.</li>
                  <li> Simple login flow collects a username and room, then transitions to the live chat view.</li>
                  <li> Sends JSON events for join and message actions; renders incoming messages in a scrolling feed.</li>
                </ul>
                <img src={reactlogin} alt="in chat room" style={projectImageStyle} className="project-image" loading="lazy" decoding="async" />
              </div>

              <div style={mediaBlockStyle} className="media-block">
                <ul style={gameDescription}>
                  <li> Supports sending with a button or Enter key for quick chat UX.</li>
                  <li> Targets a local server at ws://localhost:8080 for real-time communication.</li>
                  <li> Allows multiple users to join a single room</li>
                </ul>
                <img src={reactchatroom} alt="in chat room" style={projectImageStyle} className="project-image" loading="lazy" decoding="async" />
              </div>
              {/* add more */}
            </div>
            <li style={projectItem}>
              [<a href="https://github.com/Jbon-44/dev-portfolio-projects/tree/main/reactchatclient" target="_blank" rel="noreferrer">GitHub Source Code</a>]
            </li>
          </div>
        </div>


      {/*DNS Resolver Layout */}
        <div style={projectsGridStyle} className="projects-grid">
          <div style={projectCardStyle} className="project-card">
            <h2><strong>DNS Resolver/Server</strong></h2> Built a caching DNS resolver using Java, UDP sockets(DatagramSocket/DatagramPacket), DNS protocol parsing and serialization In memory caching with HashMap.
            <div style={imageRowStyle} className="image-row">
              <div style={mediaBlockStyle} className="media-block">
                <ul style={gameDescription}>
                  <li> Implements a UDP DNS resolver that listens on port 8053.</li>
                  <li> Parses incoming DNS queries, and replies with DNS answers.</li>
                  <li> Uses an in memory cache keyed by DNS questions to serve repeat queries quickly and expire entries by TTL.</li>
                </ul>
                <img src={DNSconnection} alt="in chat room" style={projectImageStyle} className="project-image" loading="lazy" decoding="async" />
              </div>
              <div style={mediaBlockStyle} className="media-block">
                <ul style={gameDescription}>
                  <li> Encodes/decodes DNS headers, questions, and records, including basic name compression support.</li>
                  <li> Targets a minimal, dependency free Java implementation using only the standard library.</li>
                  <li> For cache misses, forwards the raw request to Google DNS (8.8.8.8) and relays the response.</li>
                </ul>
                <img src={DNS} alt="in chat room" style={projectImageStyle} className="project-image" loading="lazy" decoding="async" />
              </div>
              {/* add more */}
            </div>
            <li style={projectItem}>
              [<a href="https://github.com/Jbon-44/dev-portfolio-projects/tree/main/DNSResolver" target="_blank" rel="noreferrer">GitHub Source Code</a>]
            </li>
          </div>
        </div>


        {/**TSL Lite display */}
        <div style={projectsGridStyle} className="projects-grid">
          <div style={projectCardStyle} className="project-card">
            <h2><strong>TSLlite</strong></h2> Built a simplified version of the TLS protocol using Java.
            <div style={imageRowStyle} className="image-row">
              <ul style={gameDescription}>
                <li> Establishes a client server connection on localhost.</li>
                <li> Performs a TLS style handshake.</li>
                <li> Client sends a nonce.</li>
                <li> Server and client exchange X.509 certificates and Diffie–Hellman public values.</li>
                <li> Each side signs its DH public value with RSA for authenticity.</li>
                <li> Both sides derive shared session keys via a simplified HKDF.</li>
                <li> Handshake integrity is verified with HMAC SHA256.</li>
                <li> After the handshake, the server sends a “secure message” to the client.</li>
              </ul>
              {/* add more */}
            </div>
            <li style={projectItem}>
              [<a href="https://github.com/Jbon-44/dev-portfolio-projects/tree/main/TLSlite" target="_blank" rel="noreferrer">GitHub Source Code</a>]
            </li>
          </div>
        </div>

        {/*Raining Knives */}
        <div style={projectsGridStyle} className="projects-grid">
          <div style={projectCardStyle} className="project-card">
            <h2><strong>Raining Knives</strong></h2>Created a C++ game in Qt Creator.
            <div style={imageRowStyle} className="image-row">
              <div style={mediaBlockStyle} className="media-block">
              <ul style={gameDescription}>
                <li> Arcade dodge game where you move a character to avoid falling knives and survive as long as possible.</li>
                <li> Main menu supports sign up, sign in, or guest play, then launches the game scene.</li>
                <li> Gameplay uses a moving cloud that only drops knives when the spawn point passes under it.</li>
              </ul>
              <img src={knivesmenu} alt="in chat room" style={projectImageStyle} className="project-image" loading="lazy" decoding="async" />
              </div>
              
            <div style={mediaBlockStyle} className="media-block">
              <ul style={gameDescription}>
                <li> Difficulty ramps up by increasing knife and cloud speed over time.</li>
                <li> Score and lives are tracked with on-screen HUD, sound effects, and a game-over overlay.</li>
                <li> Local profiles and high scores persist in JSON files stored in the OS app data folder.</li>
              </ul>
              <img src={knivesingame} alt="in chat room" style={projectImageStyle} className="project-image" loading="lazy" decoding="async" />
              </div>
              {/* add more */}
            </div>
            {/* <li style={projectItem}>
              [<a href="https://github.com/Jbon-44/dev-portfolio-projects/tree/main/RainingKnives" target="_blank" rel="noreferrer">GitHub Source Code</a>]
            </li> */}
          </div>
        </div>
      </div>

      {/* Personal Projects */}
      <div style={sectionStyle}>
        <h2 style={headingStyle}>🛠️ Personal Projects</h2>
        <ul>
          <li style={projectItem}>
            <strong>Portfolio Website</strong> This site you're viewing! Built with React and hosted on GitHub Pages.
            {/* [<a href="https://jbon44-44.github.io" target="_blank" rel="noreferrer">GitHub</a>] */}
          </li>
        </ul>
      </div>
    </div>
    
  );
}

export default Projects;
