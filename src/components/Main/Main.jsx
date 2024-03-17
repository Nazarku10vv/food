import React from 'react'
import img2 from '../../img/2.png'
import img3 from '../../img/3.png'
import './Main.css'

const Main = () => {
	return (
		<div>
			<section id='main'>
				<div className='container'>
					<div className='main'>
						<div className='mainText'>
							<h1>Friday pizza!</h1>
							<h6>Time to enjoy our delicious pizza.</h6>
							<button>ORDER NOW</button>
						</div>
						<div className='mainImage'>
							<img className='img2' src={img2} alt='' />
							<img className='img3' src={img3} alt='' />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Main
