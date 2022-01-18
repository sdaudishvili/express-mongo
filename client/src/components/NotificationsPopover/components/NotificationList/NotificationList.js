import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import gradients from '@/utils/gradients';

const useStyles = makeStyles((theme) => ({
  root: {},
  listItem: {
    '&:hover': {
      backgroundColor: theme.palette.background.default
    }
  },
  inline: {
    display: 'inline'
  },
  avatarBlue: {
    backgroundImage: gradients.blue
  },
  avatarRed: {
    backgroundImage: gradients.red
  }
}));

const NotificationList = (props) => {
  const { notifications, className, ...rest } = props;

  const classes = useStyles();

  const avatars = {
    createUser: (
      <Avatar className={classes.avatarBlue}>
        <PersonAddIcon />
      </Avatar>
    ),
    deleteUser: (
      <Avatar className={classes.avatarRed}>
        <DeleteForeverIcon />
      </Avatar>
    ),
    createArticle: (
      <Avatar className={classes.avatarBlue}>
        <NoteAddIcon />
      </Avatar>
    ),
    deleteArticle: (
      <Avatar className={classes.avatarRed}>
        <DeleteForeverIcon />
      </Avatar>
    )
  };

  return (
    <List {...rest} className={clsx(classes.root, className)} disablePadding>
      {notifications.map((notification, i) => (
        <ListItem
          className={classes.listItem}
          component={RouterLink}
          divider={i < notifications.length - 1}
          key={notification.id}
          to="#"
        >
          <ListItemAvatar>{avatars[notification.type]}</ListItemAvatar>
          <ListItemText
            primary={notification.title}
            primaryTypographyProps={{ variant: 'body1' }}
            secondary={
              <>
                <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                  by {notification.user}
                </Typography>
                {` — ${moment(notification.created_at).fromNow()}`}
              </>
            }
          />
          <ArrowForwardIcon className={classes.arrowForwardIcon} />
        </ListItem>
      ))}
    </List>
  );
};

NotificationList.propTypes = {
  className: PropTypes.string,
  notifications: PropTypes.array.isRequired
};

NotificationList.defaultProps = {
  className: ''
};

export default NotificationList;
