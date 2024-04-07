import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

// AUTH

export const registerUser = async (userData) => {
  const res = await axios.post("/api/auth/register", userData);
  return res.data;
};

export const userLogin = async (credentials) => {
  const res = await axios.post("/api/auth/login", credentials);
  return res.data;
};

// PROFILE

export const updateProfile = async (token, profileData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.put("/api/auth/profile", profileData, config);
  return res.data;
};

// USERS

export const checkCustomerAppointments = async (token, profileData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get("/api/appointments", profileData, config);
  return res.data;
};

// ADMIN

export const getUserById = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get("/api/auth/profile", config);
  return res.data;
};

export const bringAllUsers = async (token, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params,
  };
  const res = await axios.get("/api/users", config);
  return res.data;
};

export const deleteUserAdmin = async (token, userId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.delete(`/api/users/${userId}`, config);
  return res.data;
};

// SONGS

export const getAllSongs = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get("/api/songs", config);
  return res.data;
};

// POSTS

export const createPost = async (token, postData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.post("/api/posts", postData, config);
  return res.data;
};

export const getAllPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get("/api/posts", config);
  return res.data;
};

export const deletePost = async (token, postId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.delete(`/api/posts/${postId}`, config);
  return res.data;
};
