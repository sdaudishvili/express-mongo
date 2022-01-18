import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const PageHead = (props) => {
  const { children: rightSlot, h1, h2, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid alignItems="flex-end" container justifyContent="space-between" spacing={3}>
        <Grid item>
          <Typography component="h2" gutterBottom variant="overline">
            {h2}
          </Typography>
          <Typography component="h1" variant="h3">
            {h1}
          </Typography>
        </Grid>
        <Grid item>{rightSlot}</Grid>
      </Grid>
    </div>
  );
};

PageHead.propTypes = {
  className: PropTypes.string,
  h1: PropTypes.string,
  h2: PropTypes.string,
  children: PropTypes.any
};

PageHead.defaultProps = {
  className: '',
  h1: '',
  h2: '',
  children: null
};

export default PageHead;
