import React from 'react';

import Icon from './icon';
import Link from './link';

export default function Skills() {
  return (
    <ul className="group-icon">
      <li>
        <Link href="https://python.org">
          <Icon style="fab" name="python" size={40} color="#2b5b84" alt="Python" />
        </Link>
      </li>
      <li>
        <Link href="https://nodejs.org">
          <Icon style="fab" name="node-js" size={40} color="#026e00" alt="Node.js" />
        </Link>
      </li>
      <li>
        <Link href="https://reactjs.org/">
          <Icon style="fab" name="react" size={40} color="#05a9d6" alt="React" />
        </Link>
      </li>
      <li>
        <Link href="https://git-scm.com/">
          <Icon style="fab" name="git-alt" size={40} color="#f64d27" alt="Git" />
        </Link>
      </li>
    </ul>
  )
}