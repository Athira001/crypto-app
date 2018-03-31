import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from './../actions';
import Dashboard from './../components/Dashboard';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
