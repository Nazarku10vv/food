/* eslint-disable no-case-declarations */
export const ACTIONS = {
	ADD_FOOD: 'ADD_FOOD',
	DELETE_FOOD: 'DELETE_FOOD',
	STORAGE_FOOD: 'STORAGE_FOOD',
	BASKET_FOOD: 'BASKET_FOOD',
	BASKET_DELETE: 'BASKET_DELETE'
}

const initialState = {
	food: JSON.parse(localStorage.getItem('food')) || [],
	basket: JSON.parse(localStorage.getItem('basket')) || []
}

export const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIONS.ADD_FOOD:
			const product = [...state.food]

			product.push(action.payload)

			localStorage.setItem('food', JSON.stringify(product))

			return { ...state, food: product }

		case ACTIONS.STORAGE_FOOD:
			const foodWithStorage = JSON.parse(localStorage.getItem('food')) || []

			return { ...state, food: foodWithStorage }

		case ACTIONS.DELETE_FOOD:
			const updatedFoods = state.food.filter(item => item.id !== action.payload)
			localStorage.setItem('food', JSON.stringify(updatedFoods))

			return { ...state, food: updatedFoods }

		case ACTIONS.BASKET_FOOD:
			const productBasket = [...state.basket, action.payload]
			localStorage.setItem('basket', JSON.stringify(productBasket))

			return { ...state, basket: productBasket }

		case ACTIONS.BASKET_DELETE:
			const updatedFoodsDelte = state.basket.filter(item => item.id !== action.payload)
			localStorage.setItem('basket', JSON.stringify(updatedFoodsDelte))

			return { ...state, basket: updatedFoodsDelte }

		default:
			return state
	}
}
