import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/Grid/Grid';
console.log("rendering");
ReactDOM.render(
	<Grid height={5} width={5}/>,
	document.getElementById('app')
);
