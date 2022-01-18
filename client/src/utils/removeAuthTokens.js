import Cookies from 'js-cookie';

const removeAuthTokens = () => {
  Cookies.remove('token');
  Cookies.remove('refreshToken');
};

export default removeAuthTokens;
