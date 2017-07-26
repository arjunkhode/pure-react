import React from 'react';
import {render} from 'react-dom';

class App extends React.Component{
	render(){
		return(
			<div className="app">
				Haalo wast uup
			</div>
		)
	}
}

render(<App/>, document.querySelector('#main'));