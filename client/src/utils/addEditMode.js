export const ADD = 'add';
export const EDIT = 'edit';

export const getAddEditModeTemplate = (modeTitle) => {
  const modesTemplate = new Map();
  modesTemplate.set(ADD, { title: `Add ${modeTitle}`, name: ADD });
  modesTemplate.set(EDIT, { title: `Edit ${modeTitle}`, name: EDIT });

  return modesTemplate;
};
