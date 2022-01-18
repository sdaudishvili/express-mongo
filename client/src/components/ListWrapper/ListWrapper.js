import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Card, CardActions, TablePagination, CardHeader, Typography, Box } from '@material-ui/core';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  actions: {
    padding: theme.spacing(1),
    justifyContent: 'flex-end'
  },
  divider: {
    transform: 'translateY(-1px)'
  }
}));

const ListWrapper = (props) => {
  const { count, page, className, children, title, onPageChange, perPage, pagination, action, ...rest } = props;
  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    onPageChange(newPage, perPage);
  };

  const handleChangeRowsPerPage = (event) => {
    const newValue = event.target.value;
    onPageChange(0, newValue);
  };

  return (
    <Box {...rest} className={clsx(classes.root, className)}>
      {!!count && (
        <Typography color="textSecondary" gutterBottom variant="body2">
          {count} Records found.
          {pagination && (
            <>
              Page {page + 1} of {Math.ceil(count / perPage)}
            </>
          )}
        </Typography>
      )}

      <Card>
        <CardHeader action={action} title={title} />
        <Divider />
        {children && <PerfectScrollbar>{children}</PerfectScrollbar>}
        {pagination && (
          <>
            <Divider className={classes.divider} />
            <CardActions className={classes.actions}>
              <TablePagination
                component="div"
                count={count}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                page={page}
                rowsPerPage={perPage}
                rowsPerPageOptions={[5, 10, 25]}
              />
            </CardActions>
          </>
        )}
      </Card>
    </Box>
  );
};

ListWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  count: PropTypes.number,
  title: PropTypes.string,
  onPageChange: PropTypes.func,
  perPage: PropTypes.number,
  pagination: PropTypes.bool,
  action: PropTypes.any,
  page: PropTypes.number
};

ListWrapper.defaultProps = {
  className: '',
  children: null,
  title: '',
  count: 0,
  page: 0,
  onPageChange: () => {},
  perPage: 10,
  pagination: true,
  action: null
};

export default ListWrapper;
