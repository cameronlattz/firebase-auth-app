import React from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { actions as auth } from '../../../index';
import Form from '../../../components/Form';

const { createUser } = auth;


const fields = [{
  key: 'username',
  label: 'Username',
  placeholder: 'Username',
  autoFocus: false,
  secureTextEntry: false,
  value: '',
  type: 'text',
}];

const error = {
  general: '',
  username: '',
};

class CompleteProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      error,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
  }

  onSubmit(formData) {
    this.setState({
      error,
    }); // clear out error messages

    // attach user id
    const { user } = this.props;
    const data = formData;
    data.uid = user.uid;

    this.props.createUser(data, this.onSuccess, this.onError);
  }

  // eslint-disable-next-line class-methods-use-this
  onSuccess() {
    Actions.Main();
  }

  onError(errorMessage) {
    // eslint-disable-next-line react/destructuring-assignment, react/no-access-state-in-setstate
    const errObj = this.state.error;

    // eslint-disable-next-line no-prototype-builtins
    if (errorMessage.hasOwnProperty('message')) {
      errObj.general = errorMessage.message;
    } else {
      const keys = Object.keys(errorMessage);
      keys.forEach((key) => {
        errObj[key] = errorMessage[key];
      });
    }

    this.setState({
      error: errObj,
    });
  }

  render() {
    const { errorState } = this.state;
    return (
      <Form
        fields={fields}
        showLabel={false}
        onSubmit={this.onSubmit}
        buttonTitle="CONTINUE"
        error={errorState}
      />
    );
  }
}

export default connect(null, { createUser })(CompleteProfile);
