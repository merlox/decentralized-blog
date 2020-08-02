import React, { useState, useEffect } from 'react'
import Web3 from 'web3'
import { toast } from 'react-toastify'

toast.configure()

export default () => {
	useEffect(() => {
		setupWeb3()
	}, [])

	const setupWeb3 = async () => {
		const ethereum = window.ethereum
		if (typeof ethereum !== 'undefined') {
			try {
				await ethereum.enable()
			} catch (e) {
				return toast('Error enabling Metamask try again later', {
					type: 'error',
				})
			}
			window.web3 = new Web3(ethereum)
		} else if (typeof window.web3 !== 'undefined') {
			window.web3 = new Web3(window.web3.currentProvider)
		} else {
			return toast(
				'Metamask not detected: You must login to metamask to use this application',
				{ type: 'warning' }
			)
        }
        const accounts = await window.web3.eth.getAccounts()
        window.web3.eth.defaultAccount = accounts[0]
	}

	return (
		<div className="nav">
			{/* <button onClick={() => this.props.showMyCodes(true)}>My Code</button>
            <button onClick={() => this.props.showMyCodes(false)}>Add Code</button>
            <div className="color-grey">{this.state.account}</div> */}
		</div>
	)
}

// class Nav extends React.Component {
// 	constructor (props) {
// 		super()
//         window.web3 = new Web3(web3.currentProvider)
//         this.state = {
//             account: ''
//         }

//         this.getAccount()
//     }

//     async getAccount() {
//         const myAccounts = await web3.eth.getAccounts()
//         this.setState({account: myAccounts[0]})
//     }

// 	render () {
// 		return (
// 			<div className="nav">
//                 <button onClick={() => this.props.showMyCodes(true)}>My Code</button>
//                 <button onClick={() => this.props.showMyCodes(false)}>Add Code</button>
//                 <div className="color-grey">{this.state.account}</div>
//             </div>
// 		)
// 	}
// }
