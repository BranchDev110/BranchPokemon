
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>
BranchPokemon
</h1>
<h3 align="center">📍 BranchPokemon by Steven Fredericks.</h3>
<h3 align="center">🚀 Developed with the software and tools below:</h3>
<p align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?style=for-the-badge&logo=styled-components&logoColor=white" alt="styledcomponents" />
<img src="https://img.shields.io/badge/SVG-FFB13B.svg?style=for-the-badge&logo=SVG&logoColor=black" alt="SVG" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style=for-the-badge&logo=Markdown&logoColor=white" alt="Markdown" />
</p>

</div>

---


## 📍Overview
Demo: https://branch-pokemon.netlify.app/

The BranchPokemon GitHub project is a powerful and innovative tool that provides users with a comprehensive experience in exploring and discovering Pokémon. This project offers a React App template with meta tags, a manifest, and a link to a favicon, as well as Redux store and Redux Persist configurations. Additionally, the project includes components for a sidebar, navbar, right sidebar, home page, detail page, history page, and about page. With this impressive project, users can easily explore and discover Pokémon with ease and convenience.

---

## 🔮 Feautres

### Distinctive Features

1. **User-Centered Design Elements:** The BranchPokemon GitHub project includes a well-constructed user-centered design, with components that are easy to navigate and understand. The code scripts provide a comprehensive view of the architecture of the project, including the React App, Redux store, Redux Persist, reportWebVitals() function, and components for a sidebar, navbar, right sidebar, home page, detail page, history page, and about page.

2. **Responsive Design:** The VirtualScrollChild component uses "react-intersection-observer" and "styled-components" to adjust its width based on the size of the screen and render its children only when in view. This ensures that the application looks consistent regardless of the size of the screen.

3. **Infinite Scrolling:** The InfiniteScroll component uses React’s “useRef” hook and styled components to create a div element with flexbox properties and a scroll listener, which triggers a callback action when the bottom of the div is reached. This allows users to scroll through a list of items without having to manually reload the page.

4. **Data Persistence:** The store.ts code script configures a Redux store, persists the state to local storage, and exports the store and persisting functions as objects. This allows the application to save data from session to session.

5. **Loaders:** The Loader component is a spinning circle that is positioned to the bottom center of the page. It is used to indicate when more data is being fetched. The Card component also uses the useState hook to control Loader visibility.

---

<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-src-open.svg" width="80" />

## 💻 Modules

<details closed><summary>About</summary>

| File      | Summary                                                                                                                                                                                                                                                                                                                                                      | Module                         |
|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|
| index.ts  | This code script exports the default "About" component from the file "./About".                                                                                                                                                                                                                                                                              | src/Containers/About/index.ts  |
| About.tsx | This code script creates a React component for displaying developer information from a JSON file. It is styled with styled-components to have a white color and font-size of 18px with a line-height of 2, and letter-spacing of 1.2px. The information displayed is the developer's name, the year, the stack they use, and a link to their Github profile. | src/Containers/About/About.tsx |

</details>

<details closed><summary>App</summary>

| File     | Summary                                                                                                                                                                                                                                      | Module           |
|:---------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------|
| store.ts | This code script configures a Redux store, persists the state to local storage, and exports the store and persisting functions as objects. It also includes middleware to ensure that certain actions are ignored when persisting the state. | src/app/store.ts |

</details>

<details closed><summary>Card</summary>

| File     | Summary                                                                                                                                                                                                                                                                                                                                                                               | Module                       |
|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|
| Card.tsx | This code script creates a React component'Card' which renders an interactive card with an image, text and badges with background colors, based on the data provided. The CardContainer and CardImg components are styled with'styled-components' and colors are imported from a separate constant file. The Card component also uses the useState hook to control Loader visibility. | src/Components/Card/Card.tsx |
| index.ts | This code script exports the Card component from a separate file.                                                                                                                                                                                                                                                                                                                     | src/Components/Card/index.ts |

</details>

<details closed><summary>Constant</summary>

| File     | Summary                                                                                                                                   | Module                |
|:---------|:------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|
| color.ts | This is a script that defines an interface for color types with a set of associated hexadecimal colors, and exports it for use elsewhere. | src/constant/color.ts |

</details>

<details closed><summary>Detail</summary>

| File       | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Module                           |
|:-----------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|
| index.ts   | This code script exports the'Detail' component from the'./Detail' file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | src/Containers/Detail/index.ts   |
| Detail.tsx | This code script is used to generate a pokemon detail page, using React Hooks, styled-components, Loaders, and Evolution Chains. It imports components and constants, and has styled-components for the DetailsContainer, DetailsInfo, DetailsSecInfo, DetailsName, DetailsType, DetailsInfoText, DetailsInfoLabel, DetailsInfoContent, DetailsSkill, DetailsSkillItem, DetailsSkillItemText, DetailsSkillProgressBarContainer, and DetailsSkillProgressBar. It also includes an useEffect hook to fetch data and construct evolution data, and useState to store the data, loading status, and evolution data. | src/Containers/Detail/Detail.tsx |

