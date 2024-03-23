import React, { useState } from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import { toast } from 'react-toastify';

var Number = "";

var prop = false;

var stat = false;



const Change = () => {
    stat = true;
}


const First = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [status, setStatus] = useState(false);

    const p = (e) => {
        setPhoneNumber(phoneNumber);
    }

    
    const handlesend = () => {
        fetch("https://crypto-donate-bqhe.vercel.app/send-otp", {
            method: 'POST',
            body: JSON.stringify({
                phoneNumber,
            }),
            
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then((response) => {
                if (response.status == 200) {
                    toast.success("OTP sent successfully");
                    setStatus(true);
                }
                else {
                    console.log("Failed1");
                    toast.error("Some error occurrend")
                }
            })
            .catch((err) => {
                toast.success("Failed");
            })
    }

    return (
        <D>
            {
                status === false ?
                    <SecondMain>
                        <ThirdMain>
                            Enter the Phone Number
                        </ThirdMain>
                        <But>
                            <Input placeholder="phone number" name="Phone-number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}>
                            </Input>
                            <FourthMain>
                                Note- You should have a registered mobile number with us.If you're mobile number is not registered than
                                <Link href="/" onClick={Change} >
                                    Click Here
                                </Link>
                            </FourthMain>
                        </But>
                        <Bu type="submit" onClick={handlesend} >Submit</Bu>
                    </SecondMain>
                    :
                    <SecondMain>
                        <ThirdMain>
                            Successful
                        </ThirdMain>
                        <Link href="/otp">
                            <Bu type="submit" >CONTINUE</Bu>
                        </Link>
                    </SecondMain>
            }
        </D>
    )
}

const Button = styled.button`

`

const D= styled.div`
display: flex;
justify-content: center;
align-items: center;
`
const SecondMain = styled.div`
align: center;
height: 60%;
width: 60%;
background-color: black;
border-radius: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;

@media (max-width: 431px) and (max-height: 933px) {
    // width: 40rem;
    // height: 100rem;
   }
`

const ThirdMain = styled.div`
text-align: center;
margin-down: 100px;
font-size: 40px;
color: white;
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
    width: 10rem;
   }
`

export { stat, prop, Number };

export default First;
