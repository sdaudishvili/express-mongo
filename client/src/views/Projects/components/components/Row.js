import {
  Box,
  Button,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset'
    }
  },
  deleteButton: {
    marginLeft: 8
  }
});

const useArrayRendererStyles = makeStyles((theme) => ({
  anchor: {
    color: 'black',
    display: 'block',
    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'underline'
    }
  }
}));

const ArrayRenderer = ({ arr }) => {
  const classes = useArrayRendererStyles();
  const a = arr || [];
  return a.map((x) => (
    <a key={x} href={x} className={classes.anchor} style={{ hover: { textDecoration: 'underline' } }}>
      {x}
    </a>
  ));
};

const Row = ({ item, onDeleteClick }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {item.title}
        </TableCell>
        <TableCell>
          <ArrayRenderer arr={item.frontTestUrls} />
        </TableCell>
        <TableCell>
          <ArrayRenderer arr={item.adminTestUrls} />
        </TableCell>
        <TableCell>
          <ArrayRenderer arr={item.designUrls} />
        </TableCell>

        <TableCell align="right">
          <Button color="primary" component={RouterLink} to={`${'/a'}/${item.id}`} size="small" variant="outlined">
            Edit
          </Button>
          <Button
            onClick={() => onDeleteClick(item.id)}
            className={classes.deleteButton}
            type="submit"
            color="secondary"
            variant="contained"
            size="small"
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>projectManager</TableCell>
                    <TableCell>backend</TableCell>
                    <TableCell>frontend</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{item.projectManager}</TableCell>
                    <TableCell>{item.backends}</TableCell>
                    <TableCell>{item.frontends}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
            <Box mt={3}>
              <Typography variant="h6" gutterBottom component="div">
                Client Info
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>clientName</TableCell>
                    <TableCell>clientMail</TableCell>
                    <TableCell>clientPhone</TableCell>
                    <TableCell>hasSupport</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{item.clientName}</TableCell>
                    <TableCell>{item.clientMail}</TableCell>
                    <TableCell>{item.clientPhone}</TableCell>
                    <TableCell>{item.hasSupport}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

Row.propTypes = {
  item: PropTypes.object.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default Row;
