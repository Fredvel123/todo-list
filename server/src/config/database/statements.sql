CREATE TABLE IF NOT EXISTS users (
  id_user SERIAL PRIMARY KEY,
  full_name VARCHAR(85),
  email TEXT,
  password TEXT,
  email_key VARCHAR(12),
  create_at TIMESTAMP,
  avatar TEXT, 
  cloud_id TEXT
);

ALTER TABLE users ADD email_confirmed BOOLEAN DEFAULT false; 
ALTER TABLE users ADD avatar TEXT; 
ALTER TABLE users ADD cloud_id TEXT;
ALTER TABLE users ADD theme BOOLEAN DEFAULT false;

CREATE TABLE IF NOT EXISTS tasks (
  id_task SERIAL PRIMARY KEY,
  title VARCHAR (200),
  description TEXT,
  status BOOLEAN DEFAULT false,
  create_at TIMESTAMP,
  author INT
);
ALTER TABLE tasks ADD author INT;
ALTER TABLE tasks DROP finished_at;