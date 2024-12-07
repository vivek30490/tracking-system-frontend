import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Global styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --index: calc(1vw + 1vh);
    --transition: cubic-bezier(.1, .7, 0, 1);
  }

  body {
    background-color: #282A36;
  }
`;

// Styled Components
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding-top: 60px; /* To avoid overlap with navbar */
`;

const Items = styled.div`
  display: flex;
  gap: 0.4rem;
  perspective: calc(var(--index) * 35);
`;

const Item = styled.div`
  position: relative;
  width: calc(var(--index) * 3);
  height: calc(var(--index) * 12);
  background-color: #222;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  filter: grayscale(1) brightness(0.5);
  transition: transform 1.25s var(--transition), filter 3s var(--transition), width 1.25s var(--transition);
  will-change: transform, filter, rotateY, width;

  &::before, &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 20px;
    right: calc(var(--index) * -1);
  }

  &::after {
    left: calc(var(--index) * -1);
  }

  /* Hover Effects */
  &:hover {
    filter: inherit;
    transform: translateZ(calc(var(--index) * 10));
  }

  /* Active Item Styles */
  &.active {
    filter: grayscale(0) brightness(1);
    transform: translateZ(calc(var(--index) * 10));
    z-index: 100;
    width: 28vw; /* Adjust size when active */
    margin: 0 0.45vw; /* Add spacing to active item */
  }
`;

const DescriptionContainer = styled.div`
  margin-left: 150px; /* Increased margin to move text further right */
  flex: 1;
  max-width: 400px;
  text-align: center;
`;

const Description = styled.div`
  font-size: 1.5rem;
  color: #fff;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
`;

// Navbar Styles
const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

const Logo = styled.div`
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555;
  }
`;

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    'https://cdn.hashnode.com/res/hashnode/image/upload/v1654769444288/BzOuxasRm.png?auto=compress,format&format=webp',
    'https://studybullet.com/wp-content/uploads/2022/11/Google-Professional-Cloud-Developer-Exam.jpg', 
    'https://images.credly.com/images/19c4e804-54fe-4857-b022-7cfd5520596c/image.png', 
    'https://4.bp.blogspot.com/-MaOKkgwsn0g/XA_5UGMmO1I/AAAAAAAAyk4/8ggpiUXX3IoV0I226ekWjsM0mE4Gade_QCLcBGAs/w1200-h630-p-k-no-nu/CSA.jpg',
    'https://i1.wp.com/build5nines.com/wp-content/uploads/2019/03/Microsoft_Certified_Azure_Fundamentals_Featured_Image.png',
  ];

  const descriptions = [
    "The AWS Certified Cloud Practitioner is a foundational-level certification that validates a basic understanding of AWS cloud concepts, services, security, and billing. It's ideal for individuals new to the cloud or those looking to broaden their cloud knowledge. This certification demonstrates a general understanding of AWS and can be a stepping stone to more advanced certifications.",
    "A Google Cloud Certified - Professional Cloud Architect is a highly skilled individual who can design, build, and operate robust, secure, and scalable Google Cloud Platform (GCP) solutions. This certification demonstrates a deep understanding of GCP services, best practices, and architectural patterns. GCP-ACE professionals are capable of addressing complex cloud challenges and driving digital transformation initiatives.",
    "A Red Hat Engineer is a certified professional skilled in managing and administering Red Hat Enterprise Linux systems. They possess expertise in system installation, configuration, troubleshooting, and automation using tools like Ansible. RHCE certification validates advanced skills in Linux system administration, making them valuable assets for organizations.",
    "The ServiceNow Certified Application Developer (CAD) certification validates a candidate's ability to design, develop, and implement custom applications on the ServiceNow platform. It certifies that individuals possess the skills and knowledge to build effective solutions that address business needs and enhance productivity.",
    "The Microsoft Azure Fundamentals certification (AZ-900) is a foundational-level certification that validates a basic understanding of cloud concepts and Microsoft Azure services. It covers core Azure services, security, privacy, compliance, trust, and Azure pricing and support. This certification is ideal for individuals who want to demonstrate a fundamental knowledge of cloud services and how Microsoft Azure delivers them.",
  ];

  const handleItemClick = (index) => {
    // Toggle active state. If the same item is clicked, remove the active state
    if (activeIndex === index) {
      setActiveIndex(null); // Remove the description if the same image is clicked
    } else {
      setActiveIndex(index); // Set the new active index
    }
  };

  return (
    <>
      <GlobalStyle />
      
      {/* Navbar */}
      <Navbar>
        <Logo>CertTrack</Logo>
        <NavLinks>
          <NavLink href="/">Home</NavLink>
          <NavLink href="#">Help Center</NavLink>
          <NavLink href="/login">Login / Sign Up</NavLink>
        </NavLinks>
      </Navbar>
      
      <Wrapper>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {/* Image Gallery */}
          <Items>
            {images.map((image, index) => (
              <Item
                key={index}
                className={activeIndex === index ? 'active' : ''}
                style={{ backgroundImage: `url(${image})` }}
                tabIndex={0}
                onClick={() => handleItemClick(index)}
              />
            ))}
          </Items>

          {/* Description */}
          {activeIndex !== null && (
            <DescriptionContainer>
              <Description>
                {descriptions[activeIndex]}
              </Description>
            </DescriptionContainer>
          )}
        </div>
      </Wrapper>
    </>
  );
};

export default Certifications;
