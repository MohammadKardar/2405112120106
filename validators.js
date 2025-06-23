export const validateShortcode = (code) => {
  return /^[a-zA-Z0-9]{4,8}$/.test(code);
};
