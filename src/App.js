import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav'
// import AddArticle from './AddArticle'
// import Blog from './Blog'
import './index.styl'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
	const [activePage, setActivePage] = useState('home')

	const changePage = page => {
		setActivePage(page)
	}

	// const renderActivePage = () => {
	// 	switch (activePage) {
	// 		case 'home':
	// 			return <Blog />
	// 		case 'add-article':
	// 			return <AddArticle />
	// 		default:
	// 			return <Blog />
	// 	}
	// }

	return (
		<div>
			<Nav changePage={page => changePage(page)} />
			{/* {renderActivePage()} */}
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'))
