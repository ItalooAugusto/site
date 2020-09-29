import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SobreNos from './pages/Portfolio';
import Contatos from './pages/Contatos';
import Portfolio from './pages/Portfolio';

export default function Routes() {
  return (

    <BrowserRouter>
    <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contatos" component={Contatos} />

        </Switch>
        </BrowserRouter>
  );
}