import React from "react";
import Button from 'react-bootstrap/Button';
import './Token.css';
var { Web3 } = require("web3");

var web3 = '';

const connectButton = (<Button className="connect-button" onClick={connectWallet} disabled>Connect Your Wallet</Button>);
const connectedPage = '';

async function connectWallet() {
    if(window.ethereum) {
        web3 = new Web3(window.ethereum)
        try {
          // Request account access if needed
          await window.ethereum.enable()

          // Accounts now exposed
        } catch (error) {
          // User denied account access...
        }
    } else {
        alert('Please install Metamask!');
    }
};

function Token() {
  return (
    <div  className="token-header">
        {(web3) !== '' ? connectedPage : connectButton}
    </div>
  );
}

export default Token;