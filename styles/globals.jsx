"use client"
import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`

  body {
    --color-grey-50: hsl(265, 55%, 96%);
    --color-grey-100: hsl(265, 19%, 88%);
    --color-grey-200: hsl(265, 7%, 70%);
    --color-grey-300: hsl(265, 6%, 66%);
    --color-grey-400: hsl(265, 4%, 57%);
    --color-grey-500: hsl(265, 3%, 53%);
    --color-grey-600: hsl(265, 4%, 42%);
    --color-grey-700: hsl(265, 4%, 31%);
    --color-grey-800: hsl(276, 5%, 20%);
    --color-grey-900: hsl(280, 5%, 13%);
    --color-primary-50: #c8b3ce;
    --color-primary-100: #a07aaa;
    --color-primary-200: #884c97;
    --color-primary-300: #843897;
    --color-primary-400: #732392;
    --color-primary-500: #5a097a;
    --color-primary-600: #480264;
    --color-primary-700: #3d0264;
    --color-success-100: #a2f0bc;
    --color-success-500: #12bd4b;
    --color-error-100: #f1acc9;
    --color-error-500: #a10c4a;
    --color-primary: #0e3fbe;
    --color-primary-dark: #0c1b68;
    --color-secondary: #e36e2d;
    --color-secondary-dark: #923809;
    --color-grey-light-1: #f9f7f6;
    --color-grey-light-2: #8c92a5;
    --color-grey-dark-1: #716a66;
    --color-grey-dark-2: #3f3d39;
    --size-0: 0;
    --size-1: 0.25rem;
    --size-2: 0.5rem;
    --size-3: 0.75rem;
    --size-4: 1rem;
    --size-5: 1.25rem;
    --size-6: 1.5rem;
    --size-8: 2rem;
    --size-16: 4rem;
    --size-20: 5rem;
    --size-40: 10rem;
    --default-size-0: 0;
    --bp-xsmall: 30em;
    --bp-small: 37.5em;
    --bp-medium: 50em;
    --bp-large: 62.5em;
    --bp-xlarge: 75em;
    --primary-font: "objektiv-variable", sans-serif;
    --primary-display-font: "louvette-banner", serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    /**
    * not sure if this is working as I expect:
    * @problem: want to make sure that only objecktiv, and sans-serif show, up on user display(properties)
    * @issue: want to make sure the remainder of the fonts are still available as a backup, but not displayed client side
    * unless needed
    * @current: we have grouped our primary font: into a css variable:

      per:   --primary-font: "objektiv-variable", sans-serif;

      we are then calling that as our first argument:

      per: font-family: var(--primary-font) -apple-system, BlinkMacSystemFont, Segoe UI, etc.

      @current-conclusion: at this moment the only fonts being displayed on the user system or the two fonts declared in the
      --primary-font declaration

      @questions: so far we are unsure about the timing and loading of the two fonts, if they do no load in x time, do the
      backup fonts kick in
    */
    font-family: var(--primary-font), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    padding: var(default-size-0);
    margin: var(default-size-0);
    background-color: var(--color-grey-500);
    color: var(--color-grey-dark-2);
  }
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  
  
  
  
  
`;

// //original code:
// :root {
//     --max-width: 1100px;
//     --border-radius: 12px;
//     --font-mono: ui-monospace, Menlo, Monaco, 'Cascadia Mono', 'Segoe UI Mono',
//         'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
//         'Fira Mono', 'Droid Sans Mono', 'Courier New', monospace;
//
//     --foreground-rgb: 0, 0, 0;
//     --background-start-rgb: 214, 219, 220;
//     --background-end-rgb: 255, 255, 255;
//
//     --primary-glow: conic-gradient(
//         from 180deg at 50% 50%,
// #16abff33 0deg,
// #0885ff33 55deg,
// #54d6ff33 120deg,
// #0071ff33 160deg,
//         transparent 360deg
// );
//     --secondary-glow: radial-gradient(
//         rgba(255, 255, 255, 1),
//         rgba(255, 255, 255, 0)
//     );
//
//     --tile-start-rgb: 239, 245, 249;
//     --tile-end-rgb: 228, 232, 233;
//     --tile-border: conic-gradient(
// #00000080,
// #00000040,
// #00000030,
// #00000020,
// #00000010,
// #00000010,
// #00000080
// );
//
//     --callout-rgb: 238, 240, 241;
//     --callout-border-rgb: 172, 175, 176;
//     --card-rgb: 180, 185, 188;
//     --card-border-rgb: 131, 134, 135;
// }
//
// @media (prefers-color-scheme: dark) {
// :root {
//         --foreground-rgb: 255, 255, 255;
//         --background-start-rgb: 0, 0, 0;
//         --background-end-rgb: 0, 0, 0;
//
//         --primary-glow: radial-gradient(rgba(1, 65, 255, 0.4), rgba(1, 65, 255, 0));
//         --secondary-glow: linear-gradient(
//             to bottom right,
//             rgba(1, 65, 255, 0),
//             rgba(1, 65, 255, 0),
//             rgba(1, 65, 255, 0.3)
//     );
//
//         --tile-start-rgb: 2, 13, 46;
//         --tile-end-rgb: 2, 5, 19;
//         --tile-border: conic-gradient(
//             #ffffff80,
//             #ffffff40,
//             #ffffff30,
//             #ffffff20,
//             #ffffff10,
//             #ffffff10,
//             #ffffff80
//         );
//
//         --callout-rgb: 20, 20, 20;
//         --callout-border-rgb: 108, 108, 108;
//         --card-rgb: 100, 100, 100;
//         --card-border-rgb: 200, 200, 200;
//     }
// }
//
// * {
//     box-sizing: border-box;
//     padding: 0;
//     margin: 0;
// }
//
// html,
//     body {
//     max-width: 100vw;
//     overflow-x: hidden;
// }
//
// body {
//     color: rgb(var(--foreground-rgb));
//     background: linear-gradient(
//         to bottom,
//         transparent,
//         rgb(var(--background-end-rgb))
// )
//     rgb(var(--background-start-rgb));
// }
//
// a {
//     color: inherit;
//     text-decoration: none;
// }
//
// @media (prefers-color-scheme: dark) {
//     html {
//         color-scheme: dark;
//     }
// }
