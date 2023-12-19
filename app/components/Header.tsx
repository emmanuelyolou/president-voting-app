'use client'
import Link from 'next/link'
import React from 'react'
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@nextui-org/navbar";
import { Button } from '@nextui-org/button';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Accueil",
        "Les candidats",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

  
  return (
    <header className=''>
        <nav className="flex justify-between container mx-auto py-4">
            <Link className='font-bold' href="/">Election IDSI</Link>
            {/* <ul className="flex gap-4">
                <li className=""><Link href="/" className="">Accueil</Link></li>
                <li className=""><Link href="#" className="">Les candidats</Link></li>
                <li className=""><Link href="/login" className="">Se connecter</Link></li>
            </ul> */}
        </nav>

        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
                />
                <NavbarBrand>
                {/* <AcmeLogo /> */}
                <p className="font-bold text-inherit">ACME</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                <Link color="foreground" href="#">
                    Features
                </Link>
                </NavbarItem>
                <NavbarItem isActive>
                <Link href="#" aria-current="page">
                    Customers
                </Link>
                </NavbarItem>
            </NavbarContent>
      </Navbar>
    </header>
  )
}
