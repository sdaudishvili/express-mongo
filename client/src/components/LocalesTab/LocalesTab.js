import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Box, Tabs, Tab } from '@material-ui/core';
import { locales } from '@/utils/locales';

const useStyles = makeStyles(() => ({
  root: {}
}));

const LocalesTab = (props) => {
  const { onLocaleUpdate, ...rest } = props;

  const classes = useStyles();
  const [locale, setLocale] = useState(0);

  const handleChange = (index) => {
    onLocaleUpdate(locales.get(index).code);
    setLocale(index);
  };

  return (
    <Box {...rest} className={classes.root}>
      <Card>
        <Tabs
          value={locale}
          onChange={(_, index) => handleChange(index)}
          indicatorColor="secondary"
          textColor="primary"
        >
          <Tab label={locales.get(0).name} />
          <Tab label={locales.get(1).name} />
        </Tabs>
      </Card>
    </Box>
  );
};

LocalesTab.propTypes = {
  onLocaleUpdate: PropTypes.func
};

LocalesTab.defaultProps = {
  onLocaleUpdate: () => {}
};

export default LocalesTab;
