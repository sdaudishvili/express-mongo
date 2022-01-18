/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Link, Typography, colors } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  dropZone: {
    border: `1px dashed ${theme.palette.divider}`,
    padding: theme.spacing(6),
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: colors.grey[50],
      opacity: 0.5,
      cursor: 'pointer'
    }
  },
  image: {
    width: 130,
    marginRight: 20
  },
  info: {
    marginTop: theme.spacing(1)
  },
  input: {
    position: 'absolute',
    height: '0.1px',
    width: '0.1px',
    opacity: 0,
    top: 0
  }
}));

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Dropzone = (props) => {
  const { className, onSelect, ...rest } = props;
  const classes = useStyles();

  const inputRef = React.useRef();

  const sel = async (e) => {
    const [file] = e.target.files;
    const base64 = await toBase64(file);
    onSelect({ image: base64, name: file.name, file });
    inputRef.current.value = '';
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <label className={classes.dropZone}>
        <div>
          <img alt="Select file" className={classes.image} src="/images/undraw_add_file2_gvbb.svg" />
        </div>
        <div>
          <Typography gutterBottom variant="h3">
            Select files
          </Typography>
          <Typography className={classes.info} color="textSecondary" variant="body1">
            Browse <Link underline="always">files</Link>
          </Typography>
        </div>
        <input ref={inputRef} onChange={sel} className={classes.input} type="file" />
      </label>
    </div>
  );
};

Dropzone.propTypes = {
  className: PropTypes.string,
  onSelect: PropTypes.func
};

Dropzone.defaultProps = {
  className: '',
  onSelect: () => {}
};

export default Dropzone;
