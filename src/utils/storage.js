// USERS
export const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];

export const saveUsers = (users) =>
  localStorage.setItem("users", JSON.stringify(users));

// CURRENT USER
export const setCurrentUser = (user) =>
  localStorage.setItem("currentUser", JSON.stringify(user));

export const getCurrentUser = () =>
  JSON.parse(localStorage.getItem("currentUser"));

// CAMPAIGNS
export const getCampaigns = () =>
  JSON.parse(localStorage.getItem("campaigns")) || [];

export const saveCampaigns = (campaigns) =>
  localStorage.setItem("campaigns", JSON.stringify(campaigns));

// REQUESTS
export const getRequests = () =>
  JSON.parse(localStorage.getItem("requests")) || [];

export const saveRequests = (requests) =>
  localStorage.setItem("requests", JSON.stringify(requests));
