import React from 'react';
import style from './home.scss';
import icon from '../../assets/code.png';

import { Link } from 'react-router';

export default class Home extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}} className={style.test}>
        <h2>this is a react redux app</h2>
        <div >
          <img src={icon} />
          <Link to="/life">Life</Link>
          <br /> <br />
          {this.props.children}
        </div>

      </div>);
  }
}