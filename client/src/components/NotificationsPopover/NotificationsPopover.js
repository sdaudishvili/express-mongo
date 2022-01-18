import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Popover, CardHeader, CardActions, Divider, Button, colors } from '@material-ui/core';

import { NotificationList, EmptyList } from './components';

const useStyles = makeStyles(() => ({
  root: {
    width: 350,
    maxWidth: '100%'
  },
  actions: {
    backgroundColor: colors.grey[50],
    justifyContent: 'center'
  }
}));

const NotificationsPopover = (props) => {
  const { title, notifications, anchorEl, ...rest } = props;

  const classes = useStyles();

  return (
    <Popover
      {...rest}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
    >
      <div className={classes.root}>
        <CardHeader title={title} />
        <Divider />
        {notifications.length > 0 ? <NotificationList notifications={notifications} /> : <EmptyList />}
        <Divider />
        <CardActions className={classes.actions}>
          <Button component={RouterLink} size="small" to="/logs">
            See all
          </Button>
        </CardActions>
      </div>
    </Popover>
  );
};

NotificationsPopover.propTypes = {
  title: PropTypes.string,
  anchorEl: PropTypes.any,
  className: PropTypes.string,
  notifications: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

NotificationsPopover.defaultProps = {
  title: '',
  anchorEl: null,
  className: ''
};

export default NotificationsPopover;
