const main = "http://192.168.0.8:8000"; // development
// const main = "http://www.example.com"; // producion

export const signup = main + "/api/auth/signup";
export const signin = main + "/api/auth/signin";
export const userInfo = main + "/api/users/user";
export const updateAvatar = main + "/api/users/avatar";
export const editpasswd = main + "/api/users/editpasswd";
export const deleteUser = main + "/api/users/delete";

export const createTasks = main + "/api/tasks/create";
export const getAllTasks = main + "/api/tasks/all";
export const getTasksByUser = main + "/api/tasks/user";
