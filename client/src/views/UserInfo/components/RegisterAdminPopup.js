import { ElemsRenderer, Popup } from '@/components';
import { propertyKeyToLabel } from '@/utils/base';
import { TextField } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
import { generateErrorMsg } from '@/utils/messages/generateErrorMsg';
import { registerAdmin } from '@/api/authProvider';
import { messages } from '@/utils/messages';

const initialValues = { role: 'admin' };

const RegisterAdminPopup = ({ isOpen, onClose }) => {
  const [values, setValues] = React.useState({ ...initialValues });
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => onClose(), []);

  const onSave = async () => {
    try {
      await registerAdmin(values);
      enqueueSnackbar(messages.UpdateSuccess, { variant: 'success' });
      onClose();
      setValues({ ...initialValues });
    } catch (err) {
      if (err.errors) {
        err.errors.forEach((err) => enqueueSnackbar(generateErrorMsg(err), { variant: 'error' }));
      } else {
        enqueueSnackbar(err.toString(), { variant: 'error' });
      }
    }
  };

  const handleValueUpdate = ({ field, value }) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };
  const generateTextFieldProps = (key) => ({
    fullWidth: true,
    label: propertyKeyToLabel(key),
    name: key,
    value: values[key] || '',
    variant: 'outlined',
    onChange: ({ target: { value } }) => handleValueUpdate({ field: key, value })
  });

  const elems = [
    <TextField {...generateTextFieldProps('firstName')} />,
    <TextField {...generateTextFieldProps('lastName')} />,
    <TextField {...generateTextFieldProps('email')} />,
    <TextField {...generateTextFieldProps('password')} />,
    <TextField {...generateTextFieldProps('confirmPassword')} />
  ];

  return (
    <Popup title="Register New Admin" open={isOpen} onClose={onClose} onCancel={onClose} onSave={onSave}>
      <ElemsRenderer elems={elems} />
    </Popup>
  );
};

RegisterAdminPopup.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool
};

RegisterAdminPopup.defaultProps = {
  onClose: () => {},
  isOpen: false
};
export default RegisterAdminPopup;
