import React from 'react';
import style from './style.scss';
import icon from '../images/code.png';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}} className={style.test}>
        <h1>Hello React App!</h1>
        <img src={icon} />
      </div>);
  }
}