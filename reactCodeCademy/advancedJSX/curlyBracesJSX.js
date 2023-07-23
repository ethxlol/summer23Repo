import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const theBestString = 'This text was accessed through a javascript variable';

// So this will render the JS string, because stuff that is rendered with {} will render as normal JS
root.render(<h1>{theBestString}</h1>); // output: This text was accessed through a javascript variable
// This will render as a jsx file
root.render(<h1>theBestString</h1>); // output: theBestString
