import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

// creating a div
const myDiv = <div className="big">I AM A BIG DEV</div>;
// rendering said div
root.render(myDiv);
