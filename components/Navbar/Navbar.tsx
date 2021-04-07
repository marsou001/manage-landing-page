import { useState } from "react";
import Header from "./Header/Header";
import Dialog from "./Dialog/Dialog";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => setIsActive((prevState) => !prevState);

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      setIsActive((prevState) => !prevState);
    }
  };

  return (
    <>
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
