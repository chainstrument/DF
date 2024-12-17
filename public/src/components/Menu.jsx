import { useState } from "react"

const Menu = () => {

  const [isToggled, setIsToggled] = useState(false)

  const toggle = () => {
    setIsToggled(!isToggled)
 
  }

  return (
    <nav className="bg-gray-100 fixed w-full z-10 top-0 start-0">
        <div className="p-4 flex items-center justify-between flex-wrap">
            <a href="#">Ma Navbar</a>
            <div className="md:hidden">
                <button data-collapse-toggle="#main-nav" onClick={toggle}>
                    <span className="sr-only">Ouvrir le menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg> 
                </button>
            </div>
            <div className={`w-full md:block md:w-max ${isToggled ? 'block' : 'hidden'}`}id="main-nav">
                <ul className="p-4 mt-4 bg-gray-50 font-medium border border-gray-200 md:flex md:bg-transparent md:border-0 md:mt-0">
                    <li><a href="#" className="bg-blue-700 text-white block px-3 py-2">Accueil</a></li>
                    <li><a href="#"className="block px-3 py-2 md:hover:bg:blue-700 md:hover:text-white">Service</a></li>  
                    <li><a href="#" className="block px-3 py-2 md:hover:bg:blue-700 md:hover:text-white">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Menu