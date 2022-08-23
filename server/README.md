# Todo List Backend Express/Typescript

## Data Base Diagram

<img src="./src/assets/db.diagram.png" ></img>

## REST API

AUTHENTICATION:

- url/api/auth/signup
- url/api/auth/signin
- url/api/auth/email/[email_key]
- url/api/auth/change
- url/api/auth/changepassword

USERS:

- url/api/users/all
- url/api/users/[id_user]

TASKS:

- url/api/tasks/all
- url/api/tasks/add
- url/api/tasks/user
- url/api/tasks/edit
- url/api/tasks/remove

## Dependences and Libraries

- Express - **Main Library**
- Dotenv
- JWT
- Bcryptjs
- sequelize
- morgan
- cloudinary
- Multer
