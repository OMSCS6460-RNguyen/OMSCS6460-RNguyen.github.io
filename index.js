import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { Header } from './components/header/Header';
import { Main } from './components/main/Main';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