</details>

<details closed><summary>Evolutionchain</summary>

| File               | Summary                                                                                                                                                                                                                                                                                                                                                                                          | Module                                           |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
| index.ts           | This code imports the EvolutionChain component from the file'./EvolutionChain' and sets it as the default export.                                                                                                                                                                                                                                                                                | src/Components/EvolutionChain/index.ts           |
| EvolutionChain.tsx | This code script is for a React component that displays an evolution chain for a Pokemon. It includes styled components for the evolution chain container, content, item, image container, image, and item text. It also uses the useState React hook, Link from React Router, and colours from a constant. It imports an image from a source and uses a Loader until the image is fully loaded. | src/Components/EvolutionChain/EvolutionChain.tsx |

</details>

<details closed><summary>History</summary>

| File        | Summary                                                                                                                                                                                                                                                                                                                                                                                      | Module                             |
|:------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|
| History.tsx | This code script is for a History feature in a web application. It imports the necessary components and styled the history container, list table and viewer. The useSelector hook is used to retrieve the history from the store and the useState hook is used to store the current history. The script then renders a styled table of the history and a viewer of the current history data. | src/Containers/History/History.tsx |
| index.ts    | This code script exports a History object from a separate file.                                                                                                                                                                                                                                                                                                                              | src/Containers/History/index.ts    |

</details>

<details closed><summary>Home</summary>

| File     | Summary                                                                                                                                                                                                                                                                                                                                                   | Module                       |
|:---------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------|
| Home.tsx | This code script implements a search feature with an infinite scrolling feature using React, Redux, and Styled Components. It includes an input field for users to search for pokemons, and a loader to indicate when more data is being fetched. The search function is debounced and when a search is successful, the results are added to the history. | src/Containers/Home/Home.tsx |
| index.ts | This code script exports the'Home' component from the'Home' file.                                                                                                                                                                                                                                                                                         | src/Containers/Home/index.ts |

</details>

<details closed><summary>Infintescroll</summary>

| File               | Summary                                                                                                                                                                                                                                                                                                                  | Module                                          |
|:-------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| InfiniteScroll.tsx | This code script is an InfiniteScroll component which is used to render a list of items wrapped in "Card" components. It uses React's "useRef" hook and styled components to create a div element with flexbox properties and a scroll listener, which triggers a callback action when the bottom of the div is reached. | src/Components/InfinteScroll/InfiniteScroll.tsx |
| index.ts           | This code script exports the'InfiniteScroll' component from the local directory.                                                                                                                                                                                                                                         | src/Components/InfinteScroll/index.ts           |

</details>

<details closed><summary>Loader</summary>

| File       | Summary                                                                                                                                                                                                                                                                                                                 | Module                           |
|:-----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|
| Loader.tsx | This code script creates a loader component which is styled as a spinning circle. It imports styled-components and uses keyframes to create a rotation animation which is then applied to the circular component. The component is positioned to the bottom center of the page and given a semi-transparent background. | src/Components/Loader/Loader.tsx |
| index.ts   | This script exports the Loader component from the specified file.                                                                                                                                                                                                                                                       | src/Components/Loader/index.ts   |

</details>

<details closed><summary>Navbar</summary>

| File       | Summary                                                                                                                                                                                                                                                                                                          | Module                           |
|:-----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|
| Navbar.tsx | This code script creates a basic navigation bar using React components, styled components, and an interface. It uses the "useLocation" hook from "react-router-dom" to determine the pathname of the current page, and then applies a custom style to the active page while also setting the current page state. | src/Containers/Navbar/Navbar.tsx |
| index.ts   | This code script exports the Navbar component from the specified file.                                                                                                                                                                                                                                           | src/Containers/Navbar/index.ts   |

</details>

<details closed><summary>Public</summary>

| File        | Summary                                                                                                                                                                                                                                                                                                    | Module             |
|:------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|
| favicon.ico | This code script indicates that the content of the file is not in a text format or in UTF-8 encoding, and thus cannot be decoded.                                                                                                                                                                          | public/favicon.ico |
| index.html  | This code script provides a web page template which can be used to create a React App. It includes meta tags, a manifest, and a link to a favicon, and to run it, users should run'npm start' or'yarn start'. Additionally, to create a production bundle, users should use'npm run build' or'yarn build'. | public/index.html  |
| _redirects  | This code script serves the file "index.html" to the user, returning a 200 response code which indicates a successful request.                                                                                                                                                                             | public/_redirects  |

</details>

<details closed><summary>Rsidebar</summary>

