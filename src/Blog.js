import React, { useState, useEffect } from 'react'

export default ({ account, contract }) => {
	const [ids, setIds] = useState([])

	const getCodes = async () => {
		const articleIds = await contract.methods.getArticleIds().call({
			from: account
		})
		// let codes = []

		// for(let i = 0; i < codeLength; i++) {
		// 	codes.push(await contractInstance.methods.userCode(user, i).call())
		// }

		// codes = codes.map(element => (
		// 	<div key={parseInt(element.id) + 1}>
		// 		<h4>{parseInt(element.id) + 1} {element.fileName}</h4>
		// 		<pre>{element.code}</pre>
		// 	</div>
		// ))
	}
}

	// constructor () {
	// 	super()
	// 	window.web3 = new Web3(web3.currentProvider)
	// 	window.contractInstance = new web3.eth.Contract(abi, address)
	// 	this.state = {
	// 		codes: [],
	// 		isLoadingMessage: true
	// 	}
	// 	this.getCodes()
	// }

	// async getCodes() {
	// 	const user = (await web3.eth.getAccounts())[0]
	// 	const codeLength = await contractInstance.methods.getLength().call({
	// 		from: user
	// 	})
	// 	let codes = []

	// 	for(let i = 0; i < codeLength; i++) {
	// 		codes.push(await contractInstance.methods.userCode(user, i).call())
	// 	}

	// 	codes = codes.map(element => (
	// 		<div key={parseInt(element.id) + 1}>
	// 			<h4>{parseInt(element.id) + 1} {element.fileName}</h4>
	// 			<pre>{element.code}</pre>
	// 		</div>
	// 	))

	// 	this.setState({codes, isLoadingMessage: false})
	// }

	// render () {
	// 	return (
	// 		<div className="my-code-block">
	// 			<h2>Your decentralized code</h2>
	// 			{this.state.isLoadingMessage ? "Loading..." : ""}
	// 			{this.state.codes}
	// 		</div>
	// 	)
	// }
