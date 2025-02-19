'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";
import { MenuItem} from "@/styles/styles";
import { TEXTS } from "@/styles/common";

interface SideBarProps {
    toggleMenu: () => void;
}

const SideBar = ({toggleMenu}: SideBarProps) => {
    const router = usePathname();

    const handleClick = () => {
        toggleMenu()
    }
    return (
        <>
            <ul>
                <Link href={'/calendar'}>
                    <MenuItem
                    onClick={handleClick} 
                    $isActive={router === '/calendar'}>
                    {TEXTS.CALENDAR}
                    </MenuItem>
                </Link>
                <Link href={'/todo'}>
                <MenuItem 
                onClick={handleClick} 
                $isActive={router === '/todo'}>{TEXTS.TODO}</MenuItem>
                </Link>
                <Link href={'/habbit'}>
                <MenuItem  
                onClick={toggleMenu}
                $isActive={router === '/habbit'}>{TEXTS.HABBIT}</MenuItem>
                </Link>
                <Link href={'/someday'}>
                <MenuItem 
                onClick={toggleMenu}
                $isActive={router === '/someday'}>{TEXTS.SOMEDAY}</MenuItem>
                </Link>
            </ul>
            <hr />
        </>
    );
}


export default SideBar;