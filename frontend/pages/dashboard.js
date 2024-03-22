import styled, { css } from "styled-components";
import Image from "next/image";
import { ethers } from 'ethers';
import CampaignFactory from "../artifacts/Contracts/Campaigns.sol/CampaignFactory.json";
import { useEffect, useState } from "react";
import Link from "next/link";
require("dotenv").config;

const dashboard = () => {
  const [campaignData, setCampaignData]= useState([]);

  useEffect(() => {
    const request = (async () => {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const web3provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = web3provider.getSigner();
      const address = await signer.getAddress();

      const provider = new ethers.providers.JsonRpcProvider(
        process.env.NEXT_PUBLIC_RPC_URL,
      );

      const contract = new ethers.Contract(
        process.env.NEXT_PUBLIC_ADDRESS,
        CampaignFactory.abi,
        provider,
      )

      const getAllCampaigns = contract.filters.campaignCreated(null, null, address);

      const AllCampaigns = await contract.queryFilter(getAllCampaigns);

      const AllData = AllCampaigns.map((e) => {
        return {
          title: e.args.title,
          image: e.args.imgURI,
          owner: e.args.owner,
          timestamp: parseInt(e.args.timestamp),
          amount: ethers.utils.formatEther(e.args.requiredAmount),
          address: e.args.campaignAddress,
        }
      })
      setCampaignData(AllData);
    }
    )
    request();
  }, [])

  return (
    <Home>
      <CardsWrapper>
        {campaignData.map((e) => {
          return (
            <div>
              <Card key={e.title}>
                <Img key="Img">
                  <Image fill alt="BJPLOGO.png" src={"http://ipfs.moralis.io/ipfs/" + e.image} />
                </Img>
                {/* <T>
        </T> */}
                <Title key="Title">
                  {e.title}
                </Title>
                <Data key="Data1">
                  <Text key="Text1">Owner </Text>
                  <Text key="Text2">{e.owner.slice(0, 6)}...{e.owner.slice(39)}</Text>
                </Data>
                <Data key="Data2">
                  <Text key="Text3"> Amount</Text>
                  <Text key="Text4">{e.amount}</Text>
                </Data>
                <Data key="Data3">
                  {/* <Text></Text> */}
                  <Text key="Text5">{new Date(e.timestamp * 1000).toLocaleString()}</Text>
                </Data>
                <Link passHref href={'/' + e.address}>
                  <Button key="Button">
                    Go to Campaign
                  </Button></Link>
              </Card>
            </div>
          )
        })}

      </CardsWrapper>
    </Home>
  )
}

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 25px;
  // background-color: orange;
  // opacity: 0.5;
  
  ${({ theme }) => css`
    @media (max-width: 431px) and (max-height: 933px) {
      width: 80%;
      flex-direction: column;
    }
  `}
`;

const T = styled.div`
  opacity: 0.5;
`;

const Card = styled.div`
  width: 100%;
  margin-top: 20px;
  background-color: white;
  transition: transform 0.5s;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Img = styled.div`
  // background-color: orange;
  position: relative;
  height: 120px;
  width: 100px;
`;

const Title = styled.h2`
  font-family: 'Poppins';
  font-size: 18px;
  margin: 2px 0px;
  background-color: ${(props) => props.theme.bgSubDiv};
  padding: 5px;
  cursor: pointer;
  font-weight: normal;
`;

const Data = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0px;
  background-color: ${(props) => props.theme.bgSubDiv};
  padding: 5px;
  cursor: pointer;
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px;
  font-family: 'Poppins';
  font-size: 18px;
  font-weight: bold;
`;

const Button = styled.button`
  padding: 8px;
  text-align: center;
  width: 100%;
  background-color: #00b712;
  background-image: linear-gradient(180deg, #00b712 0%, #5aff15 80%);
  border: none;
  cursor: pointer;
  color: white;
  font-size: 14px;
  font-weight: bold;
  font-family: 'Poppins';
`;


export default dashboard;
