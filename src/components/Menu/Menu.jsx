import { useDispatch, useSelector } from 'react-redux'
import { ACTIONS } from '../../Reducer'
import './index.css'
import { useState } from 'react'
import PaginationProduct from '../Pagination/PaginationProduct'

const Menu = () => {
	const { food, basket } = useSelector(state => state)
	const dispatch = useDispatch()

	function deleteFood(id) {
		dispatch({ type: ACTIONS.DELETE_FOOD, payload: id })
	}
	function basketFood(newProduct) {
		dispatch({ type: ACTIONS.BASKET_FOOD, payload: newProduct })
	}

	// Pagination
	const [page, setPage] = useState(1)

	const itemsPerPage = 3

	const count = Math.ceil(food.length / itemsPerPage)

	function currentPage() {
		let start = (page - 1) * itemsPerPage
		let end = start + itemsPerPage
		return food.slice(start, end)
	}

	// Pagination

	return (
		<section id='menu'>
			<div className='container'>
				<center>
					<h1>Recommended menu</h1>
				</center>

				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'column',
						gap: '30px'
					}}
				>
					<div className='menu'>
						<>
							{food.length > 0 ? (
								currentPage().map((item, index) => (
									<div key={index} className='food_card'>
										<div className='post_image'>
											<img src={item.img} alt='' />
											<div className='content'>
												<h3>{item.name}</h3>
												<p>{item.descr}</p>
												<h4>${item.price}.00</h4>
											</div>
										</div>
										<div className='features'>
											<button
												onClick={() => deleteFood(item.id)}
												className='delete_to_cart'
											>
												Delete
											</button>
											<button
												onClick={() => basketFood(item)}
												className='add_to_cart'
											>
												Add to Cart
											</button>
										</div>
									</div>
								))
							) : (
								<p>Нету данных</p>
							)}
						</>
					</div>
					<PaginationProduct setPage={setPage} count={count} />
				</div>
			</div>
		</section>
	)
}

export { Menu }
