import React from 'react';

export default function Icon({ style, name, color, size, alt }) {
  return (
    <i
      className={`icon ${style || 'fa'} fa-${name}`}
      style={{ fontSize: size ? size : "default", color: color ? color : "default" }}
      alt={alt}
    />
  );
}
