import Page from '@/components/Page';
import PageHead from '@/components/PageHead';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useSnackbar } from 'notistack';
import useRouter from '@/utils/useRouter';
import { messages } from '@/utils/messages';
import { generateErrorMsg } from '@/utils/messages/generateErrorMsg';
import { create } from '@/api/dataProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3, 3, 6, 3)
  }
}));

const CreateProvider = (props) => {
  const { resourceName, resource, component: Component, baseRoute } = props;
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const router = useRouter();

  const saveHandler = async (values) => {
    try {
      await create(resource, values);
      enqueueSnackbar(messages.CreateSuccess, { variant: 'success' });
      router.history.push(baseRoute);
    } catch (err) {
      if (err.errors) {
        err.errors.forEach((err) => enqueueSnackbar(generateErrorMsg(err), { variant: 'error' }));
      } else {
        enqueueSnackbar(err.toString(), { variant: 'error' });
      }
    }
  };

  return (
    <Page className={classes.root} title="Create">
      <PageHead h2={resourceName} h1="Create">
        {baseRoute && (
          <Button component={RouterLink} to={baseRoute} color="primary" variant="contained">
            Return to list
          </Button>
        )}
      </PageHead>
      <Component saveHandler={saveHandler} />
    </Page>
  );
};

CreateProvider.propTypes = {
  resourceName: PropTypes.string.isRequired,
  resource: PropTypes.string.isRequired,
  baseRoute: PropTypes.string,
  component: PropTypes.any
};

CreateProvider.defaultProps = {
  component: null,
  baseRoute: null
};

export default CreateProvider;
