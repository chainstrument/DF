import React from 'react'
import { useState } from 'react'
import { Card } from './Card';


export const Header = () => {
    const [count, setCount] = useState(0);

  return (
    <div>
        <h1 className='text-4xl font-bold text-center underline'>
            Hello world
        </h1>
         <a href='#' onClick={() => setCount(count + 1)}>cliquez ici</a>

         <p> le compteur est {count}</p>

         <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4">
            <div className="shrink-0">
                <img className="size-12" src="/img/logo.svg" alt="ChitChat Logo" />
            </div>
            <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p className="text-slate-500">You have a new message!</p>
            </div>
        </div>
        <Card />
    </div>
  )
}
