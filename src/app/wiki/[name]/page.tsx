import { getCharacters } from "../../services"

export default function Page() {

  let data = getCharacters().filter((character) => character.name == "Ban")
  
  
  console.log(data)
  return (
    <>
      <h1>hi</h1>
    </>
  )
}

