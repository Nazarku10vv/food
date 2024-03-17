import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, TextField } from '@mui/material'

const Admin = () => {
	const dispatch = useDispatch()

	const [name, setName] = useState('')
	const [img, setImg] = useState('')
	const [descr, setDescr] = useState('')
	const [price, setPrice] = useState('')

	const handleCreateProduct = () => {
		const product = {
			name: name,
			img: img,
			descr: descr,
			price: price
		}
		dispatch({ type: 'ADD_FOOD', payload: { ...product, id: Date.now() } })
		setName('')
		setImg('')
		setDescr('')
		setPrice('')
	}

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					width: '600px',
					gap: '20px',
					height: '80vh'
				}}
			>
				<TextField
					sx={{
						width: '100%'
					}}
					id='outlined-basic'
					label='name'
					variant='outlined'
					value={name}
					onChange={e => setName(e.target.value)}
				/>
				<TextField
					sx={{
						width: '100%'
					}}
					id='outlined-basic'
					label='img'
					variant='outlined'
					value={img}
					onChange={e => setImg(e.target.value)}
				/>
				<TextField
					sx={{
						width: '100%'
					}}
					id='outlined-basic'
					label='descr'
					variant='outlined'
					value={descr}
					onChange={e => setDescr(e.target.value)}
				/>
				<TextField
					sx={{
						width: '100%'
					}}
					id='outlined-basic'
					label='price'
					variant='outlined'
					value={price}
					onChange={e => setPrice(e.target.value)}
				/>
				<Button
					sx={{
						width: '100%'
					}}
					variant='contained'
					onClick={() => handleCreateProduct()}
				>
					Create Product
				</Button>
			</div>
		</div>
	)
}

export default Admin
