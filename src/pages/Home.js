import React from "react";
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
//import ListGroup from 'react-bootstrap/ListGroup';
import './Home.css';

function Home() {
  return (
    <div  className="home-header">
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <img src="Azuki6518.png" class="rounded float-left" alt="Azuki #6518" height="400"></img>
          </div>
          <div class="col-sm">
            <img src="AzukiElemental6583.png" class="rounded float-left" alt="Elemental #6583" height="400"></img>
          </div>
          <div class="col-sm">
            <img src="AzukiElemental12983.png" class="rounded float-left" alt="Elemental #12983" height="400"></img>
          </div>
        </div>
      </div>
      <div class="container">
        <break></break>
        <div class="row">
          <div class="col-sm">
            <img src="Bean2088.png" class="rounded float-left" alt="Beanz #2088" height="400"></img>
          </div>
          <div class="col-sm">
            <img src="me.png" class="rounded float-left" alt="Elemental #12734" height="400"></img>
          </div>
          <div class="col-sm">
            <img src="Bean9914.png" class="rounded float-left" alt="Beanz #9914" height="400"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;