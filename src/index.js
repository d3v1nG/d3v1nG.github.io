import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Page.js';
// import { BrowserRouter as Router } from ‘react-router-dom’;

const page = <Page />;

ReactDOM.render(
  page,
  document.getElementById('root')
);

// ReactDOM.render(
//   <Router basename={process.env.PUBLIC_URL}><Page /></Router>,
//   document.getElementById(‘root’)
// );
