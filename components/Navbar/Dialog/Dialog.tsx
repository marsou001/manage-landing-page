import styled from "styled-components";
import List from "./List/List";
import ListItem from "./ListItem/ListItem";
import Nav from "./Nav/Nav";
import ListItemLink from "./ListItemLink/ListItemLink";

const Container = styled.div`
  color: ${(props) => props.theme.colors.primary.darkBlue};
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
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

function Dialog() {
  return (
    <Container role="dialog" aria-modal="true">
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
            <ListItemLink href="#">Community</ListItemLink>
          </ListItem>
        </List>
      </Nav>
    </Container>
  );
}

export default Dialog;
