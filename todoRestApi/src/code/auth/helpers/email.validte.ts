import Response from "../interfaces/auth.interfaces";

export default function emailvalidate(email: string): Response {
  if (email.length < 4) {
    return { response: false, message: "Add a valid email" };
  }
  if (email.length > 150) {
    return {
      response: false,
      message: "your email is greater than 150 characters",
    };
  }
  return { response: true, message: "" };
}
