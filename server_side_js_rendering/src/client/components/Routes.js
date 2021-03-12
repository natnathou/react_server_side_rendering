import React from 'react';
import App from '../App';
import Home from '../Pages/Home';
import User, { loadData } from '../Pages/User';

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
      },
      {
        ...User,
        path: '/user',
        exact: true,
      },
    ],
  },
];
