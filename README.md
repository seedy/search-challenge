# Assignment

Hey there! 👋

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Which you a good review!

## Prerequisites

This project uses `yarn` as its package manager.

In case you don't have it installed, please follow this [installation tutorial](https://yarnpkg.com/getting-started/install)

## Running the app locally

First, clone the repository:

```bash
git clone https://github.com/seedy/search-challenge.git
# or with GH cli
gh repo clone seedy/search-challenge
```

Then, install the project's dependencies:

```bash
yarn
# note this project uses yarn as package manager
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Vercel deployment

Visit [https://search-challenge.vercel.app/](https://search-challenge.vercel.app/) to see the last deployment of branch `main`

## Feedback

### Time considerations

#### Time spent on this challenge

- 1h reviewing the assignment and taking notes
- 1h of project setup
- **5h of (real) dev**

#### If I had more time

I tend to enjoy writing down my tasks as issues, when I want to maximize my perfs on a project. You can have a look at the issues I created [here](https://github.com/seedy/search-challenge/issues).

I created a few issues after I decided to stop developing on the project, here's a quick explanation:
  
- I didn't update the main page's head, therefore it's still called "Create Next App", that's something I forgot once I went into the development process.
- I didn't apply `'cursor': 'pointer'` to interactives elements when hovering them.

##### Extra

I wanted to add some extra visuals on the screen, such as a button to display the current user cart, I might do that on a separate branch for fun

I very quickly designed the UI components, I decided not to put too much effort there, trying to follow the same design as the screenshot which was proposed. If I had a real mockup with detailed information on the styles used, I would have done more there. Anyway, I think there's room for improvement there.

I implemented a different UX for counting elements already in the cart, I find it more intuitive than what was proposed in the screenshot. Still, the design is ugly.

I could have animated some visual changes, such as the search "clear icon", the buttons to add items to the cart, etc.

I started writing a unit test for the most critical - yet easy to test - feature to me, the search filtering algorithm. I could of course have written integration tests for the whole screen. I am used to writing "user perspective tests" with `@testing-library` for this kind of tasks.

### Adapting the search screen on desktop

To me, the main difference between search screens in mobile and desktop is the UX.

In mobile, because of the small viewport, search screens are expected to take the whole space. Therefore search features always have their own screen and context.

In desktop, the viewport is much larger, some applications tend to display search features within overlays, which are displayed "on top" of the current screen, without flushing its context.

In my opinion, a good UX should ensure users can fully focus on their current interaction, without losing valuable context.

Depending on **what is searched**, users might need not to lose what's displayed before "entering the search flow".

In the case of a shopping cart, I think what's most valuable to the users is:

- what they already ordered
- what they want to order
- any possible comparison to make a decision, e.g. being able to compare multiple similar items

That's why I'd allow users to see their cart, see details of selected items and allow users to compare those to others, when it makes sense.

On the other hand, I would be against displaying the search as an overlay, based on my current vision of the application.
