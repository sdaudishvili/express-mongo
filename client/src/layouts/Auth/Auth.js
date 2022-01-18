import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

// import { useDispatch, useSelector } from 'react-redux';
// import { removeNotification } from '@actions/base.action';
import { Topbar } from './components';

const useStyles = makeStyles((theme) => ({
  content: {
    height: '100%',
    paddingTop: 56,
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  }
}));

const Auth = (props) => {
  const { children } = props;

  const classes = useStyles();
  // const dispatch = useDispatch();

  return (
    <>
      <Topbar />
      <main className={classes.content}>{children}</main>
    </>
  );
};

Auth.propTypes = {
  children: PropTypes.object.isRequired
};

export default Auth;
