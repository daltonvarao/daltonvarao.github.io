import React from 'react';
import Icon from './icon';


export default function Footer() {
  return (
    <footer>
      <p className="lead">
        designed and made by me! &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
