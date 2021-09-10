# CSS Box Model Lab

In this lab, you'll have the opportunity to design a student newsletter. The content already exists -- you just need to style it to the best of your ability!

---

## Lab Setup

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

This will open the Cypress testing window, where you can click to run an individual suite of tests or all of the tests at once.

## Instructions

To complete the tests in this lab, you will need to add the following styles. If you're unclear about any of the instructions below, remember that you can check the test file to see what exactly is being tested.

**Hint**: while styling, you can use the following to help see your elements and understand their overall placement and size:

```CSS
* {
   border: 1px solid gold;
}
```

- [ ] Set all paragraph text to have a font of `sans-serif`.
- [ ] Set all heading text to have a font of `serif`.
- [ ] Set all heading text to be centered.
- [ ] Set all anchor elements to have no text decoration.
- [ ] Set all anchor elements to have a color of `#4242EA`.
- [ ] Set all unordered lists to have no list-style.
- [ ] Set all `span` elements inside the footer to have a `font-weight` of `700`.
- [ ] Set all paragraph text inside the element with the class of `weather` to have a font size of `40px`.
- [ ] Set all articles inside the `.above-the-fold` element to have a `display` value of `inline-block`.
- [ ] Set the `.weather` element to have a `width` of `300px`.
- [ ] Set the `.weather` element to have a `2px gray border` on all sides.
- [ ] Set the `.breaking-news` element to have a top/down padding of `0px` and a left/right padding of `30px`.
- [ ] Set the image inside of the `.breaking-news` element to have a `width` of `200px`.
- [ ] Set all articles inside the element with the class of `.click-bait` to have a `display` of `inline-block`.
- [ ] Set all articles inside the element with the class of `.click-bait` to have a `width` of `250px`.
- [ ] Set all articles inside the element with the class of `.click-bait` to have `16px` of margin and padding on all sides.
- [ ] Set all articles inside the element with the class of `.click-bait` to have `box-sizing` set to `border-box`.
- [ ] Set all articles inside the element with the class of `.below-the-fold` to have a `display` of `inline-block`.
- [ ] Set the image inside the element with the class of `.below-the-fold` to have a `display` of `inline-block`.
- [ ] Set the image inside the element with the class of `.below-the-fold` to have `16px` of margin and padding on all sides.
- [ ] Set the image inside the element with the class of `.below-the-fold` to have a `width` of `200px`.
- [ ] Set the div inside the element with the class of `.below-the-fold` to have a `width` of `500px`.

Once your complete with the above tasks, your page should look something like the image below.

![Completed lab image.](./assets/basic-example-completed.png)

Once you've completed these tasks, continue to style your page. Consider adding specific styles to all list items, only list items under the "Libraries" heading, the introductory paragraph, and the "Hardest Bug So Far" section.

## Bonus Ideas

Better alignment of inline elements. There are a few ways to approach this. [Display Flex, and related properties, are recommended](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

![](./assets/bonus-example-completed.png)
