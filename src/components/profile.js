import React, { useState, useEffect } from 'react';

import Icon from './icon';
import Avatar from './avatar'; 

export default function Profile() {
  return (
    <div className="profile">
      <Avatar img_url='https://avatars3.githubusercontent.com/u/26552270?v=4' />
      <h1 className="profile-name">Dalton Felipe Silva Varão</h1>
      <span className="profile-details">
        <h4 className="mutted detail-item"><Icon alt="Graduação" name="graduation-cap" />Engenharia Física</h4>
        <h4 className="mutted detail-item"><Icon alt="Competência" name="briefcase" />Backend Developer</h4>
        <h4 className="mutted detail-item"><Icon alt="Projetos" name="project-diagram" />Projects</h4>
        <h4 className="mutted detail-item"><Icon alt="Email" name="envelope" />daltonphellipe@gmail.com</h4>
      </span>
      <span id="description">
        <h1>Hello World!</h1>
      </span>
    </div>
  );
}
