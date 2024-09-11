import React from 'react';
import Header from './Components/Header';
import ProjectGallery from './Components/ProjectGallery';
import ContactForm from './Components/ContactForm';
import AboutMe from './Components/AboutMe';




import { GlobalStyle, Container } from './styles';

function App() {
  return (
    <Container className='App'>

      <GlobalStyle />
      <Header />
      <AboutMe/>
      <ProjectGallery />
      <ContactForm />
    </Container>
  );
}

export default App;