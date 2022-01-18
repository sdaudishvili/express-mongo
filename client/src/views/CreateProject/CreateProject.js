import React from 'react';
import { CardTextField, ElemsRenderer, MultiTextField, Page, PageHead } from '@/components';
import { generateErrorMsg } from '@/utils/messages/generateErrorMsg';
import { create } from '@/api/dataProvider';
import { useSnackbar } from 'notistack';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link as RouterLink } from 'react-router-dom';
import { messages } from '@/utils/messages';
import { propertyKeyToLabel } from '@/utils/base';

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.breakpoints.values.lg,
    maxWidth: '100%',
    margin: '0 auto',
    padding: theme.spacing(3, 3, 6, 3)
  }
}));

const initialValues = {
  title: '',
  frontTestUrls: [],
  backTestUrls: [],
  repositoryUrls: [],
  productionUrls: [],
  projectManager: '',
  backend: '',
  frontend: '',
  designUrls: [],
  designers: '',
  clientName: '',
  clientMail: '',
  clientPhone: '',
  hasSupport: true,
  supportStartDate: new Date(),
  supportEndDate: new Date(),
  year: '',
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

  const generateTextFieldProps = (key, { label = '' } = {}) => ({
    fullWidth: true,
    label: label || propertyKeyToLabel(key),
    name: key,
    value: values[key] || values[key] === 0 ? values[key] : '',
    variant: 'outlined',
    onChange: ({ target: { value } }) => handleValueUpdate({ field: key, value })
  });

  const generateMultiTextFieldProps = (key) => ({
    title: propertyKeyToLabel(key),
    values: values[key] || values[key] === 0 ? values[key] : [],
    onChange: (value) => handleValueUpdate({ field: key, value })
  });

  const elems = [
    <CardTextField {...generateTextFieldProps('title')} />,
    <MultiTextField {...generateMultiTextFieldProps('frontTestUrls')} />,
    <MultiTextField {...generateMultiTextFieldProps('backTestUrls')} />,
    <MultiTextField {...generateMultiTextFieldProps('repositoryUrls')} />,
    <MultiTextField {...generateMultiTextFieldProps('productionUrls')} />,
    <MultiTextField {...generateMultiTextFieldProps('designUrls')} />,
    <CardTextField {...generateTextFieldProps('projectManager')} />,
    <CardTextField {...generateTextFieldProps('frontend')} />,
    <CardTextField {...generateTextFieldProps('designers')} />,
    <CardTextField {...generateTextFieldProps('clientName')} />,
    <CardTextField {...generateTextFieldProps('clientMail')} />,
    <CardTextField {...generateTextFieldProps('clientPhone')} />,

    <Button color="primary" variant="contained" onClick={saveHandler}>
      Save
    </Button>
  ];

  return (
    <>
      <Page className={classes.root} title="Edit">
        <PageHead h2="resourceName" h1="Edit">
          <Button component={RouterLink} to="/" color="primary" variant="contained">
            Return to list
          </Button>
        </PageHead>
        <ElemsRenderer elems={elems} />
      </Page>
    </>
  );
};

export default CreateProject;
