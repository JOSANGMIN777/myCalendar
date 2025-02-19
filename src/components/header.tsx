'use client'

import Image from "next/image"
import Link from "next/link"
import { HamburgerMenu, CloseButton } from "@/styles/styles"

interface HeaderProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}

export default function Header ({isMenuOpen, toggleMenu}: HeaderProps) {
    

    return (
        <>
        <Link href={'/'}>
        <Image
        src={'/ffg_logo.png'}
        alt="logo"
        width={300}
        height={60}
        priority={true}
        />
        </Link>
         {!isMenuOpen? 
        <HamburgerMenu onClick={toggleMenu}>☰</HamburgerMenu>
        :
         <CloseButton onClick={toggleMenu}>✖</CloseButton>
         }
        <hr />
        </>
    )
}