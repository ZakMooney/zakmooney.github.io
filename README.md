# Frontend Dev Portfolio

This is my personal portfolio website built with react, in the style of a responsive 2 column dashboard, intended to showcase my personal CV and experience in a visual manner and display examples of my work through the portfolio section.

## Contents

- [Features](#features)
- [Dev Details](#dev-details)
- [Scripts](#scripts)
- [Adding New Work Experience](#adding-new-work-experience)
- [Adding New Portfolio Items](#adding-new-portfolio-items)

___

## Features

- Dynamic data rendered from shared json objects.
- Initial loader animation to simulate loading data.
- Responsive mobile-first design that works on a variety of screen sizes.
- Used HashedRouter to enable SPA support with GitHub pages
- Distinct Dark & Light themes.
- Built with React & TailwindCSS.
- Reusable UI components.

___

## Installation

To run the project locally, follow these steps:

1. Clone the repo:

   ```
   git clone https://github.com/ZakMooney/zakmooney.github.io.git
   cd zakmooney.github.io
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Start the dev server:

   ```
   npm start
   ```

4. Visit `http://localhost:3000`.

___

## Dev Details

This repo was created with [Create React App](https://github.com/facebook/create-react-app). Chart components are from [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2). Icons used are a mixture of Apple Emoji & [FontAwesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome). The stars animation is a customised version of [this codepen](https://codepen.io/sarazond/pen/LYGbwj). Page transitions implemented using [framer-motion](https://www.npmjs.com/package/framer-motion). Image lightbox/gallery implemented using [fslightbox-react](https://www.npmjs.com/package/fslightbox-react).

___

## Scripts

In the project directory, you can run:

- `npm start`: Starts the dev server.
- `npm run build`: Builds for production in the `build` folder.
- `npm run eject`: One-way operation. Removes the single build dependency from the project.
- `npm run predeploy`: Runs the build script.
- `npm run deploy`: Deploys the app to GitHub Pages.

___

## Adding New Work Experience

1. Add the job data object to `JobDetails` in `/src/data/jobdetails.js`
2. Update `SkillYears` in `/src/data/jobdetails.js` if relevant for "Key Skill Expierience" Bar Chart
3. Update `RoleYears` in `/src/data/jobdetails.js` if releveant for "Key Role Experience" Pie Chart

___

## Adding New Portfolio Items

1. Add any images & videos to `/src/assets/portfolio`
2. Import the images into `/src/data/portfoliodetails.js`
3. Add the work data object to `PortfolioDetails` in `/src/data/portfoliodetails.js`

___

## License

This project is released under the MIT License.