import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Button, Toolbar } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';

import useRouter from '@/utils/useRouter';
import removeAuthTokens from '@/utils/removeAuthTokens';
import { useUser } from '@/context/userContext';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none'
  },
  logo: {
    maxHeight: 64
  },
  flexGrow: {
    flexGrow: 1
  },
  logoutButton: {
    marginLeft: theme.spacing(1)
  },
  logoutIcon: {
    marginRight: theme.spacing(1)
  }
}));

const TopBar = (props) => {
  const { onOpenNavBarMobile, className, ...rest } = props;
  const { setUser } = useUser();

  const classes = useStyles();
  const { history } = useRouter();
  // const dispatch = useDispatch();

  const handleLogout = () => {
    history.push('/auth/login');
    removeAuthTokens();
    setUser({});
  };

  return (
    <AppBar {...rest} className={clsx(classes.root, className)} color="primary">
      <Toolbar>
        <RouterLink to="/">
          <img className={classes.logo} alt="Logo" src="/images/logo.png" />
        </RouterLink>
        <div className={classes.flexGrow} />
        <Button className={classes.logoutButton} color="inherit" onClick={handleLogout}>
          <InputIcon className={classes.logoutIcon} />
          Sign out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func
};

TopBar.defaultProps = {
  className: '',
  onOpenNavBarMobile: () => {}
};

export default TopBar;
