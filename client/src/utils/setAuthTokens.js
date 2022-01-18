import Cookies from 'js-cookie';

const setAuthTokens = (token, refreshToken) => {
  Cookies.set('token', token);
  Cookies.set('refreshToken', refreshToken);
};

export default setAuthTokens;
