# JS_my-movie-database

![image](https://user-images.githubusercontent.com/56207146/160180040-d220e9c1-01f7-4470-acd1-055f9e0d5daa.png)

## Table of Contents

## Starting the project

### Downloading and running the project

- Clone / Download this project
- Open _Visual Studio Code_
- Open a CLI and install the dependencies with `npm run init`
- In root, rename the `.example.env` file into `.env` and fill out the keys.

![image](https://user-images.githubusercontent.com/56207146/160180194-b43157ea-7a6e-4faf-8863-021dc2a38583.png)

#### Setup the automatic project launch

Theses steps makes the project launch itself automatically and only has to be
done once

- Go to the **"JS_my-movie-database.code-workspace"** file and click on the
  "Open Workspace" button

  ![image](https://user-images.githubusercontent.com/56207146/160180330-3c543095-cc5b-477f-8d91-0f6a7f5adf80.png)

- Once the workspace is open, open the Command Palette and write down
  "`>Tasks: Run Task`". Select the option and then select "`Run the project`"

  ![image](https://user-images.githubusercontent.com/56207146/160179776-10679033-3a03-4f41-b5c3-83cb8e21542b.png)

- A prompt will now ask you on which port you want your project to run
  (3000 by default)

  ![image](https://user-images.githubusercontent.com/56207146/160179924-55610afd-d3f0-4dcf-aec1-4e8921e5db75.png)

- A terminal will open and run the command. On this point onwards, each time
  you open the workshop, the task will automatically run.

> :information_source: A prompt might ask your authorisation to accept or deny
> the automatic launch.

#### Manual project launch

Open a terminal and type in "`npm start`"

By default, PORT 3000 will be used. If you want to use another one,
pass your new port as an environment variable as such "`PORT=xxxx npm start`".

---

## Project

### Project features

Here are some of the main features of this WebApp:

#### Home page

Nothing much going on on a technical level, however, when connected, the sign up
button will go away and the name of the used be displayed

| **Not logged**                                                                                                   | **Logged**                                                                                                        |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![image](https://user-images.githubusercontent.com/56207146/160183474-097fbd49-dd27-4c6e-88bd-6e4b2e0cdf95.png) | ![image](https://user-images.githubusercontent.com/56207146/160183541-a925fb03-e809-4fdf-b289-dd4530537d10.png) |

#### Navbar

The navbar changes drastically when connected. It will display the username,
the weather (with a picture and with degrees °C) and the logout button.
It will also display a "Add movie button" if the user is an admin.

> Note that the weather will be that of the user's city on sign up.
> If the user's city isn't found, the website will ask the user's location.
> Otherwise, the feature is simply disabled.

- **Not logged**

![image](https://user-images.githubusercontent.com/56207146/160181873-cefc32ef-572f-4ad7-a35e-d97096e4ad6d.png)

- **Logged admin**

![image](https://user-images.githubusercontent.com/56207146/160181001-cc3775da-f7fe-4dd2-a892-d2e02967a430.png)

There also is the search bar that will look by title any movie from the list.
The results will appear "live", however, at this time, no search page exists.

![image](https://user-images.githubusercontent.com/56207146/160180920-66f17f7c-e867-461d-b4e9-bfad5276aaa7.png)

#### Signup / Login page

This page signs up and loggs the user.
Using localStorage and sessionStorage, we can store data to remember
or not his login.

| **Signup**                                                                                                      | **Login**                                                                                                       |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![image](https://user-images.githubusercontent.com/56207146/160181170-be1fb549-961f-48e0-a27f-57bd078380c2.png) | ![image](https://user-images.githubusercontent.com/56207146/160181184-104efc24-a177-4c2f-85df-b9919f767224.png) |

> A message will appear if the user is already logged

![image](https://user-images.githubusercontent.com/56207146/160181057-a2596f94-4ad7-4ef8-acca-ba5f6aec3a3e.png)

#### List page

Displays all movies in form of cards.

![image](https://user-images.githubusercontent.com/56207146/160181365-81224c22-451a-4f05-bf44-28a2f7510ec4.png)

If the logged user is an admin, on each card will be the edit and delete buttons.

![image](https://user-images.githubusercontent.com/56207146/160181409-7c79f542-1525-4642-a14e-e4763ab83776.png)

- On edit, it will redirect the user to the movie form page
- On delete, a modal will appear asking you

#### Genre page

Same principle than the "list page", hovewer it only displays the
movies with the genre required.

![image](https://user-images.githubusercontent.com/56207146/160181438-6c75e5f8-7d45-4a2a-9670-f249ff3642a7.png)

#### Movie page

Displays all the movie info. Simple as that.

![image](https://user-images.githubusercontent.com/56207146/160181490-866969ad-6ade-4945-ba5b-239db38a4416.png)

#### Add / Edit movie

The movie form will be the same for both adding and editing a movie.
Mind that if you are editing a movie, all current data will
already populate the form.

| **Add**                                                                                                         | **Edit**                                                                                                        |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| ![image](https://user-images.githubusercontent.com/56207146/160181704-ea8fce76-739b-4ed6-ad45-bf1dd6d6245f.png) | ![image](https://user-images.githubusercontent.com/56207146/160181601-2184ec2e-d520-4eaf-9252-52c5cfe940d2.png) |

### Project dependencies

@trivago/prettier-plugin-sort-imports ^3.2.0:

- `npm install @trivago/prettier-plugin-sort-imports --save-dev`

bcryptjs ^2.4.3:

- `npm install bcryptjs --save-dev`

cross-fetch ^3.1.5:

- `npm install cross-fetch --save-dev`

dotenv ^16.0.0:

- `npm install dotenv --save-dev`

eslint ^8.10.0:

- `npm install eslint --save-dev`

eslint-plugin-import ^2.25.4:

- `npm install eslint-plugin-import --save-dev`

express ^4.17.3:

- `npm install express --save-dev`

js-unused-exports ^1.2.1:

- `npm install js-unused-exports --save-dev`

markdownlint ^0.25.1:

- `npm install markdownlint --save-dev`

markdownlint-cli ^0.31.1:

- `npm install markdownlint-cli --save-dev`

mongoose ^6.2.7:

- `npm install mongoose --save-dev`

mongoose-unique-validator ^3.0.0:

- `npm install mongoose-unique-validator --save-dev`

nodemon ^2.0.15:

- `npm install nodemon --save-dev`

prettier ^2.5.1:

- `npm install prettier --save-dev`

serve-favicon ^2.5.0:

- `npm install serve-favicon --save-dev`

### Project tree

```tree
📦 ROOT
├─ .env
├─ .eslintrc.yaml
├─ .github
│  └─ workflows
│     ├─ checks.yaml
│     └─ markdown.yaml
├─ .gitignore
├─ .markdownlint.yaml
├─ .markdownlintignore
├─ .nvmrc
├─ .prettierrc.yaml
├─ .vscode
│  └─ tasks.json
├─ LICENSE.md
├─ README.md
├─ index.js
├─ mmdb.code-workspace
├─ package-lock.json
├─ package.json
├─ src
│  ├─ assets
│  │  ├─ css
│  │  │  ├─ auth.css
│  │  │  ├─ core.css
│  │  │  ├─ home.css
│  │  │  ├─ list.css
│  │  │  ├─ movie.css
│  │  │  └─ movie.form.css
│  │  ├─ data
│  │  │  ├─ genres.json
│  │  │  ├─ movies.json
│  │  │  └─ users.json
│  │  └─ img
│  │     ├─ favicon.ico
│  │     └─ home-bg.png
│  ├─ class
│  │  ├─ movie.class.js
│  │  └─ userData.class.js
│  ├─ config
│  │  ├─ db.config.js
│  │  └─ openWeather.config.js
│  ├─ controllers
│  │  ├─ auth.controller.js
│  │  ├─ movie.controller.js
│  │  ├─ search.controller.js
│  │  └─ weather.controller.js
│  ├─ core
│  │  ├─ loggedMessage.js
│  │  ├─ navbar.js
│  │  └─ navbar.model.js
│  ├─ index.html
│  ├─ middlewares
│  │  └─ verifySignUp.js
│  ├─ models
│  │  ├─ genres.model.js
│  │  ├─ movies.model.js
│  │  └─ users.model.js
│  ├─ pages
│  │  ├─ auth
│  │  │  ├─ auth.html
│  │  │  └─ auth.js
│  │  ├─ home
│  │  │  └─ home.js
│  │  ├─ list
│  │  │  ├─ adminButtons.model.js
│  │  │  ├─ createCard.model.js
│  │  │  ├─ list.html
│  │  │  └─ list.js
│  │  ├─ movie
│  │  │  ├─ movie.html
│  │  │  ├─ movie.js
│  │  │  └─ movie.model.js
│  │  └─ movieForm
│  │     ├─ movie.edit.js
│  │     ├─ movie.form.html
│  │     └─ movie.form.js
│  ├─ routes
│  │  ├─ auth.routes.js
│  │  ├─ class.routes.js
│  │  ├─ core.routes.js
│  │  ├─ data.routes.js
│  │  ├─ home.routes.js
│  │  ├─ index.js
│  │  ├─ list.routes.js
│  │  ├─ movie.form.routes.js
│  │  └─ movie.routes.js
│  ├─ server
│  │  ├─ app.js
│  │  ├─ consoleMessage.js
│  │  └─ normalizePort.js
│  └─ utils
│     ├─ alertHandler.js
│     ├─ formatImageUrl.js
│     ├─ formatReleaseDate.js
│     ├─ getIdFromUrl.js
│     ├─ getRequest.js
│     ├─ getWeather.js
│     ├─ index.js
│     ├─ urlContains.js
│     └─ userDataStorage.js
└─ yarn.lock
```
