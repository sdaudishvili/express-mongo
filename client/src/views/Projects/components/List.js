/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

import { Row } from './components';

const useStyles = makeStyles((theme) => ({
  inner: {
    minWidth: 700
  },
  actions: {
    whiteSpace: 'nowrap'
  },
  imageCell: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    height: 52,
    width: 52,
    marginRight: theme.spacing(1)
  },
  deleteButton: {
    marginLeft: theme.spacing(1)
  }
}));

const List = (props) => {
  const { items, onDeleteClick } = props;

  const classes = useStyles();

  const [deletableItemId, setDeletableItemId] = React.useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
    setDeletableItemId(null);
  };

  // eslint-disable-next-line no-unused-vars
  const handleDeleteButtonClick = (id) => {
    setDeletableItemId(id);
    setIsDeleteModalOpen(true);
  };

  const handleSubmitDeleteButtonClick = () => {
    onDeleteClick(deletableItemId);
    handleDeleteModalClose();
  };

  return (
    <div className={classes.inner}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell width={100} />
            <TableCell>Title</TableCell>
            <TableCell>Front Urls</TableCell>
            <TableCell>Admin Urls</TableCell>
            <TableCell>Design Urls</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items &&
            items.map((item, i) => <Row item={item} key={JSON.stringify(i)} onDeleteClick={handleDeleteButtonClick} />)}
        </TableBody>
      </Table>

      <Dialog
        open={isDeleteModalOpen}
        keepMounted
        onClose={handleDeleteModalClose}
        aria-labelledby="alert-dialog-item-title"
        aria-describedby="alert-dialog-item-description"
      >
        <DialogTitle id="alert-dialog-item-title">Delete item</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-item-description">
            Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteModalClose} color="primary">
            No
          </Button>
          <Button onClick={handleSubmitDeleteButtonClick} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func
};
List.defaultProps = {
  onDeleteClick: () => {}
};

export default List;
