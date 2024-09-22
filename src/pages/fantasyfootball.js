import React from "react";
import Card from 'react-bootstrap/Card';
import './fantasyfootball.css';

function FantasyFootball() {
  return (
    <div className="fantasy-header">
      <div className="grid">
        <div className="row">
          <div className="col-md">
            <Card style={{ width: '18rem' }} data-bs-theme="dark">
              <img src="/StrawHatTriarchy.png" alt="Straw Hat Triarchy" height="286" className="rounded-circle"/>

              <Card.Body>
                <Card.Title>Straw Hat Triarchy</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">The BEANZ League</Card.Subtitle>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md"></div>

          <div className="col-md">        
            <Card style={{ width: '18rem' }} data-bs-theme="dark">
              <img src="/kingcolt.png" alt="The King and His Colts" height="286" className="rounded-circle"/>

              <Card.Body>
                <Card.Title>The King and His Colts</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Goon Squad Games</Card.Subtitle>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FantasyFootball;