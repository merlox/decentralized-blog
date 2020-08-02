import React, { useState, useEffect } from 'react'

export default ({ account, contract }) => {
	const [articles, setArticles] = useState([])
	// Required because the contract variable will be null when this loads
	// so we gotta wait until it's setup to get the blockchain data
	useEffect(() => {
		if (contract) {
			getArticles()
			setInterval(getArticles, 1e3)
		}
	}, [contract])

	const getArticles = async () => {
		const lastId = await contract.methods.lastId().call({
			from: account
		})
		let allArticles = []
		for (let i = lastId - 1; i >= 0; i--) {
			let article = await contract.methods.getArticle(i, account).call()
			article = {
				id: article[0],
				title: article[1],
				content: article[2],
				owner: article[3],
			}
			allArticles.push(article)
		}
		setArticles(allArticles)
	}

	return (
		<div className="add-code-block">
			<h2>Decentralized Blog dApp</h2>
			<div className="articles">
				{articles.length === 0 ? (
					<p>No articles yet...</p>
				) : articles.map(article => (
					<div key={article.id}>
						<h3>{article.title}</h3>
						<p className="article-content">{article.content}</p>
					</div>
				))}
			</div>
		</div>
	)
}