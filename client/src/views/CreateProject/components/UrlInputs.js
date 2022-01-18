import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, TextField, IconButton, Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  fieldGroup: {
    display: 'flex',
    alignItems: 'center'
  },
  flexGrow: {
    flexGrow: 1
  },
  deleteButton: {
    marginLeft: theme.spacing(2)
  },
  anchoredText: {
    color: 'black',
    marginLeft: theme.spacing(2),
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  addButton: {
    marginLeft: 'auto'
  }
}));

const UrlInputs = (props) => {
  const { className, values, title, onChange } = props;

  const [value, setValue] = React.useState(null);

  const classes = useStyles();

  const addHandler = (e) => {
    e.preventDefault();
    if (value) {
      onChange([...values, value]);
      setValue(null);
    }
  };

  const deleteHandler = (val) => {
    onChange(values.filter((x) => x !== val));
  };

  return (
    <Card className={className} variant="outlined">
      <CardHeader title={title} />
      <CardContent>
        <>
          {values.map((x, i) => (
            <Box key={x.concat(i)} display="flex" alignItems="center">
              <IconButton color="primary" onClick={() => deleteHandler(x)}>
                <DeleteIcon />
              </IconButton>
              <a href={x} target="_blank" rel="noreferrer" className={classes.anchoredText}>
                <Typography variant="subtitle2">{x}</Typography>
              </a>
            </Box>
          ))}
          {value === null ? (
            <Box display="flex">
              <Button variant="contained" color="primary" onClick={() => setValue('')} className={classes.addButton}>
                Add new
              </Button>
            </Box>
          ) : (
            <form onSubmit={addHandler} className={classes.fieldGroup}>
              <TextField
                className={classes.flexGrow}
                onChange={(event) => setValue(event.target.value)}
                value={value}
                size="small"
              />
              <IconButton color="primary" type="submit" className={classes.addButton}>
                <DoneIcon className={classes.addIcon} />
              </IconButton>
            </form>
          )}
        </>
      </CardContent>
    </Card>
  );
};

UrlInputs.propTypes = {
  className: PropTypes.string,
  values: PropTypes.array,
  title: PropTypes.string,
  onChange: PropTypes.func
};

UrlInputs.defaultProps = {
  className: '',
  values: [],
  title: '',
  onChange: () => {}
};

export default UrlInputs;
