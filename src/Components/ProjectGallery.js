import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Animação de fade in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Estilizando a galeria
const GalleryWrapper = styled.section`
  padding: 60px 20px;
  background-color: #1A1A1D;
`;

const GalleryTitle = styled.h2`
  text-align: start;
  margin-bottom: 80px;
  margin-left: 50px;
  font-size: 2.2em;
  color: #ffffff;
  animation: ${fadeIn} 1s ease forwards;
`;

const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 100px;
  max-width: 1100px;
  margin: 0 auto;
`;

const Project = styled.div`
  background: #1A1A1D;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  border-radius: 30px 0px 30px 0px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgb(255, 255, 255);
  transition: box-shadow 0.3s, transform 0.3s;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${(props) => props.index * 0.1}s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(255, 255, 255, 0.7);
  }
`;

const ProjectImage = styled(LazyLoadImage)`
  width: 180px;
  height: 190px;
  margin: 20px auto;
  border: solid 2px white;
  margin-left: 65px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 20px;
  text-align: start;
`;

const ProjectTitle = styled.h3`
  font-size: 1.6em;
  color: #ffffff;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1em;
  color: #D3D3D3;
  margin-bottom: 20px;
`;

const ProjectButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 0.9em;
  color: #ffffff;
  background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  border-radius: 24px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  }
`;

const Modal = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  gap: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const ModalOverlay = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

// Dados atualizados com ícones de fantasmas e quadros
const projects = [
  {
    title: 'Paisagem Fantasmagórica',
    description: 'Uma paisagem fantasmagórica que mistura o surrealismo com elementos impressionistas.',
    image: 'https://cdn.pixabay.com/photo/2015/03/30/11/01/paintings-698290_1280.jpg',
    link: '#'
  },
  {
    title: 'Paisagem Fantasmagórica',
    description: 'Uma paisagem fantasmagórica que mistura o surrealismo com elementos impressionistas.',
    image: 'https://cdn.pixabay.com/photo/2014/10/29/19/15/graffiti-508272_1280.jpg',
    link: '#'
  },
  {
    title: 'Paisagem Fantasmagórica',
    description: 'Uma paisagem fantasmagórica que mistura o surrealismo com elementos impressionistas.',
    image: 'https://cdn.pixabay.com/photo/2015/07/12/18/42/pictures-842291_1280.jpg',
    link: '#'
  },
  {
    title: 'Paisagem Fantasmagórica',
    description: 'Uma paisagem fantasmagórica que mistura o surrealismo com elementos impressionistas.',
    image: 'https://cdn.pixabay.com/photo/2015/03/30/11/01/paintings-698290_1280.jpg',
    link: '#'
  },
  {
    title: 'Paisagem Fantasmagórica',
    description: 'Uma paisagem fantasmagórica que mistura o surrealismo com elementos impressionistas.',
    image: 'https://cdn.pixabay.com/photo/2015/03/30/11/01/paintings-698290_1280.jpg',
    link: '#'
  },
  {
    title: 'Paisagem Fantasmagórica',
    description: 'Uma paisagem fantasmagórica que mistura o surrealismo com elementos impressionistas.',
    image: 'https://cdn.pixabay.com/photo/2015/03/30/11/01/paintings-698290_1280.jpg',
    link: '#'
  },
  {
    title: 'Paisagem Fantasmagórica',
    description: 'Uma paisagem fantasmagórica que mistura o surrealismo com elementos impressionistas.',
    image: 'https://cdn.pixabay.com/photo/2015/07/12/19/26/pictures-842343_1280.jpg',
    link: '#'
  },
  {
    title: 'Paisagem Fantasmagórica',
    description: 'Uma paisagem fantasmagórica que mistura o surrealismo com elementos impressionistas.',
    image: 'https://cdn.pixabay.com/photo/2015/03/30/11/01/paintings-698290_1280.jpg',
    link: '#'
  },
  {
    title: 'Paisagem Fantasmagórica',
    description: 'Uma paisagem fantasmagórica que mistura o surrealismo com elementos impressionistas.',
    image: 'https://cdn.pixabay.com/photo/2015/03/30/11/01/paintings-698290_1280.jpg',
    link: '#'
  },

];

const ProjectGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <GalleryWrapper id="projects">
      <GalleryTitle>Galeria de Arte</GalleryTitle>
      <Projects>
        {projects.map((project, index) => (
          <Project key={index} index={index} onClick={() => openModal(project)}>
            <ProjectImage 
              src={project.image} 
              alt={project.title} 
              effect="blur"
            />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectButton href= 'https://wa.me/5511965531504' target="_blank" rel="noopener noreferrer">
                Entrar em Contato 
              </ProjectButton>
            </ProjectContent>
          </Project>
        ))}
      </Projects>

      {selectedProject && (
        <>
          <ModalOverlay isOpen={modalOpen} onClick={closeModal} />
          <Modal isOpen={modalOpen}>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <ProjectImage src={selectedProject} alt={selectedProject.title} effect="blur" />
            <ProjectButton href= 'https://wa.me/5511965531504' target="_blank" rel="noopener noreferrer">
            Entre em Contato
            </ProjectButton>
            <button onClick={closeModal}>Fechar</button>
          </Modal>
        </>
      )}
    </GalleryWrapper>
  );
};

export default ProjectGallery;
