import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
        <Link to="/">
          <h1>Studiegrupp D Webbshopp</h1>
        </Link>
      </div>
      <div>
        <Link to="/checkout">
          Checkout{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </Link>{' '}
        <Link to="/signin"> SignIn</Link>
      </div>
    </header>
  );
}