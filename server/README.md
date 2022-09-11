# Todo List Backend Express/Typescript

## Data Base Diagram

<img src="./src/assets/db.diagram.png" ></img>

## REST API

AUTHENTICATION:

- url/api/auth/signup

```js
headers: {
  "Method": "POST",
  "Content-type": "multipart/form-data"
}
body: {
  full_name: "user name",
  email: "user email",
  password: "user password"
  avatar: // user avaatar image
}
```

- url/api/auth/signin

```js
headers: {
  "Method": "POST",
  "Content-Type": "application/json"
}
body: {
  email: "user email",
  password: "user password"
}
```

- url/api/auth/lostpsswd/[email_user] GET
<!-- - url/api/auth/email/:id GET -->

USERS:

- url/api/users/all
- url/api/users/editpasswd POST

```js
headers: {
  "access-token": "token string",
  "Method": "POST",
  "Content-Type": "application/json"
}
body: {
  password: "user password"
  new_password: "new password"
  repeate_new_password: "repeate new password"
}
```

- url/api/users/ GET

```js
headers: {
  "access-token": "token string",
  "Method": "GET",
}
```

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
