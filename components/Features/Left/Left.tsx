import styled from 'styled-components';
import Header from './Header/Header';
import Paragraph from './Paragraph/Paragraph';

const Container = styled.div`
  text-align: center;
  @media screen and (min-width: ${(props) => props.theme.breakpoints?.sm}) {
    text-align: left;
  }
`;

function Left() {
  return (
    <Container>
      <Header>What's different about Manage?</Header> 
      <Paragraph>
        Manage provides all the functionality your team needs, without the complexity.
        Our software is tailor-made for modern digital product teams.
      </Paragraph>
    </Container>
  )
}

export default Left;