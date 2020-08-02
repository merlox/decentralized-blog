import React from 'react'

export default ({ account, changePage }) => {
	return (
		<div className="nav">
			<button className="button" onClick={() => changePage('blog')}>Blog</button>
            <button className="button" onClick={() => changePage('add-article')}>Add Article</button>
            <div className="color-grey">{account || 'No account detected'}</div>
		</div>
	)
}