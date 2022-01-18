import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));

const Error = (props) => {
  const { children } = props;

  const classes = useStyles();

  return <main className={classes.root}>{children}</main>;
};

Error.propTypes = {
  children: PropTypes.any.isRequired
};

export default Error;
