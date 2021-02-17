import Link from 'next/link'

function Sobre() {
  return (
    <div>
      <h1>Sobre</h1>
      <Link href="/">
        <a>Acessar página Home</a>
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

export default Sobre