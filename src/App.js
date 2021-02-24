import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Fab from './components/Fab';
import ActionButton from './components/ActionButton';
import HomePage from './pages/HomePage';
import AppBar from './components/AppBar';
import Footer from './components/Footer';

import './App.css';
import Terms from './pages/Terms';
import Impressum from './pages/Impressum';

function App() {
  const [lang, setlang] = useState('Deutschland');

  const handleLangButton = (e) => {
    console.log(e);
    setlang(e);
  };
  return (
    <div className='App'>
      <AppBar />
      <Switch>
        <Route exact path='/'>
          <HomePage lang={lang} />
        </Route>
        <Route path='/Terms'>
          <Terms />
        </Route>
        <Route path='/Impressum'>
          <Impressum />
        </Route>
      </Switch>
      <Footer />

      <Fab onClick={(e) => handleLangButton(e)} />
      <ActionButton lang={lang} />
    </div>
  );
}

export default App;
