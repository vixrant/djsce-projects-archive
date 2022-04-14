import React from 'react';
import { BASE_DIR } from '../util/helpers';

export default () => (
  <div style={{
    display: 'flex',
    height: '100vh',
    width: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }}>

    <span>NODE_ENV = {process.env.NODE_ENV}</span>
    <span>BASE_DIR = {BASE_DIR}</span>

  </div>
);
