import Response from "../interfaces/auth.interfaces";

export default function nameValidator(name: string): Response {
  if (!name) {
    return { response: false, message: "Enter your name" };
  }
  if (name.length < 4) {
    return { response: false, message: "your name is less than 4 characters" };
  }
  if (name.length > 35) {
    return {
      response: false,
      message: "your name is greater than 50 characters",
    };
  }
  return { response: true, message: "" };
}
