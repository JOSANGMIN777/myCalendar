import styled from "styled-components";



const ContainerStyle = styled.div`
  display: flex;
  height: 90vh;
  overflow: hidden;
`;

const SideBarWrap = styled.div<{$isOpen: boolean}>`
  width: 200px;
  background-color: #fff;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;

    transform: ${({ $isOpen }) => ($isOpen ? "translateX(0)" : "translateX(-100%)")};
    opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
    background-color: rgba(255, 255, 255, 0.95);
    z-index: 1000;
  }

`;


const ContentWrap = styled.div`
  flex: 1;
  background-color: #fff;

    @media (max-width: 768px) {
    width: 100%;
    transform: translateX(0);
  }

`;

const Modal = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
align-items: center;
justify-content: center;
background: rgba(0, 0, 0, 0.5);
z-index: 100
`;

const ModalContent = styled.div`
background: white;
padding: 20px 40px 30px 25px;
border-radius: 8px;

label {
  display: block;
  margin-bottom: 10px;

  input {
    display: block;
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
}

button {
  margin-right: 20px;
  margin-top: 10px;
  padding: 8px 12px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:last-child {
    background-color: #6c757d;
  }
}
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  margin-left: 10px
  
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  &:last-child {
    background-color: #6c757d;
  }
`;

const MenuItem = styled.li<{ $isActive?: boolean }>`
    padding: 10px;
    cursor: pointer;
    background-color: ${(props) => (props.$isActive ? 'skyblue' : 'transparent')}; 
    color: ${(props) => (props.$isActive ? 'white' : 'black')};
    &:hover {
        background-color: lightblue;
    }
    @media (max-width: 768px) {
      position: relative;
      bottom: -80px;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 30px 0;
      font-size: 40px;
    }
`;

const StyledHr = styled.hr`
  width: 1px;            
  height: 100vh;         
  background-color: #ddd; 
  border: none;        
  margin: 0; 
`;

const InitialPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 40px;
  line-height: 20px;
  

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled.button`  
  position: absolute;
  display: none;
  top: 15px;
  right: 20px;
  border: none;
  font-size: 40px;
  cursor: pointer;
  line-height: 35px;
  background: none;
  z-index: 10001;
  @media (max-width: 768px) {
    display: block;
  }
  
  `;


export {
  ContainerStyle,
  SideBarWrap,
  ContentWrap,
  Modal,
  ModalContent,
  Button,
  ButtonGroup,
  MenuItem,
  StyledHr,
  InitialPage,
  HamburgerMenu,
  CloseButton
}