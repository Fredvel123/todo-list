import "dotenv/config";

// database configs
export const db_host = process.env.DB_HOST;
export const db_name = process.env.DB_NAME;
export const db_user = process.env.BD_USER;
export const db_psswd = process.env.DB_PSSWD;
export const db_port = process.env.DB_PORT;

// emailer from google
export const email_google_key = process.env.EMAIL_GOOGLE_KEY;
export const email_server = process.env.EMAIL_SERVER;

// JWT
export const jwt_secret_key = process.env.JWT_KEY;

// clodinary
export const cloud_name = process.env.CLOUD_NAME;
export const api_key = process.env.API_KEY;
export const api_secret = process.env.API_SECRET;
