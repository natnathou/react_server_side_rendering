import express, { Request, Response } from 'express';
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;

const app = express();

app.get('/', (req: Request, res: Response) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
});
