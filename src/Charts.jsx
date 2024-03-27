import { Chart as ChartJS, defaults } from 'chart.js/auto'
import { Bar, Doughnut } from 'react-chartjs-2'
//Framing imported comps for easy render with fetched data
export function BarChart(uniques) { //Bar
	const addNames = (data) => { //letting know that it's users but not some numbers
		let arr = []
		for (const [key, value] of Object.entries(data)) {
			arr.push(`U ${key}`)
		}
		return arr
	}
	return (//classes where added to reduce size of some chars or just simply to moddify if required
		<div className='bar'>
			<Bar
				data={{
					labels: uniques ? addNames(uniques) : ['No Data'],
					datasets: [
						{
							label: 'Posts per User',
							data: uniques
								? Object['values'](uniques)
								: ['No Data'], //acquire post count for every user
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
							text: 'Posts per User'
						}
					}
				}}
			/>
		</div>
	)
}
export function DoughnutChart(uniques) { //Doh nut
	const addNames = (data) => { //letting know that it's users but not some numbers
		let arr = []
		for (const [key, value] of Object.entries(data)) {
			arr.push(`U ${key}`)
		}
		return arr
	}
	return (//classes where added to reduce size of some chars or just simply to moddify if required
		<div className='doughnut'> 
			<Doughnut
				data={{
					labels: uniques ? addNames(uniques) : ['No Data'],
					datasets: [
						{
							label: 'Posts per User',
							data: uniques //acquire post count for every user
								? Object['values'](uniques)
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
							text: 'Posts per User'
						}
					}
				}}
			/>
		</div>
	)
}
