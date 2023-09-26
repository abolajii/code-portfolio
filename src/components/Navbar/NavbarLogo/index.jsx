import styled from "styled-components";
import { keyframes } from "styled-components";

const bounce = keyframes`
0%,100% {
transform: translate(-50%, 0px);
}
70% {
    transform: translate(-50%, -10px);

}
`;

const Container = styled.div`
  display: flex;
`;

const Text = styled.div`
  font-size: 19px;
  margin: 0 1px;
  color: #f3f0d7;
`;

const RedText = styled(Text)`
  color: var(--btn-color);
`;

const RelativeText = styled(Text)`
  position: relative;
`;

const RedDot = styled.div`
  height: 6.5px;
  width: 6.5px;
  background: var(--btn-color);
  position: absolute;
  top: -5px;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, 0);

  animation: ${bounce} 2s ease infinite;
`;

const NavbarLogo = () => {
  return (
    <Container>
      <Text>A</Text>
      <Text>B</Text>
      <RedText>O</RedText>
      <Text>L</Text>
      <Text>A</Text>
      <Text>J</Text>
      <RelativeText>
        <RedDot />I
      </RelativeText>
    </Container>
  );
};

export default NavbarLogo;
