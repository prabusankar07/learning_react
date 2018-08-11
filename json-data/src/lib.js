import React from 'react'
import jsondata from './titles.json'

export const hello =(
	<h1 id='title' className = "header" style = {{backgroundColor : "purple",color:"yellow"}}>
			{jsondata.hello }
	</h1>
)

export const bye =(
	<h1 id="title"
	className = "header"
	style = {{backgroundColor : "yellow",
			color:"purple"}}>
			{jsondata.bye }
	</h1>
)