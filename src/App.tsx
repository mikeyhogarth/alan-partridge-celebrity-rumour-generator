import React, { useState } from "react";
import { generateSentence } from "./util";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

function App() {
  const [sentence, setSentence] = useState(generateSentence());

  return (
    <Container>
      <Row>
        <Col>
          <h1 style={{ marginTop: ".5em" }}>
            Alan Partridge Celebrity Rumour Generator.
          </h1>
          <p>
            This is a completely unofficial, fan-made generator for creating
            totally untrue annecdotes such as this one...
          </p>
          <Jumbotron>
            <p style={{ fontSize: "2em" }}>"{sentence}"</p>
          </Jumbotron>
          <Button onClick={(e) => setSentence(generateSentence())}>
            Generate New Rumour
          </Button>
          <hr />
          <p>
            If you want to know why this exists, see{" "}
            <a href="https://twitter.com/ThePartridgePod/status/1316837915402665987">
              this tweet
            </a>{" "}
            and show your love for the creators of the awesome{" "}
            <a href="https://podfollow.com/monkeytennis/view">Monkey Tennis</a>{" "}
            podcast.
          </p>
          <p>
            And why yes, of course you can{" "}
            <a href="https://github.com/mikeyhogarth/alan-partridge-celebrity-rumour-generator">
              help and contribute
            </a>
            .
          </p>
          <p>
            Generated rumours are not guarenteed to be big, clever or funny.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
