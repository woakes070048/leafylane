import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <div>Hello</div>;
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
