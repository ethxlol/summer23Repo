import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

// A variable example
const toDoList = (
	<ol>
		<li>Learn React</li>
		<li>Become a Developer</li>
	</ol>
);
// rendering the example above
root.render(toDoList);

// another example
const myList = (
	<ul>
		<li>test</li>
		<li>testing</li>
		<li>testing3</li>
		<li>testing4</li>
	</ul>
);

// rendering the example above
root.render(myList);
