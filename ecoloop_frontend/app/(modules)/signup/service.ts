import { RegisterDTO } from "./model";

export const singup = async (data: RegisterDTO) => {
  const response = await fetch('http://localhost:4000/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('Failed to register');
  }
  const result = await response.json();
  if (result.error) {
    throw new Error(result.error);
  }
  return result;
}