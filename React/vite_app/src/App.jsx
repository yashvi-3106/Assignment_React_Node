import Counter from "./Components/Counter"
import TodoList from "./Components/TodoList"
import ToggleText from "./Components/ToggleText"
import CharacterCounter from "./Components/CharacterCount"
import SearchFilter from "./Components/SearchFilter"
import UserList from "./Components/UserList"
import LoginForm from "./Components/LoginForm"
import Accordion from "./Components/Accordion"

function App() {
  return (
    <>
      <div>
        <Counter/>
        <TodoList/>
        <ToggleText/>
        <CharacterCounter/>
        <SearchFilter/>
        <UserList/>
        <LoginForm/>
        <Accordion/>
      </div>
     
    </>
  )
}

export default App
