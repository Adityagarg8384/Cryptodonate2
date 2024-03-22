import styled from 'styled-components';
import { FormState } from '../Form';
import { useContext } from 'react';

const FormLeftWrapper = () => {
  // console.log(FormState);
  const Handler = useContext(FormState);
  // console.log(Handler);
  return (
    <FormLeft>
      <FormInput>
        <label>Party Name</label>
        <Input onChange={Handler.FormHandler} value={Handler.form.campaignTitle} placeholder='Campaign Title' name='campaignTitle'>
        </Input>
      </FormInput>
      <FormInput>
        <label>About Party</label>
        <TextArea onChange={Handler.FormHandler} value={Handler.form.story} name="story" placeholder='Describe Your Story'>
        </TextArea>
      </FormInput>
    </FormLeft>
  )
}

// onChange={Handler.FormHandler} value={Handler.form.campaignTitle}
// onChange={Handler.FormHandler} value={Handler.form.story}
const FormLeft = styled.div`
  width: 48%;

  @media (max-width: 431px) and (max-height: 933px) {
    width: 20rem;
  }
`;

const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'poppins';
  margin-top: 10px;
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

const TextArea = styled.textarea`
  padding: 15px;
  background-color: ${(props) => props.theme.bgDiv};
  color: ${(props) => props.theme.color};
  margin-top: 4px;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: large;
  max-width: 100%;
  min-width: 100%;
  overflow-x: hidden;
  min-height: 160px;

  @media (max-width: 431px) and (max-height: 933px) {
    min-height: 100px;
  }
`;

export default FormLeftWrapper;