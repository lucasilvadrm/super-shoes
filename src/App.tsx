import styled from "styled-components";
import Carousel from "./components/Carousel";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { GlobalStyles } from "./styles/globalStyles";

export const Buttons = styled.div`
  width: 100%;
  text-align: center;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Logo>
          <img src="/static/images/super-shoes.png" alt="super-shoes logo" />
        </Logo>
        <Carousel />
      </Container>
    </>
  );
}

export default App;
