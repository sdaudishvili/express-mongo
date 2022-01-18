import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
  fields: {
    margin: theme.spacing(-1),
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1)
    }
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: '100%'
  }
}));

const LoginForm = (props) => {
  const { className, login, passwordRequirements, ...rest } = props;

  const classes = useStyles();

  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(form);
  };

  const onChange = ({ target: { value, name } }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <form {...rest} className={clsx(classes.root, className)} onSubmit={handleSubmit}>
      <div className={classes.fields}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          onChange={onChange}
          value={form.email || ''}
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          onChange={onChange}
          type="password"
          value={form.password || ''}
          variant="outlined"
        />
      </div>
      <Button className={classes.submitButton} color="primary" size="large" type="submit" variant="contained">
        Sign in
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string,
  passwordRequirements: PropTypes.object,
  login: PropTypes.func.isRequired
};

LoginForm.defaultProps = {
  passwordRequirements: {},
  className: ''
};

export default LoginForm;
