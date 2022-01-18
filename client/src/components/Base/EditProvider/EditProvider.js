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
import { getOne, updateOne } from '@/api/dataProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3, 3, 6, 3)
  }
}));

const EditProvider = (props) => {
  const { resourceName, resource, component: Component, baseRoute } = props;
  const [record, setRecord] = React.useState({});
  const [fetched, setFetched] = React.useState(false);
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const router = useRouter();
  const { id } = router.match.params;

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getOne(resource, id);
        setRecord(res);
        setFetched(true);
      } catch (err) {
        if (err.errors) {
          err.errors.forEach((err) => enqueueSnackbar(generateErrorMsg(err), { variant: 'error' }));
        } else {
          enqueueSnackbar(err.toString(), { variant: 'error' });
        }
      }
    };
    fetchData();
  }, [resource, id]);

  const saveHandler = async (values) => {
    try {
      await updateOne(resource, values);
      enqueueSnackbar(messages.UpdateSuccess, { variant: 'success' });
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
    <Page className={classes.root} title="Edit">
      <PageHead h2={resourceName} h1="Edit">
        {baseRoute && (
          <Button component={RouterLink} to={baseRoute} color="primary" variant="contained">
            Return to list
          </Button>
        )}
      </PageHead>
      {fetched && <Component saveHandler={saveHandler} initialValues={record} />}
    </Page>
  );
};

EditProvider.propTypes = {
  resourceName: PropTypes.string.isRequired,
  resource: PropTypes.string.isRequired,
  baseRoute: PropTypes.string,
  component: PropTypes.any
};

EditProvider.defaultProps = {
  component: null,
  baseRoute: null
};

export default EditProvider;
