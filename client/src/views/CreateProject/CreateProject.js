/* eslint-disable react/jsx-key */
import React from 'react';
import { useSnackbar } from 'notistack';
import { Button, Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom';
import { create } from '@/api/dataProvider';
import { generateErrorMsg } from '@/utils/messages/generateErrorMsg';
import { CardRenderer, ElemsRenderer, Page, PageHead } from '@/components';
import { messages } from '@/utils/messages';
import { propertyKeyToLabel } from '@/utils/base';
import { UrlInputs } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3, 3, 6, 3)
  }
}));

const initialValues = {
  title: '',
  frontTestUrls: [],
  adminTestUrls: [],
  repositoryUrls: [],
  productionFrontUrls: [],
  productionAdminUrls: [],
  projectManager: '',
  backends: '',
  frontends: '',
  designUrls: [],
  designers: '',
  clientName: '',
  clientMail: '',
  clientPhone: '',
  hasSupport: true,
  supportStartDate: new Date(),
  supportEndDate: new Date(),
  year: '2020',
  isOnOurServer: true
};

const CreateProject = () => {
  const [values, setValues] = React.useState({ ...initialValues });
  const classes = useStyles();

  const { enqueueSnackbar } = useSnackbar();

  const saveHandler = async () => {
    try {
      await create('/projects', values);
      enqueueSnackbar(messages.UpdateSuccess, { variant: 'success' });
    } catch (err) {
      if (err.errors) {
        err.errors.forEach((err) => enqueueSnackbar(generateErrorMsg(err), { variant: 'error' }));
      } else {
        enqueueSnackbar(err.toString(), { variant: 'error' });
      }
    }
  };

  const handleValueUpdate = ({ field, value }) => {
    console.log(field, value);
    setValues({ ...values, [field]: value });
  };

  const generateTextFieldProps = (key, { label = '', rows = 1 } = {}) => ({
    fullWidth: true,
    label: label || propertyKeyToLabel(key),
    name: key,
    value: values[key] || values[key] === 0 ? values[key] : '',
    variant: 'outlined',
    onChange: ({ target: { value } }) => handleValueUpdate({ field: key, value }),
    rows,
    multiline: rows > 1,
    key
  });

  const generateUrlInputsFields = (key) => ({
    title: propertyKeyToLabel(key),
    values: values[key] || values[key] === 0 ? values[key] : [],
    onChange: (value) => handleValueUpdate({ field: key, value }),
    key
  });

  const projectInfoElems = [
    <TextField {...generateTextFieldProps('title')} />,
    <TextField {...generateTextFieldProps('projectManager')} />,
    <TextField {...generateTextFieldProps('frontends', { rows: 6 })} />,
    <TextField {...generateTextFieldProps('backends', { rows: 6 })} />,
    <TextField {...generateTextFieldProps('designers', { rows: 6 })} />
  ];

  const clientInfoElems = [
    <TextField {...generateTextFieldProps('clientName')} />,
    <TextField {...generateTextFieldProps('clientMail')} />,
    <TextField {...generateTextFieldProps('clientPhone')} />
  ];

  const urlsElems = [
    <UrlInputs {...generateUrlInputsFields('frontTestUrls')} />,
    <UrlInputs {...generateUrlInputsFields('adminTestUrls')} />,
    <UrlInputs {...generateUrlInputsFields('designUrls')} />,
    <UrlInputs {...generateUrlInputsFields('repositoryUrls')} />,
    <UrlInputs {...generateUrlInputsFields('productionFrontUrls')} />,
    <UrlInputs {...generateUrlInputsFields('productionAdminUrls')} />
  ];

  return (
    <>
      <Page className={classes.root} title="Edit">
        <PageHead h2="resourceName" h1="Edit">
          <Button component={RouterLink} to="/" color="primary" variant="contained">
            Return to list
          </Button>
          <Button color="primary" variant="contained" onClick={saveHandler} style={{ marginLeft: 24 }}>
            Save
          </Button>
        </PageHead>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <CardRenderer title="About Project">
              <ElemsRenderer elems={projectInfoElems} />
            </CardRenderer>
            <CardRenderer title="Client Info" style={{ marginTop: 24 }}>
              <ElemsRenderer elems={clientInfoElems} />
            </CardRenderer>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardRenderer title="Urls">
              <ElemsRenderer elems={urlsElems} />
            </CardRenderer>
          </Grid>
        </Grid>
      </Page>
    </>
  );
};

export default CreateProject;
