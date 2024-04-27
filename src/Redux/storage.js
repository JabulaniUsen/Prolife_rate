const KEY_TOKEN = "APP:ADMIN:TOKEN";
const SUCCESS_SIGNUPTOKEN = "APP:USER:DATA";

export const setToken = (token) => {
  localStorage.setItem(KEY_TOKEN, token);
};

export const getToken = () => {
  let token = localStorage.getItem(KEY_TOKEN);
  return token;
};

