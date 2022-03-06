# JS_my-movie-database

## Downloading and running the project

- Clone / Download this project
- Open _Visual Studio Code_
- Open a CLI and install the dependencies with `npm run init`

### Setup the automatic project launch

Theses steps makes the project launch itself automatically and only has to be
done once

- Go to the **"JS_my-movie-database.code-workspace"** file and click on the
  "Open Workspace" button
- Once the workspace is open, open the Command Palette and write down
  "`>Tasks: Run Task`". Select the option and then select "`Run the project`"
- A prompt will now ask you on which port you want your project to run
  (3000 by default)
- A terminal will open and run the command. On this point onwards, each time
  you open the workshop, the task will automatically run.

> :information_source: A prompt might ask your authorisation to accept or deny
> the automatic launch.

### Manual project launch

Open a terminal and type in "`npm start`"

By default, PORT 3000 will be used. If you want to use another one,
pass your new port as an environment variable as such "`PORT=xxxx npm start`".

---

## Commands used so far

Eslint:

- `npm install eslint --save-dev`
- `npm install eslint-plugin-import --save-dev`

Prettier:

- `npm install prettier --save-dev`

Markdownlint:

- `npm install markdownlint --save-dev`

Js-unused-exports:

- `npm install js-unused-exports --save-dev`

Bootstrap:

- `npm install bootstrap --save-dev`

Nodemon:

- `npm install nodemon --save-dev`

Express:

- `npm install express --save-dev`
