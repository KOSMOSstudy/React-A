import React from 'react';
import { Route } from 'react-router';
import NewsPage from './pages/NewsPage';
// import NewsList from './components/NewsList';
// import Categories from './components/Categories';

const App = () => {
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
