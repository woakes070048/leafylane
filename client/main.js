import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

function App() {
  return <Header />;
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
