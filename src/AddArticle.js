import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import {address, abi} from './myContract'

export default class AddArticle extends React.Component {
	constructor () {
		super()
		window.web3 = new Web3(web3.currentProvider)
		window.contractInstance = new web3.eth.Contract(abi, address)
	}

	async addCode(title, code) {
		const user = (await web3.eth.getAccounts())[0]
		await contractInstance.methods.addCode(title, code).send({
			from: user
		})
	}

	render () {
		return (
			<div className="add-code-block">
				<h2>Add your code to the blockchain</h2>
                <input type="text" placeholder="File title" ref="title" />
                <textarea placeholder="Your code" ref="code"></textarea>
				<button onClick={() => this.addCode(this.refs.title.value, this.refs.code.value)}>Submit code</button>
			</div>
		)
	}
}
