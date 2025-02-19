'use client'
import SideBar from "./sidebar";
import { ContainerStyle, SideBarWrap, ContentWrap, StyledHr,} from "@/styles/styles";
import Header from "./header";
import { useState } from "react";

interface ContainerProps {
    children: React.ReactNode
}

export default function Container ({children}: ContainerProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen((prev) => !prev);
    };
   
    return (
        <>
        <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
       <ContainerStyle>
        <SideBarWrap $isOpen={isMenuOpen}>
        <SideBar toggleMenu={toggleMenu}/>
        </SideBarWrap>
        <StyledHr />
        <ContentWrap>
            {children}
        </ContentWrap>
       </ContainerStyle>
        </>
    )
}

