import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Contatos from './pages/Contatos';

export default function Routes() {
  return (

    <BrowserRouter>
    <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/sobrenos" component={SobreNos} />
          <Route path="/contatos" component={Contatos} />

        </Switch>
        </BrowserRouter>
  );
}