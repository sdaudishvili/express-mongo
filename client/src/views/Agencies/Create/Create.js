import React, { useState } from 'react';
import { propertyKeyToLabel } from '@/utils/base';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from '@material-ui/core';
import { ElemsRenderer, Preferences, CardRenderer, Editor } from '@/components';
import PropTypes from 'prop-types';
import { getUniqueSlug } from '@/api/dataProvider';
import debounce from '@/utils/debounce';
import { agencyTypes } from '../utils/types';

const AgencyCreate = ({ saveHandler, initialValues }) => {
  const [values, setValues] = useState({ ...initialValues });

  const onSave = () => {
    saveHandler(values);
  };

  const handleValueUpdate = ({ field, value }) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const generateTextFieldProps = (key, { label = '' } = {}) => ({
    fullWidth: true,
    label: label || propertyKeyToLabel(key),
    name: key,
    value: values[key] || values[key] === 0 ? values[key] : '',
    variant: 'outlined'
  });

  const handleSlugUpdate = () => async (value) => {
    const slug = await getUniqueSlug('agencies', { text: value });
    handleValueUpdate({ field: 'slug', value: slug });
  };
  const debouncedHandleSlugUpdate = React.useCallback(debounce(handleSlugUpdate(), 500), []);

  const onTitleChange = ({ target: { value } }) => {
    handleValueUpdate({ field: 'title', value });
    debouncedHandleSlugUpdate(value);
  };

  const aboutElems = [
    <TextField {...generateTextFieldProps('title')} onChange={onTitleChange} />,
    <TextField
      {...generateTextFieldProps('slug')}
      onChange={({ target: { value } }) => handleValueUpdate({ field: 'slug', value })}
    />,
    <FormControl variant="outlined" fullWidth>
      <InputLabel>Type</InputLabel>
      <Select value={values.type || ''} label="Type">
        <MenuItem value="" onClick={() => handleValueUpdate({ field: 'type', value: '' })}>
          <em>None</em>
        </MenuItem>
        {agencyTypes.map((option) => (
          <MenuItem value={option.key} onClick={() => handleValueUpdate({ field: 'type', value: option.key })}>
            {option.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>,
    <TextField
      {...generateTextFieldProps('innerTitle')}
      onChange={({ target: { value } }) => handleValueUpdate({ field: 'innerTitle', value })}
    />,
    <TextField
      {...generateTextFieldProps('index')}
      type="number"
      onChange={({ target: { value } }) => handleValueUpdate({ field: 'index', value })}
    />
  ];

  const cardElems = [
    <Preferences
      hasPublish
      published={values.published}
      onPublishedValueUpdate={(published) => handleValueUpdate({ field: 'published', value: published })}
    />,
    <Card>
      <CardHeader title="About" />
      <CardContent>
        <ElemsRenderer elems={aboutElems} />
      </CardContent>
    </Card>,
    <CardRenderer title="Description">
      <Editor
        initialValue={values.description}
        onChange={(value) => handleValueUpdate({ field: 'description', value })}
      />
    </CardRenderer>,

    <Button color="primary" variant="contained" onClick={onSave}>
      Save
    </Button>
  ];

  return <ElemsRenderer elems={cardElems} />;
};

AgencyCreate.propTypes = {
  saveHandler: PropTypes.func,
  initialValues: PropTypes.object
};

AgencyCreate.defaultProps = {
  saveHandler: () => {},
  initialValues: {}
};

export default AgencyCreate;
