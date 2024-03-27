import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
	const [show, Toggle] = useState(false)
	const main = document.getElementById('root') //root altering for dark mode
    
	return (
		<header>
			<div className='d-flex justify-content-between align-items-center header-content'>
				<h1>Netzsz</h1>
				<Button
                    title='Toggle dark mode'
					className='light-toggler popup'
					onClick={() => {
						Toggle(!show)
						main.classList.toggle('dark')
					}}
					variant={show ? 'light' : 'dark'}
				>
					<FontAwesomeIcon icon={show ? faSun : faMoon} />
				</Button>
			</div>
		</header>
	)
}
