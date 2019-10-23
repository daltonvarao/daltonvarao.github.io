import React from 'react';

import Skills from './skills';
import Profile from  './profile';
import SocialMedias from './social_medias'
import Footer from './footer';

export default function Card() {
  return (
    <div className="card">
      <Skills />
      <Profile />
      <SocialMedias />
      <Footer />
    </div>
  )
}
