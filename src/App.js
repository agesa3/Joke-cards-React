// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Joke from "./Joke";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import "./App.css";

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { fadeIn: false };
  //   this.toggle = this.toggle.bind(this);
  // }
  constructor() {
    super();
    this.state = {
      jokes: [
        {
          setup: "What time did the man go to the dentist?",
          punchline: "Tooth hurt-y",
        },
        {
          setup: "Did you hear about the guy who invented Lifesavers?",
          punchline: "They say he made a mint",
        },
        {
          setup: "Why do chicken coops only have two doors?",
          punchline: "Because if they had four, they would be chicken sedans!",
        },
        {
          setup: "Why did the Clydesdale give the pony a glass of water?",
          punchline: "Because he was a little horse!",
        },
      ],
    };
  }

  render() {
    let jokeCards = this.state.jokes.map((humor) => {
      return (
        <Col className="p-3" sm="4">
          <Joke humor={humor} />
        </Col>
      );
    });
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Joke Cards</h1>
          <p className="lead">
            Welcome to the next billion dollar app taking the world by storm
          </p>
          <hr className="my-2" />
          <p>Prepare to be amused!</p>
          <p className="lead"></p>
        </Jumbotron>
        <Container fluid>
          <Row>{jokeCards}</Row>
        </Container>
      </div>
    );
  }
}
