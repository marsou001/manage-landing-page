import { useState } from "react";
import Header from "./Header/Header";
import Dialog from "./Dialog/Dialog";
import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from "styled-components";

let GlobalStyle = createGlobalStyle`
  body {
    overflow-y: initial;
  }
`;

function setGlobalStyle(value: boolean) {
  GlobalStyle = createGlobalStyle`
    body {
      overflow-y: ${value ? 'hidden' : 'initial'};
    }
  `;
}

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const setState = (val: boolean) => {
    setIsActive(val);
    setGlobalStyle(val);
  }

  const openDialog = () => setState(true);
  const closeDialog = () => setState(false);
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Enter") {
      setIsActive((prevState) => !prevState);
      setGlobalStyle(isActive);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header
        isActive={isActive}
        openDialog={openDialog}
        handleKeyDown={handleKeyDown}
      />
      {isActive && <Dialog 
        isActive={isActive}
        closeDialog={closeDialog}
        handleKeyDown={handleKeyDown}
      />}
    </>
  );
}

export default Navbar;