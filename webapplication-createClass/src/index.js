 import React from 'react'
 import {render} from 'react-dom'
 import {ActivityCount} from './components/activityCount'

window.React = React
render(
	<ActivityCount total={50}
	powder ={20}
	backCountry ={10}
	goal={100}/>,
	document.getElementById('react-container')
	)