| File         | Summary                                                                                                                                                                                            | Module                               |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------|
| RSidebar.tsx | This code script creates a sidebar with an 80px width and 100% height, with a 1px solid #333 border. It also includes a ThreeMenuIcon, with a 40px width and 3px height, and a 10px margin bottom. | src/Containers/RSidebar/RSidebar.tsx |
| index.ts     | This code script exports a component called RSidebar from a file.                                                                                                                                  | src/Containers/RSidebar/index.ts     |

</details>

<details closed><summary>Sidebar</summary>

| File        | Summary                                                                                                                                                                                                                                                | Module                             |
|:------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|
| Sidebar.tsx | This script imports the React, React-Router-DOM, and Styled-Components libraries, creates a SidebarContainer, PokemonLogo, and PokemonLogoContainer styled divs, and returns the SidebarContainer in a React component that links to a Pokeball image. | src/Containers/Sidebar/Sidebar.tsx |
| index.ts    | This code script exports the Sidebar module from the specified path.                                                                                                                                                                                   | src/Containers/Sidebar/index.ts    |

</details>

<details closed><summary>Slice</summary>

| File              | Summary                                                                                                                                                                                                                                                                                                                                     | Module                          |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|
| historyReducer.ts | This code script creates a Redux slice to manage the history of user interactions with an application, including a key, value, and date for each interaction. It also contains an action to add interactions to the history and a reducer to manage the state of the history object.                                                        | src/app/slice/historyReducer.ts |
| pokemonReducer.ts | This code script creates a'pokemonSlice' for managing a PokemonState, which stores an array of pokemons, search results, a page number, and search text. It also defines a range of actions for setting the pokemons, search results, page number, and search text. Finally, it exports the actions and reducer for use in the application. | src/app/slice/pokemonReducer.ts |

</details>

<details closed><summary>Src</summary>

| File               | Summary                                                                                                                                                                                                                                                                                                                                                                 | Module                 |
|:-------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|
| index.tsx          | This code script imports and configures React, ReactDOM, and associated libraries for an application. It sets up the App component with React Router, Redux store, and Redux Persist, and calls the reportWebVitals() function to measure performance.                                                                                                                  | src/index.tsx          |
| App.tsx            | This code script imports components for a sidebar, navbar, right sidebar, home page, detail page, history page, and about page. It then creates a route structure and renders the components to create a React application.                                                                                                                                             | src/App.tsx            |
| App.test.tsx       | This code script tests that the App component renders the text'Learn React' when rendered.                                                                                                                                                                                                                                                                              | src/App.test.tsx       |
| App.css            | This code script establishes the App class with a flex display and a relative position, filling 100% of the height and width of the viewport. It then sets a radial gradient background with a black color, positioned at 0 0 and sized at 10px 10px. The Main Container class is given a flex direction of column, with items centered and a width and height of 100%. | src/App.css            |
| index.css          | This code script sets the box-sizing, font-family, and text-decoration of elements, as well as margins and padding for the body and paragraphs. Additionally, it styles a scrollbar with a gray background and a gainsboro thumb.                                                                                                                                       | src/index.css          |
| reportWebVitals.ts | This code script imports the'web-vitals' library and defines a function that, when provided with an appropriate callback, imports the library and collects performance metrics for CLS, FID, FCP, LCP, and TTFB.                                                                                                                                                        | src/reportWebVitals.ts |
| react-app-env.d.ts | This code script references the React Scripts library, providing the necessary types for using React components in a project.                                                                                                                                                                                                                                           | src/react-app-env.d.ts |
| logo.svg           | This code script renders an SVG vector graphic of a circle and a lightning bolt shape with intricate details, set within a viewBox of 841.9 x 595.3.                                                                                                                                                                                                                    | src/logo.svg           |

</details>

<details closed><summary>Virtualscrollchild</summary>

| File                   | Summary                                                                                                                                                                                                                          | Module                                                   |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------|
| VirtualScrollChild.tsx | This code script creates a component called "VirtualScrollChild" which uses "react-intersection-observer" and "styled-components" to adjust its width based on the size of the screen and render its children only when in view. | src/Components/VirtualScrollChild/VirtualScrollChild.tsx |
| index.ts               | This code script exports a component called'VirtualScrollChild' from the file'./VirtualScrollChild'.                                                                                                                             | src/Components/VirtualScrollChild/index.ts               |

</details>

<hr />

## 🚀 Getting Started

### 💻 Installation

1. Clone the BranchPokemon repository:
```sh
git clone https://github.com/BranchDev110/BranchPokemon
```

2. Change to the project directory:
```sh
cd BranchPokemon
```

3. Install the dependencies:
```sh
npm install
```

### 🤖 Using BranchPokemon

```sh
npm start
```

<hr />

---

## 🤝 Contributing
Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a pull request to the original repository.
Open a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---