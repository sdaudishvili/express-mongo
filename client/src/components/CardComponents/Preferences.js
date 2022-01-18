import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { Card, CardHeader, CardContent, FormControlLabel, Switch } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  datePicker: {
    marginTop: theme.spacing(3),
    display: 'block'
  }
}));

const Preferences = (props) => {
  const {
    className,
    onPinnedValueUpdate,
    onPublishedValueUpdate,
    onDateChange,
    hasPin,
    hasPublish,
    published,
    date,
    pinned,
    hasDate,
    ...rest
  } = props;

  const classes = useStyles();

  return (
    <Card {...rest} className={className}>
      <CardHeader title="Preferences" />
      <CardContent style={{ display: 'block' }}>
        {hasPin && (
          <FormControlLabel
            control={<Switch checked={pinned} name="pinned" onChange={() => onPinnedValueUpdate(!pinned)} />}
            label="Pinned to the home page"
          />
        )}
        {hasPublish && (
          <FormControlLabel
            control={
              <Switch checked={published} name="published" onChange={() => onPublishedValueUpdate(!published)} />
            }
            label="Published"
          />
        )}
        {hasDate && (
          <KeyboardDatePicker
            value={new Date(date)}
            onChange={onDateChange}
            inputVariant="outlined"
            format="DD/MM/YYYY"
            label="Date"
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
            className={classes.datePicker}
          />
        )}
      </CardContent>
    </Card>
  );
};

Preferences.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string,
  onPinnedValueUpdate: PropTypes.func,
  onPublishedValueUpdate: PropTypes.func,
  onDateChange: PropTypes.func,
  hasPin: PropTypes.bool,
  hasPublish: PropTypes.bool,
  pinned: PropTypes.bool,
  published: PropTypes.bool,
  hasDate: PropTypes.bool
};

Preferences.defaultProps = {
  className: '',
  date: new Date().toISOString(),
  onPinnedValueUpdate: () => {},
  onPublishedValueUpdate: () => {},
  onDateChange: () => {},
  hasPin: false,
  hasPublish: false,
  pinned: false,
  published: false,
  hasDate: false
};

export default Preferences;
