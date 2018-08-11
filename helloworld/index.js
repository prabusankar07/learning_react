const {createElement } = React;
const {render} = ReactDOM;

const title = createElement(
	'h1',
	{
		id:'title',className : 'header',style:{
			background:'blue',
			color:'yellow'
		}
	},
	'Hello World'
	)

render(
	title,
	document.getElementById('react-container')
	 )
 