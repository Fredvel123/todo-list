CREATE TABLE IF NOT EXISTS users (
  id_user SERIAL PRIMARY KEY,
  full_name VARCHAR(85),
  email TEXT,
  password TEXT,
  email_key VARCHAR(12),
  create_at TIMESTAMP
);

ALTER TABLE users ADD email_confirmed BOOLEAN DEFAULT false; 
ALTER TABLE users ADD avatar TEXT; 
ALTER TABLE users ADD cloud_id TEXT;
