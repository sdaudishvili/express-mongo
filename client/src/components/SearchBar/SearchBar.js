import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { Search } from './components';

const useStyles = makeStyles(() => ({
  root: {
    width: 380
  }
}));

const SearchBar = (props) => {
  const { onSearch, className, ...rest } = props;

  const classes = useStyles();

  return (
    <Box {...rest} className={classes.root}>
      <Search onSearch={onSearch} />
    </Box>
  );
};

SearchBar.propTypes = {
  className: PropTypes.string,
  onSearch: PropTypes.func
};

SearchBar.defaultProps = {
  className: '',
  onSearch: () => {}
};

export default SearchBar;
