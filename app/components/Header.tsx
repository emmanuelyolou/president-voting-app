import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className=''>
        <nav className="flex justify-between container mx-auto py-4">
        <Link className='font-bold' href="/">Election IDSI</Link>
        <ul className="flex gap-4">
            <li className=""><Link href="/" className="">Accueil</Link></li>
            <li className=""><Link href="#" className="">Les candidats</Link></li>
            <li className=""><Link href="/login" className="">Se connecter</Link></li>
        </ul>
        </nav>
    </header>
  )
}
