# Date Movie

A React App that uses the [TheMovieDB.org](https://developers.themoviedb.org/3/getting-started/introduction) API.

## Motivation
Hobby project aimed at perfecting every part of code and optimize it.

Ultimatelly, I've also created the project to showcase my skill as most projects I work on are in private repos - thus giving a better understanding where my skill is at. You can also check a pre-beta no-code tool I'm building here: [TailBuilder](https://app.tailbuilder.com/) 

# Methodology


## Structure
Explanation and overview of the overall project structure.

## Overview 
### Views
### Services
### Components
### Styles

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