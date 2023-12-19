'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import { Button } from '@nextui-org/button';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = {
        "Accueil": '/',
        "Candidats": '#',
        "Statistiques": '/stats',
    };

  
  return (
    <header className=''>
    <Navbar
        maxWidth='full'
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
        <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
            {/* <AcmeLogo /> */}
            <Link href="/" className="font-bold text-inherit">Election IDSI</Link>
            </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="start">
            <NavbarBrand>
            {/* <AcmeLogo /> */}
            <Link href="/" className="font-bold text-inherit">Election IDSI</Link>
            </NavbarBrand>
        </NavbarContent>

        <NavbarContent className='max-sm:hidden'>
            <NavbarItem>
                <Link color="foreground" href="#">
                    Candidats
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link href="#" aria-current="page">
                    Comité d&apos;Organisation
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link color="foreground" href="#">
                    Résultats
                </Link>
            </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
            {/* <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
            </NavbarItem> */}
            <NavbarItem>
            <Button as={Link} color="primary" href="login" variant="flat">
                Se connecter
            </Button>
            </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
            {Object.entries(menuItems).map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                className="w-full"
                href={item[1]}
                size="lg"
                >
                {item[0]}
                </Link>
            </NavbarMenuItem>
            ))}
        </NavbarMenu>
    </Navbar>
    </header>
  )
}
