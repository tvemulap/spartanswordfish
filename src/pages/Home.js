import React from "react";
//import Card from 'react-bootstrap/Card';
//import Button from 'react-bootstrap/Button';
//import ListGroup from 'react-bootstrap/ListGroup';
import './Home.css';

function Home() {
  return (
    <div  className="home-header">
      <div className="container">
        <div className="row mt-4">
          <div className="col-sm">
            <img src="Azuki6518.png" className="rounded float-left" alt="Azuki #6518" height="400"></img>
          </div>
          <div className="col-sm">
            <img src="AzukiElemental6583.png" className="rounded float-left" alt="Elemental #6583" height="400"></img>
          </div>
          <div className="col-sm">
            <img src="AzukiElemental12983.png" className="rounded float-left" alt="Elemental #12983" height="400"></img>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-4">
          <div className="col-sm">
            <img src="Bean2088.png" className="rounded float-left" alt="Beanz #2088" height="400"></img>
          </div>
          <div className="col-sm">
            <img src="AzukiElemental12734.png" className="rounded float-left" alt="Elemental #12734" height="400"></img>
          </div>
          <div className="col-sm">
            <img src="Bean9914.png" className="rounded float-left" alt="Beanz #9914" height="400"></img>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-4">
          <div className="col-sm">
            <img src="Odeda.avif" className="rounded float-left" alt="Odeda" height="400"></img>
          </div>
          <div className="col-sm">
            <img src="Yustus.avif" className="rounded float-left" alt="Yustus" height="400"></img>
          </div>
          <div className="col-sm">
            <img src="Vladi.avif" className="rounded float-left" alt="Vladi" height="400"></img>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-4 mb-4">
          <div className="col-sm">
          </div>
          <div className="col-sm">
            <img src="Keeper5538.avif" className="rounded float-center" alt="Keeper #5538" height="400"></img>
          </div>
          <div className="col-sm">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;