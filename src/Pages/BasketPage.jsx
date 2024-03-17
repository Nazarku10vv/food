import { useSelector, useDispatch } from 'react-redux'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { deleteInBasket } from '../store/actionCreitors'

const BasketPage = () => {
	const { basket } = useSelector(state => state)

	const dispatch = useDispatch()

	return (
		<section id='basket'>
			<div className='container'>
				<div className='basket'>
					{basket.map((item, index) => (
						<div key={index}>
							<Card sx={{ width: 655 }}>
								<CardMedia
									sx={{ height: 400, width: '100%' }}
									image={item.img}
									title='green iguana'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='div'>
										{item.name}
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										{item.descr}
									</Typography>
									<br />
									<Typography gutterBottom variant='h5' component='div'>
										${item.price}.00
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										onClick={() => dispatch(deleteInBasket(item.id))}
										size='small'
									>
										Delete
									</Button>
								</CardActions>
							</Card>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default BasketPage
