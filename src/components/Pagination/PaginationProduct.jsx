import Pagination from '@mui/material/Pagination'

const PaginationProduct = ({ setPage, count }) => {
	function handlePagination(p, n) {
		setPage(n)
	}
	return (
		<div>
			<Pagination onChange={handlePagination} count={count} color='primary' />
		</div>
	)
}

export default PaginationProduct
