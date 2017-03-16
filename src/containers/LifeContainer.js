import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lifeActions from '../redux/modules/life';

class LifeContainer extends Component {

  static propTypes = {
    load : PropTypes.func.isRequired,
  }
  render() {
    return (
      <div>
        <h1>Life stuff - {this.props.text}</h1>
        <button onClick={this.props.load} >dispatch action</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    text: state.life.text
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...lifeActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LifeContainer);
