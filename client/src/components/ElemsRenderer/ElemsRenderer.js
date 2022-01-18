import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

const ElemsRenderer = (props) => {
  const { className, elems, ...rest } = props;

  return (
    <Grid container spacing={3} {...rest} className={className}>
      {elems.map((elem, i) => {
        return (
          elem && (
            <Grid item xs={12} key={i.toString()}>
              {elem}
            </Grid>
          )
        );
      })}
    </Grid>
  );
};

ElemsRenderer.propTypes = {
  className: PropTypes.string,
  elems: PropTypes.any.isRequired
};

ElemsRenderer.defaultProps = {
  className: ''
};

export default ElemsRenderer;
