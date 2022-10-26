import { useState } from "react";
import Header from "./Header/Header";
import Dialog from "./Dialog/Dialog";
import { createGlobalStyle } from "styled-components";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const GlobalStyle = createGlobalStyle`
    body {
      overflow-y: ${isActive ? 'hidden' : 'initial'};
    }
  `;

  const handleClick = () => setIsActive((prevState) => !prevState);

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      setIsActive((prevState) => !prevState);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header
        isActive={isActive}
        handleClick={handleClick}
        handleKeyDown={handleKeyDown}
      />
      {isActive && <Dialog />}
    </>
  );
}

export default Navbar;
