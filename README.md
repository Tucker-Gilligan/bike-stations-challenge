# Bike Station Finder

## Summary

This application was developed as part of a coding challenge, as well as for practice utilizing TypeScript and Redux.

## User Stories

- A user can view a list of stations sorted alphabetically by name
- A user can view a list of stations sorted by capacity
- A user can see a "loading..." while data is being retreived

## BackLog User Stories

- A user can click a bike station to show the bike station details

## Features

- If there are > 1 bikes available, n will render in Green
- If there is 1 bike available, 1 will render in Yellow && "bike" will be singular
- If there are 0 bikes available, 0 will render in RED
- If there are > 1 docks available, n will render in Green
- If there is 1 dock available, 1 will render in Yellow && "dock" will be singular
- If there are 0 docks available, 0 will render in RED

## Technologies Used

- TypeScript - Superset of JavaScript which helps with catching mistakes early through a type system.
- React - initiated with npx create-react-app --template typescript
- React-Redux - handles state management in a single store - supports bindings between redux and react.
- Redux-Thunk - middleware that allows action creaters that return a function instead of an action. Used in this application for async cals to api
- Redux Devtools - Chrome extension which allows tracking of state changes
- Axios - to execute GET requests

## What I Learned

This project is my first application utilizing TypeScript and Redux in a React Application. TypeScript was valuable in the construction of this project in order to easily define prop types, and use of intellisense support/static type checking. Utilizing Redux AND TypeScript for the first time proved to be difficult, however I accomplished this through review of online documentation and use of online resources to practice each concept independently.

## Areas for improvement

#### The files (namely the actions file) became very bulky due to the need to create custom types along with actions for the Redux store.

- I addressed this through modularization to separate actions for different pieces of state.
- There is definitely room for improvement as I learn the intricacies of using TypeScript and Redux in a React application.

#### App component got messy as features were implemented

###### To address this in the future, I intend to:

- Leverage the benefits of using Redux for state management to reduce the size of component files and need for local state
- Further modularize tsx components and event listeners - this will come with practice using TS/Redux
