import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import './AboutMe.css';

function AboutMe() {
  return (
    <div  className="about-header">
        <Card style={{ width: '18rem' }} data-bs-theme="dark">
            <img src="/AzukiElemental12734.png" alt="Me" height="286" className="rounded"/>

            <Card.Body>
              <Card.Title>teja.eth</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">tvemulap</Card.Subtitle>

              <ListGroup className="list-group-flush">
                <ListGroup.Item>Diehard Steelers Fan</ListGroup.Item>
                <ListGroup.Item>Staunch Earthen Ally</ListGroup.Item>
                <ListGroup.Item>Resident of The Garden</ListGroup.Item>
              </ListGroup>

              <Button className="text-center" variant="outline-secondary" href="https://x.com/tvemulap_eth"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
              <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>
              </Button>{' '}
            </Card.Body>
        </Card>
    </div>
  );
}

export default AboutMe;