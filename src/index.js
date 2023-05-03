

import './style/index.scss';

import { Routes } from './js/routes';

const callRoute = () => {
  const { hash } = window.location;
  const pathParts = hash.substring(1).split('/');
  console.log(pathParts)

  const pageName = pathParts[0];
  console.log(pageName)
  const pageArgument = pathParts[1] || '';
  const pageFunction = Routes[pageName];

  if (pageFunction !== undefined) {
    pageFunction(pageArgument);
  }
};

window.addEventListener('hashchange', () => callRoute());
window.addEventListener('DOMContentLoaded', () => callRoute());

