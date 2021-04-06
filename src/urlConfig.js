// const baseUrl = process.env.API || "https://flipkart-rest-server.herokuapp.com";
// const baseUrl = "http://localhost:2000";
const baseUrl = process.env.API || "https://hackerramp-backend.herokuapp.com";

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
