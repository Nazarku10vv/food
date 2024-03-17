import MainPage from '../Pages/MainPage'
import { Route, Routes } from 'react-router-dom'
import AdminMain from '../Pages/AdminMain'
import BasketPage from '../Pages/BasketPage'

const MyRoutes = () => {


		
	const routes = [
		{
			path: '/',
			element: <MainPage />,
			key: 1
		},
		{
			path: '/admin',
			element: <AdminMain />,
			key: 2
		},
		{
			path: '/basket',
			element: <BasketPage />,
			key: 3
		}
	]
	return (
		<Routes>
			{routes.map(item => (
				<Route path={item.path} element={item.element} key={item.key} />
			))}
		</Routes>
	)
}

export default MyRoutes
