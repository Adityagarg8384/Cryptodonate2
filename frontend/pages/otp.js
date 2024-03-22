import React, { useState } from 'react'
import First from '../components/mainpage/First'
import styled from 'styled-components'
import{Number} from "../components/mainpage/First";
import Link from 'next/link';

var prop=false;

const otp = () => {
    const [status, setStatus]= useState(false);
    const [userOtp, setUserOtp]=useState('');
    const phoneNumber="+918384030040"
    const verifysend=()=>{
        fetch("http://localhost:3001/verify-otp", {
            method: 'POST',
            body: JSON.stringify({
                phoneNumber,
                userOtp
            }),
            
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then((response)=>{
            if(response.status==200){
                setStatus(true);
                prop=true;
            }
            else{
                console.log("Failed1");
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
     
        <Di>
            <H>
                <Head>
                    {
                        status==false?
                        <SecondMain>
                        <ThirdMain>
                            Enter the OTP
                        </ThirdMain>
                        <But>
                            <Input placeholder="OTP" name="OTP" value={userOtp} onChange={e=>setUserOtp(e.target.value)}>
                            </Input>
                            
                        </But>
                        <Bu type="submit" onClick={verifysend} >Submit</Bu>
                    </SecondMain>
                    :
                    <SecondMain>
                        <ThirdMain>
                            Successful;
                        </ThirdMain>
                        <Link href="/">
                        <Bu type="submit" >CONTINUE</Bu>
                        </Link>
                    </SecondMain>
                    }
                </Head>
            </H>
        </Di>

    )
}

const Di = styled.div`
height: 100vh;
width: 100px;
`

const H = styled.div`
height:100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;

`
const Head = styled.div`
height: 80%;
width: 30%;
display: flex;
justify-content: center;
align-items: center;
background-color: Black;
border-radius: 10px;
@media (max-width: 431px) and (max-height: 933px) {
    width: 100rem;
    height: 100rem;
   }
`

const SecondMain = styled.div`
align: center;
height: 60%;
width: 60%;
background-color: black;
// border-radius: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
@media (max-width: 431px) and (max-height: 933px) {
    justify-content: center;
    height: 100rem;
   }
`

const ThirdMain = styled.div`
text-align: center;
margin-down: 100px;
font-size: 40px;
color: white;

@media (max-width: 431px) and (max-height: 933px) {
    // justify-content: center;
    margin-down: 4rem;
    // height: 2.5rem;
   }
`

const Input = styled.input`
  padding:15px;
  background-color:${(props) => props.theme.bgDiv} ;
  color:${(props) => props.theme.color} ;
  margin-top:4px;
  border:none ;
  border-radius:8px ;
  outline:none;
  font-size:large;
  width:100% ;
`

const FourthMain = styled.p`
color: white;
font-size: 13px;
margin: 30 0 30 0;
`

const But = styled.div`
margin-down: 20px
`

const Bu = styled.button`
width: 60%;
height: 10%;
background-color: white;
color: black;
padding: 10px 20px; 
text-align: center; 
text-decoration: none; 
display: inline-block; 
font-size: 16px; 
border-radius: 5px; 
border: none; 
cursor: pointer;
@media (max-width: 431px) and (max-height: 933px) {
    // justify-content: center;
    margin-top: 2rem;
    height: 2.5rem;
   }
`

export {prop};

export default otp
