import styled from 'styled-components';
import { FaStore, FaUserAlt, FaEnvelope, FaImages, FaInstagram, FaYoutube, FaPinterest, FaFacebook } from 'react-icons/fa';

const HeaderWrapper = styled.header`
  text-align: center;
  padding: 50px 0;
  width: 100%;
  background-color: #000;
  color: white;

  @media screen and (max-width: 900px) {
    padding: 10px 0;
  }
`;

const Title = styled.h1`
  font-size: 2.9em;
  margin: 0;
  color: #ECF0F1;

  @media screen and (max-width: 375px) {
    font-size: 2em;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #BDC3C7;
`;

const Nav = styled.nav`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto; 
  white-space: nowrap; 
  @media screen and (max-width: 900px) {
    margin-top: 20px;
    padding: 10px;
  }
`;

const NavLink = styled.a`
  margin: 0 15px;
  text-decoration: none;
  color: #ECF0F1;
  font-size: 1.1em;
  transition: color 0.3s;

  &:hover {
    color: #3498DB;
  }

  @media screen and (max-width: 375px) {
    margin: 0 10px;
    font-size: 0.9em;
  }
`;

const IconWrapper = styled.span`
  margin-left: 8px;
`;

const SocialLinks = styled.div`
  margin-top: 1px;
  display: flex;
  margin-left: 200px;
  margin-bottom: 30px;
  justify-content: center;
`;

const SocialLink = styled.a`
  color: #ECF0F1;
  font-size: 1.5em;
  margin: 0 10px;
  transition: color 0.3s;

  &:hover {
    color: #3498DB;
  }
`;

const Header = () => (
  <HeaderWrapper>
        <SocialLinks>
      <SocialLink href="https://www.instagram.com/seuusuario" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </SocialLink>
      <SocialLink href="https://www.youtube.com/seuchannel" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </SocialLink>
      <SocialLink href="https://www.pinterest.com/seuusuario" target="_blank" rel="noopener noreferrer">
        <FaPinterest />
      </SocialLink>
      <SocialLink href="https://www.facebook.com/seuusuario" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </SocialLink>
    </SocialLinks>

    <Title>Galeria de Arte Leonardo</Title>
    <Subtitle>Pinturas e Quadros Únicos</Subtitle>

    <Nav>
      <NavLink href="#gallery">
        Galeria
        <IconWrapper><FaImages /></IconWrapper>
      </NavLink>
      <NavLink href="#about">
        Sobre o Artista
        <IconWrapper><FaUserAlt /></IconWrapper>
      </NavLink>
      <NavLink href="#contact">
        Contato
        <IconWrapper><FaEnvelope /></IconWrapper>
      </NavLink>
      <NavLink href="#store">
        Loja
        <IconWrapper><FaStore /></IconWrapper>
      </NavLink>
    </Nav>


  </HeaderWrapper>
);

export default Header;
