 import { Header } from './components/Header'
 import { Button } from './components/Button'
import { useState } from 'react'

function App() {
   
  const [isLoading, setIsLoading] = useState(false)

  
  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      alert('Action terminée.')
    }, 2000)
  }

  return (
    <>
       <Header />
       <Button label="click me"  onClick={handleClick} isLoading={isLoading} style={{ backgorundColor: 'green' }} />
    </>
  )
}

export default App
