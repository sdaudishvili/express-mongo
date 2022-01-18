import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeNotification } from '@actions/base.action';
import { makeStyles } from '@material-ui/styles';
import { TopBar } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  topBar: {
    zIndex: 2,
    position: 'relative'
  },
  container: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    overflowY: 'scroll',
    flex: '1 1 auto',
    padding: theme.spacing(3)
  }
}));

const Dashboard = (props) => {
  const { children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar className={classes.topBar} />
      <div className={classes.container}>
        <main className={classes.content}>{children}</main>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  children: PropTypes.any
};

Dashboard.defaultProps = {
  children: null
};

export default Dashboard;
