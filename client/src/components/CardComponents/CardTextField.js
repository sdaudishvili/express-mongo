import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Card, CardHeader, CardContent, TextField } from '@material-ui/core';

const CardTextField = (props) => {
  const { className, title, label, ...rest } = props;

  return (
    <Card className={clsx(className)} variant="outlined">
      <CardHeader title={label || title} />
      <CardContent>
        <TextField fullWidth variant="outlined" {...rest} label={label || title} />
      </CardContent>
    </Card>
  );
};

CardTextField.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
  removeFunction: PropTypes.func,
  removeKey: PropTypes.number
};

CardTextField.defaultProps = {
  className: '',
  title: '',
  label: null,
  removeFunction: undefined,
  removeKey: 0
};

export default CardTextField;
