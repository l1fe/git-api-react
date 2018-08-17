import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Field, getFormValues, reduxForm } from 'redux-form';

import { Input } from 'components';

import styles from './styles.scss';

const Form = () => (
  <form className={styles.form}>
    <div>
      <label htmlFor="name">Repository name</label>
      <Field
        type="text"
        name="name"
        placeholder="Start typing..."
        component={Input}
      />
    </div>

    <div className={styles.checkboxGroup}>
      <label htmlFor="bookmarked">Show only bookmarked</label>
      <div>
        <Field name="bookmarked" id="bookmarked" component="input" type="checkbox" />
      </div>
    </div>

  </form>
);

// use form value selector to get form inner values
const mapStateToProps = (state) => {
  const values = getFormValues('search')(state);
  return {
    formValues: values || { },
  };
};

export default compose(
  connect(mapStateToProps),
  reduxForm({ form: 'search' }),
)(Form);
