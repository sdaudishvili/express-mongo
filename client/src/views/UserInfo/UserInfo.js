import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { propertyKeyToLabel } from '@/utils/base';
import { useUser } from '@/context/userContext';
import getInitials from '@/utils/getInitials';
import { ElemsRenderer, Page } from '@/components';
import React from 'react';
import { ChangePasswordPopup, RegisterAdminPopup } from './components';

const canRegister = false;

const useStyles = makeStyles(() => ({
  box: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  avatar: {
    height: 100,
    width: 100,
    marginBottom: 30,
    background: 'black',
    fontSize: 30
  }
}));

const Account = () => {
  const classes = useStyles();

  const [changePasswordPopupIsVisible, setChangePasswordPopupIsVisible] = React.useState(false);
  const [registerAdminPopupIsVisible, setRegisterAdminPopupIsVisible] = React.useState(false);

  const { user: userInfo } = useUser();

  const generateTextFieldProps = (key, { label = '' } = {}) => ({
    fullWidth: true,
    label: label || propertyKeyToLabel(key),
    name: key,
    value: userInfo[key] || '',
    variant: 'outlined'
  });

  return (
    <Page title="Create">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <Card>
              <CardContent>
                <Box className={classes.box}>
                  <Avatar alt="Person" className={classes.avatar}>
                    {getInitials(userInfo.given_name)}
                  </Avatar>
                  <Typography color="textPrimary" gutterBottom variant="h3">
                    {userInfo.given_name}
                  </Typography>
                </Box>
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  color="primary"
                  fullWidth
                  variant="outlined"
                  onClick={() => setRegisterAdminPopupIsVisible(true)}
                  disabled={!canRegister}
                >
                  Register New Admin
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <Card>
              <CardHeader subheader="The information can not be edited" title="Profile" />
              <Divider />
              <CardContent>
                <ElemsRenderer
                  elems={[
                    <TextField {...generateTextFieldProps('given_name', { label: 'Full Name' })} />,
                    <TextField {...generateTextFieldProps('email')} />
                  ]}
                />
              </CardContent>
              <Divider />
              <CardActions>
                <Button
                  style={{ marginLeft: 'auto' }}
                  color="primary"
                  variant="contained"
                  onClick={() => setChangePasswordPopupIsVisible(true)}
                >
                  Change Password
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <ChangePasswordPopup
        isOpen={changePasswordPopupIsVisible}
        onClose={() => setChangePasswordPopupIsVisible(false)}
      />
      {canRegister && (
        <RegisterAdminPopup
          isOpen={registerAdminPopupIsVisible}
          onClose={() => setRegisterAdminPopupIsVisible(false)}
        />
      )}
    </Page>
  );
};

export default Account;
