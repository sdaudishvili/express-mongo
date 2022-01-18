import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import { FileCard } from './components';

const useStyles = makeStyles((theme) => ({
  root: {},
  files: {
    marginTop: theme.spacing(3)
  }
}));

const Files = (props) => {
  const { files, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Grid className={classes.files} container spacing={3}>
        {files.map((file) => (
          <Grid item key={file.id} lg={3} md={3} sm={4} xs={6}>
            <FileCard file={file} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Files.propTypes = {
  className: PropTypes.string,
  files: PropTypes.instanceOf(Array).isRequired
};

Files.defaultProps = {
  className: ''
};

export default Files;
