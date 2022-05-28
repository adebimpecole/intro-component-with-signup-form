# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](images/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://tangerine-frangipane-e5a6b7.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow

### What I learned

I learnt how to put a background image in an input field and also how to make proper use of grid.

```css
.inputImage{
    background-position:right;   
    background-repeat:no-repeat;   
    background-origin: content-box;
    background-image: none;
}
```
```js
else{
  pass.style.backgroundImage = "initial";
}
```

### Continued development

- Grid
- Forms

### Useful resources

- [Example resource 1](https://www.w3schools.com/css/css3_backgrounds.asp) - This helped me in fitting the error image inside the input field.
- [Example resource 2](https://www.geeksforgeeks.org/how-to-center-a-div-using-css-grid-property) - This is an amazing article which helped me finally understand how to center a div using grid


## Author

- Website - [Cole Mary](https://tangerine-frangipane-e5a6b7.netlify.app/)
- Frontend Mentor - [@adebimpecole](https://www.frontendmentor.io/profile/adebimpecole)
- Twitter - [@adecole02](https://twitter.com/adecole02)
