import React from 'react';

import Icon from './icon';
import Link from './link';

export default function SocialMedias() {
  return(
    <ul className="group-icon">
      <li>
        <Link href="http://github.com/daltonvarao">
          <Icon size={40} style="fab" name='github' color="#ffffff" alt="Github" />
        </Link>
      </li>
      <li>
        <Link href="https://www.linkedin.com/in/daltonvarao">
          <Icon size={40} style="fab" name='linkedin' color="#0077b5" alt="Linkedin" />
        </Link>
      </li>
      <li>
        <Link href="https://twitter.com/daltonvarao">
          <Icon size={40} style="fab" name='twitter' color="#1da1f2" alt="Twitter" />
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/daltonvarao">
          <Icon size={40} style="fab" name='instagram' color="#ff00a9" alt="Instagram" />
        </Link>
      </li>
    </ul>
  )
}