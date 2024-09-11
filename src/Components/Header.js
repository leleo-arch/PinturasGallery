import styled from 'styled-components';
import { FaPaintBrush, FaPalette, FaStore, FaUserAlt, FaEnvelope, FaImages } from 'react-icons/fa';

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
  font-size: 2.5em;
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

const Header = () => (
  <HeaderWrapper>
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
      <NavLink href="#custom-orders">
        Pedidos Personalizados
        <IconWrapper><FaPaintBrush /></IconWrapper>
      </NavLink>
      <NavLink href="#events">
        Exposições
        <IconWrapper><FaPalette /></IconWrapper>
      </NavLink>
    </Nav>
  </HeaderWrapper>
);

export default Header;
