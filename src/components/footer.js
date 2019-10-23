import React from 'react';
import Link from './link';

export default function Footer() {
  return (
    <footer>
      <p className="lead">
        Designed and made by me!
        &copy; {new Date().getFullYear()}.
        <Link href="https://github.com/daltonvarao/daltonvarao.github.io/tree/gh-pages"> Fork </Link>
        this repository on github.
      </p>
    </footer>
  );
}
