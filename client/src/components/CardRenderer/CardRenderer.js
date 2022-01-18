import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardHeader, CardContent, Box, Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  flexBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    margin: '16px 24px'
  }
}));

const CardRenderer = (props) => {
  const { className, children, title, removeAction, hasRemoveAction, ...rest } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <Box className={classes.flexBetween}>
        {title && <CardHeader title={title} />}
        {hasRemoveAction && (
          <Button className={classes.button} color="primary" variant="contained" onClick={removeAction()}>
            Remove
          </Button>
        )}
      </Box>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

CardRenderer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  onChange: PropTypes.func,
  removeAction: PropTypes.func,
  hasRemoveAction: PropTypes.bool
};

CardRenderer.defaultProps = {
  className: '',
  children: null,
  title: '',
  onChange: () => {},
  removeAction: () => {},
  hasRemoveAction: false
};

export default CardRenderer;
