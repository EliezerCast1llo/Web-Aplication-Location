import React from 'react';
import { Link } from 'react-router-dom';
import { TOKEN } from '../constants';

interface IHeader {
  storage?: any;
}

function Header({ storage }: IHeader) {
  function onLogOut() {
    localStorage.removeItem(TOKEN);
    window.location.href = '/login';
  }
  return storage ? (
    <header className="App-header">
      <Link className="App-link" to="/">
        Users
      </Link>
      <button className="btn btn-link" onClick={() => onLogOut()}>
        Log out
      </button>
    </header>
  ) : (
    <header className="App-header">
      <Link className="App-link" to="/login">
        Welcome
      </Link>
    </header>
  );
}

export default Header;
