# Cypress Reference

This page provides a short summary and examples of the main [commands](#cypress-commands), [assertions](#cypress-assertions) and [actions](#cypress-actions) that are used in Cypress tests.

Complete documentation can be found in the [Assertions](https://docs.cypress.io/app/references/assertions) and [Actionability](https://docs.cypress.io/app/core-concepts/interacting-with-elements#Actionability) sections of the [official Cypress documentation](https://docs.cypress.io/).

## Cypress Commands

The most important Cypress commands allow you to visit a site and get elements from the page in order to interact with them or make assertions about them.

Complete documentation for these commands can be found in the Cypress documentation for [`cy.visit`](https://docs.cypress.io/api/commands/visit) and [`cy.get`](https://docs.cypress.io/api/commands/get).

### Visiting a Site

The `cy.visit` command is used to open a page at the specified URL for testing. For example:

```js
cy.visit('https://example.com');
```

### Getting an Element in the Page

The `cy.get` command is used to get an element from the page using a selector. For example:

```js
cy.get('[data-cy="cancel-button"]');
```

### Getting an Element Within a Component

The `cy.get` command is used to get the Vue component from the page and then the `find` command is used to get the element within that component. For example:

```js
cy.get('[data-cy="my-component"]').find('[data-cy="my-element"]');
```

## Cypress Assertions

Assertions are statements about what should be true about elements on the page and are used to check that the application is working correctly.

Assertions are applied to elements obtained using `cy.get(...)`. For example:

```js
cy.get('[data-cy="cancel-button"]').should('exist');
```

It is also possible to make multiple assertions about an element. For example:

```js
cy.get('[data-cy="cancel-button"]').should('exist').should('be.visible');
```

Some of the most common assertions are listed below. A full list of assertions can be found in the [Cypress Assertions Reference](https://docs.cypress.io/app/references/assertions).

### Element Existence and Visibility:

| Assertion                   | Meaning                                                                  |
| --------------------------- | ------------------------------------------------------------------------ |
| `.should('exist')`          | Element is present in the DOM.                                           |
| `.should('not.exist')`      | Element is not present in the DOM.                                       |
| `.should('be.visible')`     | Element is visible to the user.                                          |
| `.should('not.be.visible')` | Element is hidden from the user. Only elements that exist may be hidden. |

### Element Content:

The content of a normal (non-input) element can be checked using the following assertions.

| Assertion                               | Meaning                                                |
| --------------------------------------- | ------------------------------------------------------ |
| `.should('have.text', 'expected text')` | Element contains the exact text.                       |
| `.should('contain', 'partial text')`    | Element contains a specific substring.                 |
| `.should('be.empty')`                   | Element or collection of elements is empty.            |
| `.should('have.length', number)`        | Collection of elements has a specific number of items. |

### Input Element Values

The value of an input element is checked using the following assertion.

| Assertion                                 | Meaning                                                   |
| ----------------------------------------- | --------------------------------------------------------- |
| `.should('have.value', 'expected value')` | An `input`, `textarea`, or `select` has a specific value. |

### Numeric Comparisons

To perform numeric comparisons it is usually necessary to get the value to be compared and then convert it to a numeric value.

To convert the text of an element to a numeric value and make a comparison:

```js
cy.get('[data-cy="count-label"]')
  .invoke('text')
  .then((text) => parseFloat(text))
  .should('be.at.least', 5);
```

To convert the value of an input element to a numeric value and make a comparison:

```js
cy.get('[data-cy="price-input"]')
  .invoke('val')
  .then((val) => parseFloat(val))
  .should('equal', 7);
```

| Assertion                           | Meaning                                   |
| ----------------------------------- | ----------------------------------------- |
| `.should('equal', number)`          | Value is equal to number.                 |
| `.should('be.at.least', number)`    | Value is greater than or equal to number. |
| `.should('be.greaterThan', number)` | Value is greater than number.             |
| `.should('be.at.most'. number)`     | Value is less than or equal to number.    |
| `.should('be.lessThan', number)`    | Value is less than number.                |
| `.should('be.within', min, max)`    | Value is within a specified range.        |

### Element Attributes and Properties:

| Assertion                                                 | Meaning                                                        |
| --------------------------------------------------------- | -------------------------------------------------------------- |
| `.should('have.attr', 'attributeName', 'attributeValue')` | Element has a specific attribute with a given value.           |
| `.should('have.class', 'className')`                      | Element has a specific CSS class.                              |
| `.should('have.prop', 'propertyName', 'propertyValue')`   | Element has a specific JavaScript property with a given value. |

### Element State and Status:

| Assertion                    | Meaning                                  |
| ---------------------------- | ---------------------------------------- |
| `.should('be.checked')`      | Checkbox or radio button is checked.     |
| `.should('not.be.checked')`  | Checkbox or radio button is not checked. |
| `.should('be.disabled')`     | Element is disabled.                     |
| `.should('not.be.disabled')` | Element is not disabled.                 |

## Cypress Actions

Cypress actions are the commands that are used to simulate user interaction with elements on the page (e.g. buttons, text fields, etc.).

To interact with an element, `get` is used to find the element and then an action method is invoked on it. For example:

```js
cy.get('[data-cy="submit-button"]').click();
```

Each of the actions is listed below. The Cypress documentation contains more complete documentation on [interacting with page elements](https://docs.cypress.io/app/core-concepts/interacting-with-elements) and the available [actions](https://docs.cypress.io/app/core-concepts/interacting-with-elements).

| Action           | Meaning                                        |
| ---------------- | ---------------------------------------------- |
| `.click()`       | Clicks on a DOM element.                       |
| `.type(text)`    | Types text into an input field or textarea.    |
| `.clear()`       | Clears the value of an input or textarea.      |
| `.check()`       | Checks a checkbox or radio button.             |
| `.uncheck()`     | Unchecks a checkbox.                           |
| `.select(value)` | Selects an option within a `<select>` element. |
| `.dblclick()`    | Double-clicks a DOM element.                   |
| `.rightclick()`  | Right-clicks a DOM element.                    |
| `.focus()`       | Focuses on a DOM element.                      |
| `.blur()`        | Removes focus from a DOM element.              |
