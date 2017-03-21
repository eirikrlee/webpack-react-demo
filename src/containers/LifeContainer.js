import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as lifeActions from '../redux/modules/life';

class LifeContainer extends Component {

  static propTypes = {
    fetchUsers : PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    users: PropTypes.array.isRequired,
  }
  render() {

    const { isLoading, users } = this.props;
    console.log('life');
    return (
      <div>
        <h3>Life Users</h3>
        {isLoading && <div>loading...</div>}
        {users.map((user) => <div key={user.id}>{user.login}</div>)}
        <button className="button" onClick={this.props.fetchUsers} >dispatch action - fetchUsers </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.life.users,
    isLoading: state.life.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...lifeActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LifeContainer);
