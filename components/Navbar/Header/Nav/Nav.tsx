import styled from "styled-components";
import List from "./List/List";
import ListItem from "./ListItem/ListItem";
import ListItemLink from "./ListItemLink/ListItemLink";

const Container = styled.nav`
  font-size: 0.8rem;
  display: none;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    display: initial;
  }
`;

function Nav() {
  return (
    <Container>
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
    </Container>
  );
}

export default Nav;
