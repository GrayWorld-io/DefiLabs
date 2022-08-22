// import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useWeb3React } from '@web3-react/core';
import { injected } from '../connectors/connector'

import NavBar from '../components/NavBar/NavBar';
import Swap from './Swap/Swap';
import Liquidity from './Liquidity/Liquidity';

const App = () => {
  const {
    chainId,
    account,
    active,
    activate,
    deactivate
  } = useWeb3React();

  const handleConnect = () => {

    //이미 연결되어있으면 해제 (로그아웃 기능)
    if (active) {
      deactivate();
      return;
    }

    activate(injected, (error) => {
      if (error) {
        window.open('https://metamask.io/download.html');
      }
    });
  }

  return (
    <div>
      <div>
        <p>Account: {account}</p>
        <p>ChainId: {chainId}</p>
      </div>
      <div>
        <button type="button" onClick={handleConnect}>{active ? 'disconnect' : 'connect'}</button>
      </div>

      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Swap account={account} network={chainId}  />} >
          </Route>
          <Route path="/liquidity" element={<Liquidity account={account} network={chainId}  />} >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
