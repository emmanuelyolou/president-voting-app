import React from 'react'

export default function Login() {
  return (
    <div className="mt-10 w-full max-w-2xl mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
    border-slate-200 border py-16 rounded-xl">
        <div className="w-full max-w-md mx-auto">
            <h1>Connexion</h1>
            {/* USERNAME */}
            <div className="w-full mt-8">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900"
                placeholder='Ismael Silue'>
                    Nom utilisateur
                </label>
                <div className="mt-2">
                    <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="Nom d'utilisateur"
                        className=""
                    />
                </div>
            </div>
            {/* PASSWORD */}
            
            <div className="w-full mt-8">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Mot de Passe
                </label>
                <div className="mt-2">
                    <input
                        type="password"
                        name="username"
                        id="username"
                        autoComplete="Nom d'utilisateur"
                        className=""
                    />
                </div>
            </div>
            <button className="btn btn-primary mt-8">Connexion</button>
        </div>
    </div>
    
  )
}
