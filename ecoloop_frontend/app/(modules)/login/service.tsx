import { LoginDTO } from "./model";

export const login = async (data: LoginDTO) => {
  const response = await fetch("http://localhost:4000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to Login");
  }
  const result = await response.json();
  if (result.error) {
    throw new Error(result.error);
  }
  return result;
};
