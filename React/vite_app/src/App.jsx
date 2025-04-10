import Counter from "./Components/Counter"
import TodoList from "./Components/TodoList"
import ToggleText from "./Components/ToggleText"
import CharacterCounter from "./Components/CharacterCount"
import SearchFilter from "./Components/SearchFilter"

function App() {
  return (
    <>
      <div>
        <Counter/>
        <TodoList/>
        <ToggleText/>
        <CharacterCounter/>
        <SearchFilter/>
      </div>
     
    </>
  )
}

export default App
