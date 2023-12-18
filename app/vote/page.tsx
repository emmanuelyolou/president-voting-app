import React from 'react'
import VoteConfirmationModal from './components/VoteConfirmationModal'



export default function Vote
() {
  return (
    <main>
      <VoteConfirmationModal />
      <section className="container mx-auto px-4">
        <h1 className="mt-14">Choisissez votre Président</h1>
        <p className="text-slate-600 text-xl mt-5">
          Lequel de ces candidats correspond le plus à ce que vous attendez du Président de l’IDSI ?
        </p>

        
        {/* CANDIDATE VOTE CARD */}
        <div className="grid grid-cols-2 md:grid-cols-4 mt-14 gap-4 gap-y-8">
          {['man', 'woman', 'max', 'aiony'].map((item, index) => (
            <div key={index}>
              <div className="flex flex-col items-center rounded-3xl shadow-md overflow-hidden">
                <div className="w-full flex justify-center bg-gray-200">
                  <img src={`images/${item}.jpg`} alt="Candidat 1" className='h-60 bg-black'/>
                </div>
                <button className="btn btn-primary my-4"> Voter M. Tant</button>
              </div>
            </div>
          ))}
          
        </div>


      </section>
    </main>
  )
}
