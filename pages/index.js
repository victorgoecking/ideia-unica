// import { useState } from 'react';
import Link from 'next/link'

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/sobre">
        <a>Acessar página Sobre</a>
      </Link>
    </div>
  )
}

// function Counter() {
//   const [counter, setCounter] = useState(1)

//   function addCounter() {
//     setCounter(counter + 1)
//   }

//   return (
//     <div>
//       <div>{counter}</div>
//       <button onClick={addCounter}>Add</button>
//     </div>
//   )
// }

export default Home