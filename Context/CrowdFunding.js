import React, {useState,useEffect} from "react";
import {ethers} from 'ethers';
import Web3Modal from "web3modal";

import { CrowdFundingABI, CrowdFundingAddress } from './contants';

const fetchContract = (signerOrProvider) => 
  new ethers.Contract(CrowdFundingAddress,CrowdFundingABI,signerOrProvider);

export const CrowdFundingContext = React.createContext();

export const CrowdFundingProvider = ({children}) => {
  const titleData =  "Crowd Funding Contract";
  const [currentAccount, setCurrentAccount] = useState("");

  const createCampaign = async (campaign) => {
    const {title, description, amount, deadline} = campaign;
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    console.log(currentAccount);
    try{
      const transaction = await contract.createCampaign(
        currentAccount,
        title,
        description,
        ethers.utils.parseUnits(amount,18),
        new Date(deadline).getTime()
      );

      await transaction.wait();

      console.log("contract call success", transaction);

    }catch(error){
      console.log(error);
    }
  };


  const getCampaigns = async () => {
    // const provider = new ethers.providers.JsonRpcProvider();
    // const contract = fetchContract(provider);

    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    const campaigns = await contract.getCampaign();
    const parsedCampains = campaigns.map((campaign,i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
      pId : i,
    }));

    return parsedCampains;

  }

  const getUserCampaigns = async () => {

    // const provider = new ethers.providers.JsonRpcProvider();
    // const contract = fetchContract(provider);

    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    const allCampaigns = await contract.getCampaign();

    const accounts = await window.ethereum.request({
      method:"eth_accounts",
    });

    const currentUser = accounts[0];

    const filteredCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner === "0xFD15A4a38766Db902B656Cea2F748Dc7F037B5aa"
    );

    const userData = filteredCampaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(campaign.amountCollected.toString()),
      pId : i,
    })) 

    return userData;

  }

  const donate = async (pId,amount) => {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContract(signer);

      const campainData = await contract.donateToCampaign(pId, {
        value: ethers.utils.parseEther(amount),
      })

      await campainData.wait();
      location.reload();

      return campainData;
  };

  const getDonations = async (pId) => {
    // const provider = new ethers.providers.JsonRpcProvider();
    // const contract = fetchContract(provider);

    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);

    const donations = await contract.getDonators(pId);
    const numberOfDonations = donations[0].length;

    const parsedDonations = []

    for(let i=0; i< numberOfDonations; i++){
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });

      return parsedDonations;
    }

  }

  const checkIfWalletConnected = async () => {
    try{
      if(!window.ethereum)
        return setOpenError(true), setError("Install Metamask");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if(accounts.length){
        setCurrentAccount(accounts[0]);
      }else{
        console.log("No Account Found");
      }

    }catch(error){
      console.log(error);
    }
  }


  useEffect(()=> {
    checkIfWalletConnected();
  },[]);

 const connectWallet = async () => {
    console.log("connectWallet")
    try{
      if(!window.ethereum) return console.log("Install MetaMask");
      const accounts = await window.ethereum.request({
        method:"eth_requestAccounts",
      })
      setCurrentAccount(accounts[0]);
    }catch(error){
      console.log(error)
    }
  }

  return (
    <CrowdFundingContext.Provider
    value={{
      titleData,
      currentAccount,
      createCampaign,
      getCampaigns,
      getUserCampaigns,
      donate,
      getDonations,
      connectWallet,
    }}
    >
    {children}
    </CrowdFundingContext.Provider>
  );

};

