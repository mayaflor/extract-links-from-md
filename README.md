# Extract links from markdown

**This JavaScript library extracts links from markdown texts**. It returns an objects with every url and name of the websites on a markdown text.


## Usage

to install, it requires npm to be already installed.
```
npm install extract-links-maya
```

### Example

```

$node
> let extractLinks = require("extract-links-maya")
> extractLinks("Hi, do you want to visit [google](www.google.com) ?"); // returns [{href: "www.google.com", text: "google"}]

```

If the texts has no links, it returns an empty array.

It returns as many links as there are on the markdown text.

It throws an error when there are only numbers.


## Version 1.0.0

Returns all links found in a text