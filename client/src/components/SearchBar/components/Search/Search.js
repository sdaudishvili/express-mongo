import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Paper, Button, Input } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  search: {
    flexGrow: 1,
    height: 42,
    padding: theme.spacing(0, 2),
    display: 'flex',
    alignItems: 'center'
  },
  searchIcon: {
    marginRight: theme.spacing(2),
    color: theme.palette.icon
  },
  searchInput: {
    flexGrow: 1
  },
  searchButton: {
    marginLeft: theme.spacing(2)
  }
}));

const Search = (props) => {
  const { onSearch, className, ...rest } = props;

  const classes = useStyles();
  const inputRef = useRef(null);

  return (
    <form {...rest} className={clsx(classes.root, className)}>
      <Paper className={classes.search} elevation={1}>
        <SearchIcon className={classes.searchIcon} />
        <Input inputRef={inputRef} className={classes.searchInput} disableUnderline placeholder="Search" />
      </Paper>
      <Button
        className={classes.searchButton}
        onClick={(e) => {
          e.preventDefault();
          onSearch(inputRef.current.value);
        }}
        size="large"
        variant="contained"
        type="submit"
      >
        Search
      </Button>
    </form>
  );
};

Search.propTypes = {
  className: PropTypes.string,
  onSearch: PropTypes.func
};

Search.defaultProps = {
  className: '',
  onSearch: () => {}
};

export default Search;
