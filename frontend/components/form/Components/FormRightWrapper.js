import styled from 'styled-components';
import { FormState } from '../Form';
import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { TailSpin } from 'react-loader-spinner'
import { create as IPFSHTTPClient } from 'ipfs-http-client';
const Moralis = require("moralis").default;
require('dotenv').config();

// const projectId = process.env.NEXT_PUBLIC_IPFS_ID
// const projectSecret = process.env.NEXT_PUBLIC_IPFS_KEY
// const auth = 'Basic ' + Buffer.from(projectId + ":" + projectSecret).toString('base64')

// const client = IPFSHTTPClient({
//   host:'ipfs.infura.io',
//   port:5001,
//   protocol: 'https',
//   headers: {
//     authorization: auth
//   }
// })

const FormRightWrapper = () => {
  const Handler = useContext(FormState);

  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const uploadFiles = async (e) => {
    // console.log("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjFjMTY0ZWQxLTVjOWItNDk4ZS1hZDU5LTgxZDU2MTcwNzk1ZiIsIm9yZ0lkIjoiMzcxODc4IiwidXNlcklkIjoiMzgyMTgxIiwidHlwZUlkIjoiMzlmNDdiMTEtYTI5OS00YTAzLThmN2ItNzg0MGZmMWZkOTg0IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDUwNDg4MjIsImV4cCI6NDg2MDgwODgyMn0.ZiqMrjKzSXVzEK7K1zQgh0QrcDIsrk_5qZZz9uK7UgY39tH56wiIltNGXqf");
    e.preventDefault();
    await Moralis.start({
      apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjVjNTQ1MWVlLWFjNTctNGU1Mi05Y2EzLWYzMTRlMjkzNWQxYyIsIm9yZ0lkIjoiMzc1MTM4IiwidXNlcklkIjoiMzg1NTA5IiwidHlwZUlkIjoiMGVjNDVmYjEtMzRjYy00MThhLWE3OWMtZTdhOTNjNjVmNTVhIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MDY3MTIyMjAsImV4cCI6NDg2MjQ3MjIyMH0.dutPV0T2uxx7WJqyTm5zcJzkvSCRkLER9meGuGITXV4",
    });
    setUploadLoading(true);
    console.log(Handler);

    if (Handler.form.story !== "") {
      try {
        // const added = await client.add(Handler.form.story);
        // Handler.setStoryUrl(added.path)
        console.log(Handler.form.story);
        const a = [{
          path: "a",
          content: Handler.form.story,
        }];

        const response = await Moralis.EvmApi.ipfs.uploadFolder({
          abi: a,
        });
        console.log(response);
        console.log(response.jsonResponse[0].path);
        Handler.setStoryUrl(response.jsonResponse[0].path);
      }
      catch (error) {
        console.log(error);
        toast.warn(`Error Uploading Story`);
      }
    }

    if (Handler.image !== null) {
      console.log(Handler.image);
      try {
        
        var file = Handler.image;
        var reader = new FileReader();
        reader.onloadend = async function () {
          // console.log('RESULT', reader.result)
          const b= [{
            path: Handler.image.name,
            content:reader.result,
          }];
          console.log(b);
          const response = await Moralis.EvmApi.ipfs.uploadFolder({
            abi: b,
          });
          console.log(response);
          const index = response.jsonResponse[0].path.indexOf('ipfs/');
          console.log(response.jsonResponse[0].path.substring(index+5));
          Handler.setImageUrl(response.jsonResponse[0].path.substring(index+5))
        }
        reader.readAsDataURL(file);
      }
      catch (error) {
        console.log(error);
        toast.warn(`Error Uploading Image`);
      }
    }

    setUploadLoading(false);
    setUploaded(true);
    Handler.setUploaded(true);
    toast.success("Files Uploaded Sucessfully")
  }

  return (
    <FormRight>
      <FormInput>
        <FormRow>
          <RowFirstInput>
            <label>Max Donation Amount</label>
            <Input onChange={Handler.FormHandler} value={Handler.form.requiredAmount} name="requiredAmount" type={'number'} placeholder='Required Amount'></Input>
          </RowFirstInput>
          <RowSecondInput>
            <label>Party Status</label>
            <Select onChange={Handler.FormHandler} value={Handler.form.category} name="category">
              <option>Education</option>
              <option>Health</option>
              <option>Animal</option>
            </Select>
          </RowSecondInput>
        </FormRow>
      </FormInput>
      {/* Image */}
      <FormInput>
        <label>Select Image</label>
        <Image onChange={Handler.ImageHandler} alt="dapp" type="file" >
        </Image>
      </FormInput>
      {uploadLoading == true ? <Button><TailSpin color='#fff' height={20} /></Button> :
        uploaded == false ?
          <Button onClick={uploadFiles}>
            Upload Files to IPFS
          </Button>
          : <Button style={{ cursor: "no-drop" }}>Files uploaded Sucessfully</Button>
      }
      <Button onClick={Handler.startCampaign}>
        Start Campaign
      </Button>
    </FormRight>
  )
}

// onChange={Handler.FormHandler} value={Handler.form.requiredAmount}
// onChange={Handler.FormHandler} value={Handler.form.category}
// onChange={Handler.ImageHandler} 
// onClick={Handler.startCampaign}

const FormRight = styled.div`
  width: 45%;

  @media (max-width: 431px) and (max-height: 933px) {
    width: 100%;
  }
`;

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'poppins';
  margin-top: 10px;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Input = styled.input`
  padding: 15px;
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  margin-top: 4px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: large;
  width: 100%;
`;

const RowFirstInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

const RowSecondInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  @media (max-width: 431px) and (max-height: 933px) {
    // width: 100%;
    margin-top: 1.5rem;
  }
`;

const Select = styled.select`
  padding: 15px;
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  margin-top: 4px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: large;
  width: 100%;
`;

const Image = styled.input`
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  margin-top: 4px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: large;
  width: 100%;

  &::-webkit-file-upload-button {
    padding: 15px;
    background-color: ${(props) => props.theme.bgSubDiv};
    color: ${(props) => props.theme.color};
    outline: none;
    border: none;
    font-weight: bold;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 15px;
  color: white;
  background-color: #00b712;
  background-image: linear-gradient(180deg, #00b712 0%, #5aff15 80%);
  border: none;
  margin-top: 30px;
  cursor: pointer;
  font-weight: bold;
  font-size: large;

  @media (max-width: 431px) and (max-height: 933px) {
    margin-left: 5rem;
    width: 50%;
  }
`;

export default FormRightWrapper