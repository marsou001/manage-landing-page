import { useState } from "react";
import styled from "styled-components";
import { Props } from "../../../types";
import SubscribeErrorMessage from "./SubscribeErrorMessage/SubscribeErrorMessage";
import SubscribeFormButton from "./SubscribeFormButton/SubscribeFormButton";
import SubscribeFormInput from "./SubscribeFormInput/SubscribeFormInput";

const Container = styled.form`
  margin-bottom: 45px;
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints?.md}) {
    margin-bottom: 80px;
  }
  >div {
    position: relative;
    display: inline-block;
  }
`;

function SubscribeForm () {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setEmail(target.value);
    setIsValid(checkIsValid(target.value));
  }

  const checkIsValid = (text: string): boolean => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return text.length === 0 || regex.test(text);
  }

  return (
    <Container>
      <div>
        <SubscribeFormInput 
          type="text" 
          placeholder="Updates in your inbox..." 
          aria-placeholder="Updates in your inbox..." 
          isValid={isValid}
          value={email} 
          onChange={handleChange} 
        />

        {!isValid && <SubscribeErrorMessage>Please insert a valid email</SubscribeErrorMessage>}
      </div>
      <SubscribeFormButton type="submit">GO</SubscribeFormButton>
    </Container>
  )
}

export default SubscribeForm;