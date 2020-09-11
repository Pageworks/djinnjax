# Djinnjax

Djinnjax is a peer NPM package for the [DjinnJS](https://djinnjs.com) package. When installed Djinnjax provides Pjax navigation for server-side rendered websites and web applications.

Pjax is a term used when referring to the hijacking of traditional page navigation within a project where only one HTTP request is used to load the initial page. Additional page requests are loaded using AJAX and the content of the page is dynamically swapped. Pages are prefetched and stored in the offline cache when users have a 4g connection and they're not using data-saver mode. Pjax will hijack the `click` event of all HTML Anchor Element within the DOM.

## Installation

Download from NPM:

```sh
npm i -S djinnjax
```

## Prefetching

When Pjax shouldn't hijack a link when using the `opt-out` prefetching strategy use one of the following methods:

1. Give the link the `target="_blank"` attribute
1. Give the link the `download` attribute
1. Give the link the `prevent-prefetch` attribute

When Pjax should hijack a link when using the `opt-in` prefetching strategy give the link a `prefetch` attribute.

```html
<!-- Using the default opt-out strategy -->
<a href="https://example.com/" target="_blank">Click Here</a>
<a href="https://example.com/" download>Click Here</a>
<a href="https://example.com/" prevent-prefetch>Click Here</a>

<!-- Using the opt-in strategy -->
<a href="https://example.com/" prefetch>Click Here</a>
```

## Hotswapping Views

By default Pjax swaps the documents [main element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main). Sometimes only one element within the `<main>` element needs to be swapped, when this happens tag the element that should be swapped with a `pjax-id` attribute then the anchor element with a matching `pjax-view-id` attribute. When a link with a `pjax-view-id` attribute value matches an element with a `pjax-id` attribute value only the content within the element is swapped.

In the example below only the content with the `<div>` will be swapped when a user clicks the Example Category link.

```html
<div pjax-id="blog-articles">
    ...snip...
</div>
<a href="https://example.com/blog?category=example" pjax-view-id="blog-articles">Example Category</a>
```

## Manual Navigation

Pjax can be told to change pages using a custom event dispatched on the document.

```javascript
const event = new CustomEvetn("pjax:load", {
    details: {
        url: "/page/to/load",
    },
});
document.dispatchEvent(event);
```
