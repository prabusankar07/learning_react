import React from 'react'
import {render } from 'react-dom'
import {hello,bye} from './lib'
render(
	<div>
	{hello}
	{bye}
	</div>,
	document.getElementById('react-container')
)