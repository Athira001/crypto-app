import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from './../actions';
import User from './../components/User';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
