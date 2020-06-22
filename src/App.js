import React from 'react';
import Joke from './Joke';
import {
  Jumbotron,
  Container,
  Row,
  Col
} from 'reactstrap';
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      jokes: [
        {
          setup: "Three men walk into a bar...",
          punchline: "The fourth one ducked!"
        },
        {
          setup: "What kind of pants were Mario's favorite?",
          punchline: "DenimDenimDenim"
        },
        {
          setup: "How do you make a tissue dance?",
          punchline: "You put a little boogy in it!"
        },
        {
          setup: "Why did the Clydesdale give the pony a glass of water?",
          punchline: "Because he was a little horse!"
        }
      ]
    }
  }

  render() {
    let jokeCards = this.state.jokes.map(humor => {
      return (
        <Col className="p-3" sm="4">
            <Joke humor={humor} />
        </Col>
      )
    })
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Joke Cards</h1>
          <p className="lead">Welcome to my hilarious new app</p>
          <hr className="my-2" />
          <p>Get ready to laugh until you cry!</p>
          <p className="lead">
          </p>
        </Jumbotron>
        <Container fluid>
          <Row>
          {jokeCards}
          </Row>
        </Container>
      </div>
    );
  }
};
