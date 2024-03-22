'use client'
import styled from "styled-components";
import { ethers } from "ethers";
import { useState } from "react";
require("dotenv").config();

const networks = {
  sepolia: {
    chainId: '2850711',
    chainName: "Sepolia Testnet",
    nativeCurrency: {
      name: "Sepolia ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: [`https://sepolia.infura.io/v3/${process.env.PROCESS_URL}`],
    blockExplorerUrls: ["https://sepolia.etherscan.io/"],
  }
}

const Wallet = () => {
  const [address, setAddress] = useState('');
  const [balance, setBalance]= useState('');
  const connectWallet = async () => {
    await ethereum.request({
      method: "eth_requestAccounts",
    })
    if (typeof window !== undefined) {
      const provider = new ethers.providers.Web3Provider(ethereum, "any");
      
      const account = provider.getSigner();
      const Address = await account.getAddress();
      const Balanace= ethers.utils.formatEther(await account.getBalance());

      setAddress(Address);
      setBalance(Balanace);
    }

  }

  return (
    <ConnectWalletWrapper onClick={connectWallet}>
      {address==''? <ConnectTemp>Connectwallet</ConnectTemp> : <ConnectTemp>{address.slice(0,6)}...{address.slice(39)}</ConnectTemp>}
      {balance=='' ? <Balance></Balance>:<Balance>{balance.slice(0,5)}ETH</Balance>}
      </ConnectWalletWrapper>
  )
}

const ConnectWalletWrapper= styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color:${(props)=> props.theme.bgDiv};
color: ${(props)=> props.theme.color};
margin-left: 1rem;
// padding: 6px;
// max-height:80%;
// cursor: pointer;
// font-weight: bold;
`
const ConnectTemp= styled.div`
padding: 6px;
max-height:80%;
cursor: pointer;
font-weight: bold;
@media (max-width: 431px) and (max-height: 933px) {
  font-size: 0.5rem;
  padding: 0.2rem;
}
`

const Balance= styled.div`
padding: 6px;
max-height:80%;
cursor: pointer;
font-weight: bold;
@media (max-width: 431px) and (max-height: 933px) {
  font-size: 0.5rem;
  padding: 0.2rem;
}
`

export default Wallet;
