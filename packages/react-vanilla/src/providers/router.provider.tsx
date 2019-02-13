import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

const RouterProvider: React.FunctionComponent = ({ children }) => {
  return <Router basename={process.env.REACT_APP_BASE_NAME}>{children}</Router>;
};

export default RouterProvider;
