import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (<div>Tom</div>);
};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
