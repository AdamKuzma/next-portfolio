import React from 'react';
import Nav from '../components/Nav';

const TestEnv = () => (
  <div
    className="centered-nav-override"
    style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Nav />
  </div>
);

export default TestEnv;