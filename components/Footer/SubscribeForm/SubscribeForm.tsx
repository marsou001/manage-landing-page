import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Props } from "../../../types";
import SubscribeErrorMessage from "./SubscribeErrorMessage/SubscribeErrorMessage";
import SubscribeFormButton from "./SubscribeFormButton/SubscribeFormButton";
import SubscribeFormInput from "./SubscribeFormInput/SubscribeFormInput";

const Container = styled.form`
  margin-bottom: 45px;
  @media screen and (min-width: ${(props: Props) => props.theme.breakpoints?.md}) {
    margin-bottom: 70px;
  }
  >div {
    position: relative;
    display: inline-block;
  }
`;

function SubscribeForm () {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setEmail(target.value);
    setIsEmailValid(checkIsEmailValid(target.value));
  }

  const checkIsEmailValid = (email: string): boolean => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.length === 0 || regex.test(email);
  }

  return (
    <Container>
      <div>
        <SubscribeFormInput 
          type="text" 
          placeholder="Updates in your inbox..." 
          aria-placeholder="Updates in your inbox..." 
          isValid={isEmailValid}
          aria-invalid={isEmailValid}
          aria-errormessage="error-message"
          value={email} 
          onChange={handleChange} 
        />

        {!isEmailValid && <SubscribeErrorMessage id="error-message" role="alert">Please insert a valid email</SubscribeErrorMessage>}
      </div>
      <SubscribeFormButton type="submit">GO</SubscribeFormButton>
    </Container>
  )
}

export default SubscribeForm;