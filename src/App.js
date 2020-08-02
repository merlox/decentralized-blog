import React, { useState, useEffect } from 'react'
import Web3 from 'web3'
import ReactDOM from 'react-dom'
import Nav from './Nav'
import AddArticle from './AddArticle'
import Blog from './Blog'
import { toast } from 'react-toastify'
import blogJson from '../build/contracts/Blog.json'
import 'react-toastify/dist/ReactToastify.css'
import './index.styl'

toast.configure()

const App = () => {
	const [activePage, setActivePage] = useState('blog')
	const [account, setAccount] = useState(null) // Required to update the address once it's available
	const [contract, setContract] = useState(null)

	useEffect(() => {
		// Required to use the async function in the right order
		const start = async () => {
			await setupWeb3()
			setupContract()
		}
		start()
	}, [])

	const changePage = page => {
		setActivePage(page)
	}
	
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
		setAccount(accounts[0])
	}

	const setupContract = () => {
		const _contract = new web3.eth.Contract(blogJson.abi, blogJson.networks['3'].address)
		setContract(_contract)
	}

	const renderActivePage = () => {
		switch (activePage) {
			case 'blog':
				return <Blog account={account} contract={contract} />
			case 'add-article':
				return <AddArticle account={account} contract={contract} />
			default:
				return <Blog account={account} contract={contract} />
		}
	}

	return (
		<div>
			<Nav account={account} changePage={page => changePage(page)} />
			{renderActivePage()}
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector('#root'))
