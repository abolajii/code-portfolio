import React, { useContext } from "react";

import Container from "../Container";
import { ThemeContext } from "../../context/ThemeContext";
import ss1 from "../../assets/ss1.jpg";
import ss10 from "../../assets/ss10.png";
import ss2 from "../../assets/ss2.jpg";
import ss3 from "../../assets/ss8.jpg";
import ss4 from "../../assets/ss4.jpg";
import ss5 from "../../assets/ss7.jpg";
import ss6 from "../../assets/ss6.jpg";
import ss9 from "../../assets/ss9.png";
import styled from "styled-components";

const Top = styled.div`
  padding: 50px 100px;
  overflow: hidden;
  @media (max-width: 984px) {
    padding: 20px;
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Title = styled.div`
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  color: var(--btn-color);
  margin-bottom: 20px;

  @media (max-width: 984px) {
    font-size: 39px;
  }
`;

const SmallTitle = styled(Title)`
  font-size: 30px;
  text-align: left;
  margin-top: 30px;
`;

const Inner = styled.div`
  transition: all 0.5s ease;
  &.dark {
    background: #222;
    color: var(--white);
  }

  &.light {
    background: var(--white);
    color: black;
  }
`;

const TextDesc = styled.div`
  text-align: center;
`;

const SingleProduct = styled.div`
  height: 40vh;
  margin: 20px 10px;
  border: 2px solid rgb(243, 242, 242);
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;

const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80%;
  margin: auto;
  @media (max-width: 984px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const OngoingProjects = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 40px;
`;

const TabBrowser = styled.div`
  height: 20px;
  background: rgb(243, 242, 242);
  display: flex;
  z-index: 2;
  position: sticky;
`;

const Circle = styled.div`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  margin: 3px;
  background: white;
`;

const Image = styled.img`
  width: 100%;
  transition: all 5s ease;
  &:hover {
    transform: translateY(-250px);
  }
`;
const BottomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const NoHoverImage = styled.img`
  width: 100%;
  cursor: pointer;
  height: 100%;
`;

const Projects = () => {
  const { isDark } = useContext(ThemeContext);

  const projects = [
    { id: 1, img: ss1 },
    { id: 2, img: ss2 },
    { id: 3, img: ss3 },
    { id: 4, img: ss4 },
    { id: 5, img: ss5 },
    { id: 6, img: ss6 },
    { id: 7, img: ss9 },
  ];

  return (
    <Container>
      <Inner className={isDark ? "dark" : "light"}>
        <Top>
          <Title>Create & Inspire. It's Dev BJ</Title>

          <TextDesc>
            Dev BJ is a creative portfolio that your work has been waiting for,
            Beautiful homes, stunning portfolio styles, and a whole lot more
            await inside
          </TextDesc>
        </Top>
        <Bottom>
          {projects.map((project) => {
            return (
              <SingleProduct key={project.id}>
                <TabBrowser>
                  <Circle />
                  <Circle />
                  <Circle />
                </TabBrowser>
                <Image src={project.img} />
              </SingleProduct>
            );
          })}
        </Bottom>
        <OngoingProjects>
          <SmallTitle>On going projects, you can preview</SmallTitle>
          <BottomGrid>
            <a
              href="https://lovebirdz-759c8.web.app"
              target="_blank"
              rel="noreferrer"
            >
              <SingleProduct>
                <TabBrowser>
                  <Circle />
                  <Circle />
                  <Circle />
                </TabBrowser>
                <NoHoverImage src={ss10} />
              </SingleProduct>
            </a>
            <a
              href="https://recharge.onecardnigeria.com"
              target="_blank"
              rel="noreferrer"
            >
              <SingleProduct>
                <TabBrowser>
                  <Circle />
                  <Circle />
                  <Circle />
                </TabBrowser>
                <NoHoverImage src={ss2} />
              </SingleProduct>
            </a>
          </BottomGrid>
        </OngoingProjects>
      </Inner>
    </Container>
  );
};

export default Projects;
