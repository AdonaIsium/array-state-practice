import { useState } from "react"
import "./app.css"

function App() {
  const [characters, setCharacters] = useState([
    "Kaladin",
    "Shallan",
    "Dalinar",
    "Jasnah",
    "Szeth",
  ])
  const [inputValue, setInputValue] = useState("")
  const [indexValue, setIndexValue] = useState("0")
  const [newCharacter, setNewCharacter] = useState("Nameless")
  const [oldName, setOldName] = useState("")
  const [newName, setNewName] = useState("")

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleIndexChange = (event) => {
    setIndexValue(event.target.value)
  }

  const handleCharacterChange = (event) => {
    setNewCharacter(event.target.value)
  }

  const handleOldName = (event) => {
    setOldName(event.target.value)
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  function removeCharacter() {
    setCharacters((prevCharacters) =>
      prevCharacters.slice(0, prevCharacters.length - 1)
    )
  }
  function removeSpecificCharacter(name) {
    setCharacters((prevCharacters) =>
      prevCharacters.filter((character) => character !== name)
    )
  }
  function addSpecificCharacter(name) {
    setCharacters((prevCharacters) => [name, ...prevCharacters])
  }

  function addCharacterAtIndex(index, name) {
    setCharacters((prevCharacters) => {
      const newCharacters = [...prevCharacters]
      newCharacters.splice(index, 0, name)
      return newCharacters
    })
  }

  function updateCharacterName(name, newName) {
    setCharacters((prevCharacters) =>
      prevCharacters.map((character) =>
        character === name ? newName : character
      )
    )
  }

  function clearArray() {
    setCharacters([])
  }

  function resetArray() {
    setCharacters(["Kaladin", "Shallan", "Dalinar", "Jasnah", "Szeth"])
  }

  return (
    <div>
      <div className="characters-list">
        <div className="stormlight-header-container">
          <h1 className="stormlight-header">Stormlight Characters:</h1>
        </div>
        <br></br>
        <ul>
          {characters.map((character, index) => (
            <li key={index}>{character}</li>
          ))}
        </ul>
      </div>
      <br />
      <div className="clear-reset-container">
        <button className="button-reset" onClick={resetArray}>
          Reset Array
        </button>
        <button className="button-clear" onClick={clearArray}>
          Clear Array
        </button>
      </div>
      <br />
      <label>Add/Remove Specific Character:</label>
      <input type="text" value={inputValue} onChange={handleInputChange} />

      <button onClick={() => addSpecificCharacter(inputValue)}>Add</button>
      <button
        className="button-remove"
        onClick={() => removeSpecificCharacter(inputValue)}
      >
        Remove
      </button>

      <br />
      <br></br>
      <h3>Remove Character at Index</h3>
      <label>Enter Index:</label>
      <input type="number" value={indexValue} onChange={handleIndexChange} />
      <br />
      <label>Enter New Character:</label>
      <input
        type="text"
        value={newCharacter}
        onChange={handleCharacterChange}
      />
      <br />
      <button onClick={() => addCharacterAtIndex(indexValue, newCharacter)}>
        Add Character at Index {indexValue}
      </button>
      <br />
      <br />
      <h3>Update Character Name</h3>
      <label>Old Name:</label>
      <input type="text" value={oldName} onChange={handleOldName} />
      <br />
      <label>New Name:</label>
      <input type="text" value={newName} onChange={handleNewName} />
      <br />
      <button onClick={() => updateCharacterName(oldName, newName)}>
        Update Name{" "}
      </button>
    </div>
  )
}

export default App
