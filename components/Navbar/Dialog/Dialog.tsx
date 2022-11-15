import styled from "styled-components";
import List from "./List/List";
import ListItem from "./ListItem/ListItem";
import Nav from "./Nav/Nav";
import ListItemLink from "./ListItemLink/ListItemLink";
import iconClose from "../../../public/images/icon-close.svg";
import { KeyboardEvent, useEffect, useRef } from "react";
import IconClose from "../Header/IconClose/IconClose";

const Container = styled.div`
  color: ${(props) => props.theme.colors?.primary.darkBlue};
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.01),
    rgba(0, 0, 0, 0.4)
  );
  font-weight: 700;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    display: none;
  }
`;

function Dialog({ isActive, closeDialog }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLDivElement>(null);
  const lastItemRef = useRef<HTMLAnchorElement>(null);

  const focusOnContainer = () => {
    const container = containerRef.current;
    container.focus();
  }

  const focusOnCloseIcon = () => {
    const closeIcon = closeRef.current;
    closeIcon.focus();
  }

  const focusOnLastItem = () => {
    const lastItem = lastItemRef.current;
    lastItem.focus();
  }

  const handleCloseIconKeyDown = (e: KeyboardEvent) => {
    if (e.shiftKey && e.code === 'Tab') {
      focusOnLastItem();
      e.preventDefault();
    } else if (e.code === 'Enter') {
      closeDialog();
    }
  }

  const handleLastItemKeyDown = (e: KeyboardEvent) => {
    if (e.code === 'Tab' && !e.shiftKey) {
      focusOnCloseIcon();
      e.preventDefault();
    }
  }

  const handleEscape = (e: KeyboardEvent) => {
    if (e.code === "Escape") {
      closeDialog();
    }
  }

  useEffect(() => {
    focusOnContainer();
  }, []);

  return (
    <Container 
      tabIndex={0}
      ref={containerRef}
      role="dialog" 
      aria-modal="true" 
      aria-labelledby="nav" 
      aria-describedby="nav"
      onKeyDown={handleEscape}
    >
      <IconClose
        isActive={isActive}
        ref={closeRef}
        tabIndex={0}
        style={{ position: 'absolute', top: 35, right: 25 }}
        onClick={closeDialog}
        onKeyDown={handleCloseIconKeyDown}
      >
        <img src={iconClose} title="Hide dialog" alt="Hide dialog" />
      </IconClose>
      <Nav>
        <List>
          <ListItem>
            <ListItemLink href="#">Pricing</ListItemLink>
          </ListItem>
          <ListItem>
            <ListItemLink href="#">Product</ListItemLink>
          </ListItem>
          <ListItem>
            <ListItemLink href="#">About Us</ListItemLink>
          </ListItem>
          <ListItem>
            <ListItemLink href="#">Careers</ListItemLink>
          </ListItem>
          <ListItem>
            <ListItemLink href="#" ref={lastItemRef} onKeyDown={handleLastItemKeyDown} id="as">Community</ListItemLink>
          </ListItem>
        </List>
      </Nav>
    </Container>
  );
}

export default Dialog;