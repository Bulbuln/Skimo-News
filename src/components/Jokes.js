import React, { useEffect, useState } from 'react'

const Jokes = () => {


	const [joke, setJoke] = useState(null)
	const [loading, setLoading] = useState(true)
	const [chenge, setChenge] = useState(false)

	useEffect(() => {

		fetch('https://official-joke-api.appspot.com/random_joke')
		.then(res => res.json())
		.then(data => {

		setJoke(`${data.setup} ${data.punchline} `)
		setLoading(false)
		})

	}, [chenge])

	const chengeJoke = () => {
		setChenge(!chenge)
	}
	return (

		<div className="jokes"  >

			{loading && <img src="Spinner-1s-200px.svg" alt="spiner" />}
			{joke && <h2>{joke}</h2> }
		
			<button onClick={chengeJoke}> Another One ?</button>
		</div>
	)
}

export default Jokes
