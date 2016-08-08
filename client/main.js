import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/ImageList';

const App = () => {
  return (<div><ImageList /></div>);
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
