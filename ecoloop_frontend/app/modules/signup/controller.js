import { signupUser } from './model';

export const handleSignupSubmit = async (e, onSuccess, onError) => {
  e.preventDefault();
  const form = new FormData(e.target);

  const user = {
    name: form.get('name'),
    phone: form.get('phone'),
    email: form.get('email'),
    password: form.get('password'),
  };

  try {
    const res = await signupUser(user);
    if (res.success) {
      onSuccess();
    } else {
      onError(res.message || 'Signup failed');
    }
  } catch (err) {
    onError(err.message);
  }
};
