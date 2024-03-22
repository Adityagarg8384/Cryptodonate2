import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Enter = () => {
    return (
        <Main>
            <Head>
                CRYPTO DONATE
            </Head>
            <Subhead>
                Crypto Donate is an online platform for parties to receive donations in Crypto Currency (Currently using fake ethers)
            </Subhead>
            <Link href="/createcampaign">
                <But>
                    Get Started
                </But>
            </Link>
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

    @media (min-width: 431px) and (min-height: 933px) {
        margin-top: 150px;
    }
`

const Head = styled.h1`
    font-size: 90px;
    margin: 0px;

    @media (max-width: 600px) {
        font-size: 4rem;
        margin-left: 1.5rem;
    }
`

const Subhead = styled.p`
    margin: 20px;
    font-size: 20px;

    @media (max-width: 600px) {
        font-size: 16px;
    }
`

const But = styled.button`
    margin-top: 20px;
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px; 
    text-align: center; 
    text-decoration: none; 
    display: inline-block; 
    font-size: 16px; 
    border-radius: 5px; 
    border: none; 
    cursor: pointer; 

    @media (min-width: 768px) {
        padding: 15px 30px;
        font-size: 20px;
    }
`

export default Enter;
