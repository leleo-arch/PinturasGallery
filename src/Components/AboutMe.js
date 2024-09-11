import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(21px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutWrapper = styled.section`
  padding: 60px 20px;
  background-color: #000;  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  animation: ${fadeIn} 1s ease forwards;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: #fff;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #fff;
  max-width: 800px;
  line-height: 1.6;
`;

const Button = styled.a`
  background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  width: 50%;
  border-radius: 25px;
  height: 50px;
  margin-left: 10px;
  color: white;
  font-size: 15px;
  margin-top: 10px;
  text-align: center;
  line-height: 50px;
  text-decoration: none;
  color: white;
  
  &:hover {
    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 80%, #945DD6 120%);
  }
`;

const ProfilePic = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const AboutMe = () => (
  <AboutWrapper id="about">
    <ProfilePic src='https://avatars.githubusercontent.com/u/157326171?v=4' alt="Minha foto de perfil" />
    <Title>Sobre Mim</Title>
    <Subtitle>
    um artista amador explorando o mundo das artes visuais, com foco em pinturas que evocam mistério e fantasia. Minhas obras são inspiradas por fantasmas e figuras etéreas, usando tintas acrílicas para criar atmosferas envolventes e cheias de emoção. Além disso, minhas criações têm influências do impressionismo, onde busco capturar a essência do momento e das emoções em cada pincelada. Cada quadro é uma nova jornada, uma expressão única da minha visão artística.
    </Subtitle>
    <Button href="https://trampos.co/leonardo-arch" download="Curriculo_Leonardo_Soares.pdf">Ver Meu Portfólio</Button>
  </AboutWrapper>
);

export default AboutMe;
