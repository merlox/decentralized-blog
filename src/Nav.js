import React, { useState, useEffect } from 'react'
import Web3 from 'web3'

export default () => {
    useEffect(() => {
        toast("Wow so easy !");
    }, [])
    // Note: the web3 version is always 0.20.7 because of metamask
//   const setupWeb3 = async () => {
//     const ethereum = window.ethereum;
//     if (typeof ethereum !== 'undefined') {
//       try {
//         await ethereum.enable();
//       } catch (e) {
//         return alert('Eth')
//       }
//       window.web3 = new Web3(ethereum);
//     } else if (typeof window.web3 !== 'undefined') {
//       window.web3 = new Web3(window.web3.currentProvider);
//     } else {
//       return warningNotification('Metamask not detected', 'You must login to metamask to use this application');
//     }
//     window.web3.eth.defaultAccount = window.web3.eth.accounts[0];

//     // Sign nonce for centralized login
//     let publicAddress = window.web3.eth.defaultAccount.toLowerCase();
//     await this.handleCentralizedLogin(publicAddress, callback);

//     // Helpers
//     await this.refreshWhenAccountsChanged();
//     await this.updateBalance();

//     await this.setupContracts();
//     await this.getOvrsOwned();
//   };

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