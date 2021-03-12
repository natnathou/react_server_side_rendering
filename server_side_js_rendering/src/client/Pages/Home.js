import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Home.css';

const Home = () => {
  return (
    <div>
      <div>test</div>
      <button
        style={{ color: 'blue' }}
        onClick={() => {
          console.log('button clicked');
        }}
      >
        Click Me
      </button>
      <a href='http://localhost:3000/user'>User</a>
      <Link to='/user'>
        <button>User</button>
      </Link>
    </div>
  );
};

export default {
  component: Home,
};
