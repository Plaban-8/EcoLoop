import { loginUser } from './login.model';

export const handleLoginSubmit = async (e, onSuccess, onError) => {
  e.preventDefault();
  const form = new FormData(e.target);
  const credentials = {
    email: form.get('email'),
    password: form.get('password'),
  };

  try {
    const result = await loginUser(credentials);
    localStorage.setItem('token', result.token);
    onSuccess(result.user);
  } catch (err) {
    onError(err.message);
  }
};
