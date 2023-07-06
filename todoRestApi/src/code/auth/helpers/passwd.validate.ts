import Response from "../interfaces/auth.interfaces";

export default function passwordValidate(passwd: string): Response {
  if (passwd.length < 5) {
    return {
      response: false,
      message: "your password must be greater than 4 characters",
    };
  }
  if (passwd.length > 25) {
    return {
      response: false,
      message: "Your password must be less than 26 characters",
    };
  }
  return { response: true, message: "" };
}
