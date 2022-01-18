import { MenuItem, Paper, Select } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  paper: {
    width: 250
  },
  select: {
    padding: '0 10px',
    height: '100%'
  }
}));

const DropDown = ({ placeholder, className, value, items, onChange, displayKey, ...rest }) => {
  const classes = useStyles();
  return (
    <Paper className={clsx(classes.paper, className)} elevation={1} {...rest}>
      <Select
        fullWidth
        disableUnderline
        value={value || null}
        label="Type"
        className={classes.select}
        displayEmpty
        onChange={({ target: { value } }) => onChange(value)}
      >
        <MenuItem value={null}>
          <em>{placeholder}</em>
        </MenuItem>
        {items.map((option) => (
          <MenuItem value={option}>{option[displayKey]}</MenuItem>
        ))}
      </Select>
    </Paper>
  );
};

DropDown.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  displayKey: PropTypes.string.isRequired
};

DropDown.defaultProps = {
  placeholder: 'None',
  className: '',
  onChange: () => {}
};

export default DropDown;
