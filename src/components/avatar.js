import React from 'react';

export default function Avatar({ img_url }) {
  return (
    <img className="avatar" src={img_url} alt="Avatar"/>
  );
}
