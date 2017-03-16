import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lifeActions from '../redux/modules/life';

class LifeContainer extends Component {

  static propTypes = {
    load : PropTypes.func.isRequired,
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <h1>Life stuff</h1>
        <button onClick={this.props.load} >dispatch action</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { foo: state.life.foo};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...lifeActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LifeContainer);
