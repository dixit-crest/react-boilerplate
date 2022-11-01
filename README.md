# Getting Started with boilerplate

## How to run ?
- refer to `.env.example` file, create `.env` in the root file assign required variables.
- run `npm install` to install dependencies
- run `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Folder structure of the project
This project has been initiated with the concept of `modules`, pages, components and every other type of code is stored in single folder and then has been separated into folders module wise.

Example: 
- `views/auth/PAGES_FOR_AUTH_MODULE`
- `views/notes/PAGES_FOR_NOTES_MODULE`

Examples for context api, custom hooks, redux structure, routes setup are available.

### If you are going to use `react-bootstrap` remove the cdn from the `index.html` and uncomment the included `bootstrap.scss` file in `/styles` folder.
### If You do not wish to use bootstrap, Note that general components like Header are built with bootstrap classes.

utitlity functions & variables are available in `/utils` folder
- `contants.js` : to store constants used throughout the project 
- `helper.js` : to contains helper functions ( i.e roundOff function )
- all the file will be exported from `/utils` ( index.js )
