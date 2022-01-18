import { propertyKeyToLabel } from '../base';

const getKey = (key) => propertyKeyToLabel(key);

const getValue = (value) => value;

export const generateErrorMsg = (e) => {
  return `${getKey(e.key)} -> ${e.value.map((val) => getValue(val)).join(', ')}`;
};
