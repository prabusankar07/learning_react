import React from 'react'
import jsondata from './titles.json'
import './stylesheets/bye.scss'
import './stylesheets/style.css'

export const hello =(
	<h1 id='title' className = "hello">
			{jsondata.hello }
	</h1>
)

export const bye =(
	<h1 id="title"
	className = "goodbye">
			{jsondata.bye }
	</h1>
)