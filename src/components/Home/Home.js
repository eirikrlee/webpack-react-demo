import React from 'react';
import style from './home.scss';
import icon from '../../static/code.png';


import { Link } from 'react-router';

export default class Home extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}} className={style.test}>
        <h1>Hello React App!!!</h1>
        <img src={icon} />
        <Link to="/life">Life</Link>
        <br /> <br />
        {this.props.children}
      </div>);
  }
}