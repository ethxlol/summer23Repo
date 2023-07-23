// RENDERING IN JSX Explained:

// This line uses the DOM which represents the web page
// Using the getElementById method of document to get the element object representing the HTML elemt with the passed in id (container)
// It then stores the element in container
document.getElementById('container');
// using createRoot from the react-dom/client library, which creates a React root from container and stores it in root.
// root can be used to render a JSX expression, this is the "where to place the content" part of React rendering
const root = createRoot(container);
// uses the render method of root to render the content passed in as an argument.
// In our case we are passing in a h1 with a string. This is the "what content to render " part of React rendering.
root.render(<h1>Hello world</h1>);

// cool thing about reacts root render is that if the same thing is called twice in a row the last one will do nothing
