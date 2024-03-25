import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Chart as ChartJS, defaults } from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'
// import { AsBind } from 'as-bind'
// import { useWasm } from './useWasm'
import './App.css'

async function fetchAndInstantiate(arr1, arr2) {
	const response = await fetch('/src/div.wasm')
	const buffer = await response.arrayBuffer()
	const obj = await WebAssembly.instantiate(buffer)
	console.log("theres "+obj.instance.exports.div(arr1, arr2) + " post per user in average") // "3"
}

const addNames = (data) =>{
	let arr = [];
	for (const [key, value] of Object.entries(data)) {
		arr.push(`U ${key}`);
	}
	return arr;
}

function App() {
	const [count, setCount] = useState(0)
	const [data, setData] = useState(null)
	// const [datamore, setDataMore] = useState(null)
	const [uniques, setUniques] = useState(null)

	useEffect(() => {
		// fetch('https://jsonplaceholder.typicode.com/users')
		// 	.then((response) => response.json())
		// 	.then((json) => setDataMore(json))
		// 	.catch((error) => console.error(error))
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((json, unique) => {
				setData(json)
				unique = json.reduce((c, { userId: key }) => (c[key] = (c[key] || 0) + 1, c), {});
				// console.log(unique);
				setUniques(unique)
			})
			.catch((error) => console.error(error))
		fetchAndInstantiate(data ? data.length : 1, uniques? Object.keys(uniques).length : 1)
	}, [])

	// const [state, setState] = useState(null)
	// useEffect(() => {
	// 	const fetchWasm = async () => {
	// 		const wasm = await fetch('add.wasm')
	// 		const instance = await AsBind.instantiate(wasm, {})
	// 		setState(instance)
	// 	}
	// 	fetchWasm()
	// }, [])

	// fetch('add.wasm').then(response =>
	// 	response.arrayBuffer()
	// ).then(bytes =>
	//   WebAssembly.instantiate(bytes)
	// ).then(obj => {
	// 	console.log(obj.instance.exports.add(1, 2));
	// });
	return (
		<>
			{/* {instance && instance.exports.add(1, 1)} */}
			<div className="dataCard customerCard">
				<Bar
					data={{
						labels: uniques
							? addNames(uniques)
							: ['No Data'],
						datasets: [
							{
								label: 'Users posts count',
								data: uniques
								? Object["values"](uniques)
								: ['No Data'],
								backgroundColor: [
									'rgba(43, 63, 229, 0.8)',
									'rgba(250, 192, 19, 0.8)'
								],
								borderRadius: 3
							}
						]
					}}
					options={{
						plugins: {
							title: {
								text: 'Users Posts Count'
							}
						}
					}}
				/>
			</div>
			<div>
				<img src={viteLogo} className="logo" alt="Vite logo" />

				<img src={reactLogo} className="logo react" alt="React logo" />
			</div>
			<h1>Vite + React</h1>
			<p>
				˚ powered by <strong>codedamn</strong>
			</p>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>

				<p>
					running on port{' '}
					<strong>{import.meta.env.VITE_PUBLIC_PORT}</strong>
				</p>
			</div>
		</>
	)
}

export default App
