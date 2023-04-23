import React from "react";
import CategoryFilter from "./CategoryFilter";

function App() {
const [selectedCategory, setSelectedCategory] = useState("")
const handleDelete = (text) => {
  setTasks(tasks.filter(task => task.text !== text))
}
const handleSelectedCategory =(category) => {
  selectedCategory(category)
}
const filteredTasks = tasks.filter(task => task.category===selectedCategory||selectedCategory==="")
const addNewTask = (newTask) =>{
  setTasks([...tasks, newTask])
}


  // // replace 'false' with a state variable that can be toggled between true and false
  // // this will be used for the Dark Mode Toggle feature
  // const appClass = false ? "App dark" : "App light"

  return (
    <div className="App">
        <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handleSelectedCategory={handleSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES.filter(category => category !=="")} addNewTask={addNewTask}/>
      <TaskList tasks={filteredTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
