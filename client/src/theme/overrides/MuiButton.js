import { colors } from '@material-ui/core';

export default {
  contained: {
    boxShadow: '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
    backgroundColor: '#FFFFFF'
  },
  containedSecondary: {
    backgroundColor: colors.red[400],
    '&:hover': {
      backgroundColor: colors.red[500]
    }
  },
  outlinedSecondary: {
    color: colors.red[400],
    borderColor: colors.red[400],
    '&:hover': {
      color: colors.red[500],
      borderColor: colors.red[500]
    }
  },
  textSecondary: {
    color: colors.red[400],
    '&:hover': {
      color: colors.red[500]
    }
  }
};
