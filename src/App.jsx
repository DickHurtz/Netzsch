import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Header from './common-comps/Header'
import Footer from './common-comps/Footer'
import * as Chart from './Charts'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
const wasmDiv = 'src/wa-templates/div.wasm'

function App() {//main component
	const [count, setCount] = useState(0) //average count of posts per existing users
	const [data, setData] = useState(null) //data required for getting number of all posts
	const [uniques, setUniques] = useState(null) //number of unique users
	const [dough, setDoughnut] = useState(false) //chart switcher

	async function fetchAndInstantiate(arr1, arr2) { //calculations of count there's also additional wasms for basic calculations
		const response = await fetch(wasmDiv)
		const buffer = await response.arrayBuffer()
		const obj = await WebAssembly.instantiate(buffer)
		setCount(obj.instance.exports.div(arr1, arr2))
	}

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts') //Getting data from our chat application
			.then((response) => response.json())
			.then((json, unique) => {
				setData(json)
				unique = json.reduce( //getting all unique users
					(c, { userId: key }) => ((c[key] = (c[key] || 0) + 1), c),
					{}
				)
				setUniques(unique)
			})
			.catch((error) => console.error(error))
	}, [])
	fetchAndInstantiate(
		data ? data.length : 1,
		uniques ? Object.keys(uniques).length : 1
	)
	return (
		<>
			<Header />
			<div className="content">
				<div className="py-2">
					<span>
						Here's some numbers of existing Users activity:
					</span>
				</div>
				<div className="dataCard">
					{uniques ? (
						dough ? (
							<Chart.DoughnutChart {...uniques} />
						) : (
							<Chart.BarChart {...uniques} />
						)
					) : (
						'Well, that is Sweet Hot Ice Cream'
					)}
					<Button
						className="mt-2 chart-color"
						title="Sure!"
						onClick={() => setDoughnut(!dough)}
					>
						Maybe {dough ? 'Bar' : 'Doughnut'}?
					</Button>
				</div>
				<div className="py-2">
					<span>
						Oh my god, there is {count} post per user in average!
					</span>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default App
