# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

A live scoreboard is a digital sport scoreboard that automatically displays up-to-the-minute sports scores and data from a certain game – for example a football game. This way it’s much easier for the users to follow the game, make predictions or bets, and so on.

Our application is going to reflect such a board, but in the browser.

Our application has just a few dependencies and several components. It also uses JavaScript timeouts and intervals to simulate real-time score updates.

The scoreboard supports the following operations:
1. Start a new game, assuming initial score 0 – 0 and adding it the scoreboard.
   This should capture following parameters:
   a. Home team
   b. Away team
2. Update score. This should receive a pair of absolute scores: home team score and away
   team score.
3. Finish game currently in progress. This removes a match from the scoreboard.
4. Get a summary of games in progress ordered by their total score. The games with the same
   total score will be returned ordered by the most recently started match in the scoreboard.

Project Structure

package.json - the configuration file of every Node.js app, created with npm or yarn, or any other package manager that uses the same approach.

README.md - not much to say here - a simple text file that uses Markdown and contains the description of the project, plus any other information you want to put there.

vite.config.js - the main configuration file that Vite uses, you get it when you do the installation from the previous step. The content of this file by default looks like this:

setupTests.js - this one is used for configuring the unit tests, we put here any of the things we would like to have available in the tests we write.

For example, in order to be able to use unique keys when rendering multiple elements (because we React needs it), I am using the randomUUID()method of the Crypto interface to generate a v4 UUID using a cryptographically secure random number generator.

index.html - this the app’s entry point, simple html document that has few meta tags, includes the logo and the main script file
/src – contains a few different things we need to discuss:

Components
Let me walk you quickly through each of the components in the application. They are located in the components folder.

/components folder contents:

1. Footer - self-explanatory, contains the footer part of the app

2. GameStatus - Used to show if a game has started, i.e. playin

3. Header - self-explanatory, contains the header part of the app

4. MessageBoard - a small component used to display text messages, saying when the games are starting or if we are looking at the “Summary” screen or the “Current Games”

5. Result - another small component showing game scores

6. Scoreboard - kind a parent component, serving as container that holds all the small ones in place

7. ScoreboardGrid - this is the most important component in the app, as it contains all the logic related to the timers, holds all child components and it’s responsible for passing the necessary data to them via their props

8. TeamView - another small components serving as a representation of a team, shows team’s flag and name

How to Build the Project
By now you should have a decent understanding of what our application is and how its various parts are put together.

Let me guide you, step-by-step, from the very beginning, and show you how I built it. I will add images where necessary, so that it’s easier for all of you to follow along.

📦 Dependencies
The dependencies we have are very few. Except Vite and Vitest, I have installed additionally only SASS, and React Testing Library.

Installation and Execution

Navigate to the project root folder and execute the command to install all dependencies,
it will get installed from package.json file

npm install

to run the application execute the command

npm run dev

to build the application execute the command

npm run build

to run the testcase execute the command

npm run test
