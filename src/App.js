import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";  


const toDoItems = [
  {
    chore: "Dog Poop",
    id: 1001,
    completed: false
  },
  {
    chore: "Take out trash",
    id: 1002,
    completed: false
  }
]

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      toDoItems: toDoItems
    };
  }

  // TOGGLE THE ITEM COMPLETED WHEN CLICKED
  toggleCompleted = itemId => {
    this.setState({
      toDoItems: this.state.toDoItems.map(item => {       
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  // ADD ITEM TO TO DO LIST
  addItem = itemName => {
    this.setState({
      toDoItems: [
        ...this.state.toDoItems,
        {
          chore: itemName,
          completed: false,
          id: Date.now()
        }
      ]
    });
  };

  // CLEAR COMPLETED ITEMS ON BUTTON PRESS
  clearCompleted = () => {
    this.setState({
      toDoItems: this.state.toDoItems.filter(item => {
        return !item.completed;
      })
    });
  };

  render() {
    return (
   
        <div className="container">
          <TodoForm addItem={this.addItem} />
          <h2> Welcome To Thomas' ToDo App</h2>
          <TodoList 
            className="toDoList"
            TodoList={this.state.toDoItems}
            toggleCompleted={this.toggleCompleted}
            clearCompleted={this.clearCompleted}
          />
        </div>
      
    );
  }
}

export default App;
