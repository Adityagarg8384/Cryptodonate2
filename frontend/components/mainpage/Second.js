import React from 'react'
import styled from 'styled-components'

const Second = () => {
  return (
    <SecondMain>
            <ThirdMain>
               Enter the OTP
            </ThirdMain>
            <But>
            <Input placeholder="OTP" name="OTP">
            </Input>
            
            </But>
            <Bu type="submit" >Submit</Bu>
        </SecondMain>
  )
}
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

const But= styled.div`
margin-down: 20px
`

const Bu=styled.button`
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
`

export default Second;