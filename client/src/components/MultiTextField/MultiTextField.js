import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, TextField, Chip, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  fieldGroup: {
    display: 'flex',
    alignItems: 'center'
  },
  fieldHint: {
    margin: theme.spacing(1, 0)
  },
  values: {
    marginTop: theme.spacing(1),
    '& > * + *': {
      marginLeft: theme.spacing(1)
    }
  },
  flexGrow: {
    flexGrow: 1
  },
  dateField: {
    '& + &': {
      marginLeft: theme.spacing(2)
    }
  },
  addButton: {
    marginLeft: theme.spacing(2)
  }
}));

const MultiTextField = (props) => {
  const { className, values, title, onChange } = props;

  const [value, setValue] = React.useState('');

  const classes = useStyles();

  const addHandler = () => {
    if (value) {
      onChange([...values, value]);
      setValue('');
    }
  };

  const deleteHandler = (val) => {
    onChange(values.filter((x) => x !== val));
  };

  return (
    <Card className={className}>
      <CardHeader title={title} />
      <CardContent>
        <>
          <div className={classes.fieldGroup}>
            <TextField
              className={classes.flexGrow}
              onChange={(event) => setValue(event.target.value)}
              value={value}
              variant="outlined"
            />
            <IconButton color="primary" onClick={addHandler} className={classes.addButton}>
              <AddIcon className={classes.addIcon} />
            </IconButton>
          </div>
          {values && (
            <div className={classes.values}>
              {values.map((val) => (
                <Chip deleteIcon={<CloseIcon />} key={val} label={val} onDelete={() => deleteHandler(val)} />
              ))}
            </div>
          )}
        </>
      </CardContent>
    </Card>
  );
};

MultiTextField.displayName = 'MultiTextField';

MultiTextField.propTypes = {
  className: PropTypes.string,
  values: PropTypes.array,
  title: PropTypes.string,
  onChange: PropTypes.func
};

MultiTextField.defaultProps = {
  className: '',
  values: [],
  title: '',
  onChange: () => {}
};

export default MultiTextField;
