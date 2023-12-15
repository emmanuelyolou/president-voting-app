import Link from "next/link";

export default function Home() {
  return (
    <main>
        <header className='flex justify-between container mx-auto py-4'>
            <li className="font-bold">Election IDSI</li>

            <ul className="flex gap-4">
                <li className=""><Link href="" className="">Accueil</Link></li>
                <li className=""><Link href="#" className="">Les candidats</Link></li>
                <li className=""><Link href="#" className="">Se connecter</Link></li>
            </ul>
        </header>

        <div className="container mx-auto mt-7 px-8">
          
          <div className="flex">
            {/* -- MAIN HERO LEFT PART -- */}
            <div className="w-full">
              <div className="h-full flex flex-col justify-center gap-4">
                {/* HERO TEXT CONTENT */}
                <h1 className="">
                  ELECTION PRESIDENT IDSI
                </h1>
                <p className="text-slate-600 text-3xl font-medium mt-3">
                  La 7e promotion de l’IDSI lance le début des élections de son nouveau président.
                </p>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <button className="btn btn-primary">Voter</button>
                  <button className="btn btn-primary--outlined">Résultats</button>
                </div>
              </div>
            </div>


            {/* -- MAIN HERO RIGHT PART */}
            <div className="w-full max-w-md">
              <img className="w-full" src="images/Sitting-hero.png" alt="" />
            </div>
          </div>
        </div>
    </main>
  )
}
