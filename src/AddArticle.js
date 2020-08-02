import React, { useState } from 'react'
import { toast } from 'react-toastify'

toast.configure()

export default ({ account, contract }) => {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')

	const addArticle = async () => {
		if (title.length === 0)
			return toast("The title can't be empty", { type: 'warning' })
		if (content.length === 0)
			return toast("The content can't be empty", { type: 'warning' })
		try {
			await contract.methods.addArticle(title, content).send({ from: account })
		} catch (e) {
			console.log('Error', e.message)
			toast(
				'Could not add article: there was an error processing your transaction try again',
				{ type: 'error' }
			)
		}
	}

	return (
		<div className="add-code-block">
			<h2>Add your article to the blockchain</h2>
			<input
				type="text"
				placeholder="Title"
				onChange={e => setTitle(e.target.value)}
			/>
			<textarea
				placeholder="Content"
				onChange={e => setContent(e.target.value)}></textarea>
			<button className="button" onClick={() => addArticle()}>
				Publish
			</button>
		</div>
	)
}
