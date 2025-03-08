import './Pagination.scss'

function Pagination({ paginationData }) {
	const { total, active } = paginationData
	const items = []

	for (let i = 0; i < total; i++) {
		items.push(<li key={i} className={i === active ? 'active' : ''}></li>)
	}

	return (
		<div className='pagination'>
			<ul>{items}</ul>
		</div>
	)
}

export default Pagination
