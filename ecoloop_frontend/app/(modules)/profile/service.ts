export const getProfile = async (token: string) => {
  const res = await fetch("http://localhost:4000/user/profile/", {
    cache: "no-store",
    headers: {
      AUTHORIZATION: `Bearer ${token}`,
    },
  });
  return await res.json();
};
