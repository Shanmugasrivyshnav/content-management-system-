import api from "./axios";

export const login = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  return response.data;
};
/**
 * Admin Login
 */
/*export const login = async (email, password) => {
  const { data } = await api.post("/auth/login", {
    email,
    password,
  });

  return data;
};*/

/**
 * Get Logged-in Admin Profile
 */
export const getProfile = async () => {
  const { data } = await api.get("/auth/profile");
  return data;
};

/**
 * Refresh Token (optional for future use)
 */
export const refreshToken = async () => {
  const { data } = await api.post("/auth/refresh");
  return data;
};
