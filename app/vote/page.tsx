import React from 'react'

export default function Vote
() {
  return (
    <main>
      <section className="container mx-auto px-4">
        <h1 className="mt-14">Choisissez votre Président</h1>
        <p className="text-slate-600 text-xl mt-5">
          Lequel de ces candidats correspond le plus à ce que vous attendez du Président de l’IDSI ?
        </p>

        
        {/* CANDIDATE VOTE CARD */}
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-14 gap-4">
          {[1,1,1,1].map((item, index) => (
            <div key={index}>
              <div className="flex flex-col items-center rounded-3xl shadow-md overflow-hidden">
                <img src="https://placehold.co/600x400" alt="Candidat 1" />
                <button className="btn btn-primary my-4"> Voter M. Tant</button>
              </div>
            </div>
          ))}
          
        </div>


      </section>
    </main>
  )
}
