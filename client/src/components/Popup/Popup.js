import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal as MaterialModal,
  Card,
  CardContent,
  Typography,
  Divider,
  CardActions,
  IconButton,
  colors,
  Button,
  Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    boxShadow: theme.shadows[20],
    width: 700,
    maxHeight: '100%',
    overflowY: 'auto',
    maxWidth: '100%'
  },
  field: {
    marginTop: theme.spacing(3)
  },
  flexGrow: {
    flexGrow: 1
  },
  cancelButton: {
    marginLeft: 'auto'
  },
  confirmButton: {
    color: theme.palette.white,
    backgroundColor: colors.green[600],
    '&:hover': {
      backgroundColor: colors.green[900]
    }
  },
  children: {
    marginTop: theme.spacing(3)
  }
}));

const Modal = (props) => {
  const { children, title, onCancel, onDelete, onSave, className, haveActions, isValid, ...rest } = props;

  const classes = useStyles();

  return (
    <MaterialModal {...rest}>
      <Card className={clsx(classes.root, className)}>
        <form>
          <CardContent>
            <Typography align="center" gutterBottom variant="h3">
              {title}
            </Typography>
            <Container disableGutters className={classes.children}>
              {children}
            </Container>
          </CardContent>
          <Divider />
          {haveActions && (
            <CardActions>
              {onDelete && (
                <IconButton edge="start" onClick={onDelete}>
                  <DeleteIcon />
                </IconButton>
              )}
              <div className={classes.flexGrow} />
              <Button className={classes.cancelButton} onClick={onCancel} variant="contained">
                Cancel
              </Button>
              <Button className={classes.confirmButton} onClick={onSave} disabled={!isValid} variant="contained">
                Save
              </Button>
            </CardActions>
          )}
        </form>
      </Card>
    </MaterialModal>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string,
  className: PropTypes.string,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
  onDelete: PropTypes.func,
  haveActions: PropTypes.bool,
  isValid: PropTypes.bool
};

Modal.defaultProps = {
  children: '',
  title: '',
  className: '',
  onCancel: () => {},
  onSave: () => {},
  onDelete: null,
  haveActions: true,
  isValid: true
};

export default Modal;
