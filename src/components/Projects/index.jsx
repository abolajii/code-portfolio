import React, { useContext } from "react";

import Container from "../Container";
import { ThemeContext } from "../../context/ThemeContext";
import ss1 from "../../assets/ss1.jpg";
import ss10 from "../../assets/ss10.png";
import ss11 from "../../assets/ss11.png";
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
  gap: 20px;

  a {
    &.active {
      text-decoration: none !important;
      color: inherit;
      border: none !important;
      outline: none !important;
    }
  }

  @media (max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const NoHoverImage = styled.img`
  width: 100%;
  cursor: pointer;
  height: 100%;
  object-fit: cover;
  transition: transform 5s ease-in-out;

  &:hover {
    transform: scale(2);
  }
`;

const ProjectDetails = styled.div`
  padding: 20px 0;

  h2 {
    font-size: 20px;
  }
  .details {
    margin: 10px 0;
    &__text {
      font-size: 14px;
      line-height: 19px;
    }
  }

  .title {
    font-size: 15px;
    font-weight: bold;
  }

  .sub-title {
    margin: 5px 0;
    font-size: 13px;
  }
`;

const ViewProject = styled.button`
  outline: none;
  border: none;
  padding: 9px 19px;
  background: var(--btn-color);
  color: var(--white);
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 3px;
  margin-top: 10px;
  font-weight: bold;

  &:hover {
    box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.13);
  }
`;

const Projects = () => {
  const { isDark } = useContext(ThemeContext);

  const projects = [
    { id: 2, img: ss2 },
    { id: 3, img: ss3 },
    { id: 4, img: ss4 },
    { id: 5, img: ss5 },
    { id: 6, img: ss6 },
    { id: 7, img: ss9 },
    { id: 1, img: ss1 },
  ];

  return (
    <Container>
      <Inner className={isDark ? "dark" : "light"}>
        <Top>
          <Title>Create & Inspire. It's Dev AJ</Title>

          <TextDesc>
            Step into the creative realm with Dev AJ's 'Create & Inspire.'
            Unveil beautiful homes, stunning projects styles, and more within.
            This is what your work has been waiting for
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
            <div>
              <SingleProduct>
                <a
                  href="https://logisticsmanagerapp.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TabBrowser>
                    <Circle />
                    <Circle />
                    <Circle />
                  </TabBrowser>
                  <NoHoverImage src={ss11} />
                </a>
              </SingleProduct>
            </div>
            <ProjectDetails>
              <div>
                <h2>Logistics manager</h2>
              </div>
              <div>
                <div className="details">
                  <p className="details__text">
                    Revolutionize your logistics management with Logistics
                    Manager – the ultimate solution for seamless operations.
                    Experience unmatched convenience as you effortlessly create
                    single or multiple jobs, upload job details using Excel, and
                    manage expenses with ease. Gain valuable insights with
                    detailed daily, weekly, and monthly reports on your job
                    activity, returns, and expenses. Our user-friendly interface
                    empowers you to track the number of jobs, predict top
                    clients for repeat jobs, and even create backdated jobs with
                    full control. Stay on top of your business with activity
                    charts showcasing monthly trends. Need quick communication?
                    Send messages directly to clients. Transform your logistics
                    experience with file uploads, comprehensive reports, and
                    intuitive features. Elevate your business – simplify
                    logistics with Logistics Manager!
                  </p>
                </div>
              </div>
              <div>
                <div className="stacks">
                  <div className="title">Stack(s)</div>
                  <p className="sub-title">React, NodeJS, MongoDB</p>
                </div>
              </div>
              <ViewProject>
                <a
                  href="https://logisticsmanagerapp.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW SITE
                </a>
              </ViewProject>
            </ProjectDetails>
          </BottomGrid>
          <BottomGrid>
            <div>
              <a
                href="https://lovebirdz-app.web.app"
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
            </div>
            <ProjectDetails>
              <div>
                <h2>LoveBirdz dating application</h2>
              </div>
              <div>
                <div className="details">
                  <p className="details__text">
                    Embark on a journey of love with Lovebirdz, your premier
                    dating application designed for meaningful connections.
                    Whether you're in search of romance or eager to reconnect
                    with loved ones or colleagues, Lovebirdz offers a vibrant
                    space for forging relationships. With personalized profiles
                    and cutting-edge matching algorithms, Lovebirdz elevates
                    your online dating experience, making it a seamless quest
                    for genuine connections. Uncover the joy of discovering your
                    perfect match or rekindling connections on Lovebirdz, where
                    every interaction is an opportunity for love to blossom.
                    Join Lovebirdz today and let your heart guide you to
                    meaningful connections in the world of digital romance.
                  </p>
                </div>
              </div>
              <div>
                <div className="stacks">
                  <div className="title">Stack(s)</div>
                  <p className="sub-title">React, NodeJS, MongoDB, Firebase</p>
                </div>
              </div>
              <ViewProject>
                <a
                  href="https://lovebirdz-app.web.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW SITE
                </a>
              </ViewProject>
            </ProjectDetails>
          </BottomGrid>
          <BottomGrid>
            <div>
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
            </div>
            <ProjectDetails>
              <div>
                <h2>OneCard Nigeria</h2>
              </div>
              <div>
                <div className="details">
                  <p className="details__text">
                    Experience unparalleled convenience with OneCard – your
                    all-in-one solution for seamless airtime and data recharges,
                    TV subscriptions, electricity payments, and more. Life just
                    got easier as our robust technology empowers individuals and
                    businesses with easy, convenient, and extensive recharge and
                    payment solutions. Whether you're a verified individual or
                    business, unlock powerful capabilities for single recharges
                    starting from as low as N50 up to N50,000. Pay for scratch
                    cards, electricity bills, and TV subscriptions effortlessly.
                    Need to recharge for hundreds or thousands at once? Our bulk
                    recharge option makes it a breeze. Save time by storing your
                    frequently used numbers as beneficiaries for quick and easy
                    repeat transactions. With OneCard, scheduling and automating
                    your recharges or payments is just a click away. Enjoy the
                    freedom of comprehensive, hassle-free transactions with
                    OneCard – where life's transactions become a breeze.
                  </p>
                </div>
              </div>
              <div>
                <div className="stacks">
                  <div className="title">Stack(s)</div>
                  <p className="sub-title">React, NodeJS, MongoDB, Firebase</p>
                </div>
              </div>
              <ViewProject>
                <a
                  href="https://recharge.onecardnigeria.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  VIEW SITE
                </a>
              </ViewProject>
            </ProjectDetails>
          </BottomGrid>
        </OngoingProjects>
      </Inner>
    </Container>
  );
};

export default Projects;
