# Date Movie
Need a better name xd

A React App that uses the [TheMovieDB.org](https://developers.themoviedb.org/3/getting-started/introduction) API.

## Motivation
Hobby project aimed at perfecting every part of code and optimize it.

Its importanat to understand that this is one of many ways to structure the project. Other structure do not mean they are bad, or better - though that will be subejctive based on the project.

Ultimatelly, I've also created the project to showcase my skill as most projects I work on are in private repos - thus giving a better understanding where my skill is at. You can also check a pre-beta no-code tool I'm building here: [TailBuilder](https://app.tailbuilder.com/) 

# Methodology


## Structure
Explanation and overview of the overall project structure.

## Overview 

### Services
Services are responsible for communicating with external information sources, It can be done via RESTful APIs, GraphQL etc...

Requests: holds the crucial technology for making fetch requests to specific APIs [API Name]: contains the configuration details for the API and its different routes.

This structure allows for easy integration with multiple APIs - simply add a new folder, create a new config, create specific request, create new APIs functions and it's ready to use.

### Config
### Components?
See Views
### Views
The views directory contains everything that renders; what users sees.

React is a "view" library, unlike MVC.

When creating new components, they don't have a meaning, unless we give it.

For example, a button is a component, a page is a component. Semantic names that we give, such as an 'atom' or an 'component' for a button, and 'page' for pages are used for cliarty, made by developers - technically everything is a 'react component', a 'view'.

Having a separate "view" directory for these components helps maintain a clear separation of concerns and becomes more important as the project grows. 

Everything the user sees belongs in the "view" directory.

### Styles
TailwindCSS structure emphasizes minimal use of styles. 

Configuration values are set in either tailwind.config.js or theming.scss within the base folder. TailwindCSS streamlines styling with its efficient and elegant approach, replacing the need for pure CSS or Scss variables. 

The folder prefixes prioritize order, as some folders require interdependent functionality and must be imported to function properly.

``` 
/styles  
├── /0-vendor       # 3rd party libraries i.e tailwindcss, fonts and so on  
├── /1-helpers      # mixins   
├── /2-base         # global styles, theming etc...  
├── /3-layouts      # global layouts such as: header, footer, nav, sidebar  
├── cheat.scss      # hot fixes - should be cleaned once a while  
├── styles.scss     # imports all above, it gives a nice overlook on all imports, as they do need to follow an order  
 
```

## Top to bottom approach

## Namings: Folders and Files
File namings inspired by [Laravel Resource Controler](https://laravel.com/docs/10.x/controllers#actions-handled-by-resource-controller).

Challenge:

Solution:


# Git Workflow
The project has various branches, including:

** master:** serves as the authoritative source for the live app  
**staging:** used for pre-live testing  
**dev:** Also known for 'feat/feature' used for developing new features (can be made more specific)  

## Methodology when commiting

Workflow when commiting or pushing, written by [Robin  Wieruch](https://www.robinwieruch.de/git-team-workflow/)

- **feat**: actual feature implementation  
- **style**: code style and code clean up  
- **test**: actual test implementation  
- **fix**: bug fix  
- **refactor**: refactoring that doesn't affect the behavior of the code  
- **chore**: no production code changes, but more like configuration and setup  

Commit message could look like the following:  

- feat(users): add authentication  
- fix(logout): clean up cookie  
- test(login): cookie set with access token  
- style(*): fix indentation  
- chore(.gitignore): add .env file  

Similar workflows are being used on large open-source projects such as MDN.


# Installing the project

### `npm install` 

Installs required packages.

### `npm run dev`

Runs the app in the development mode.\
Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

Once the app is built, you might run the preview command.

The vite preview command will boot up a local static web server that serves the files from dist at http://localhost:4173. It's an easy way to check if the production build looks OK in your local environment.