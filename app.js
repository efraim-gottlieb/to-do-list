import toDo from "./utils/toDoTools.js";
import input from "analiza-sync";
let choice;
const choices = {
  1: toDo.addToDo,
  2: toDo.displayToDoList,
  3: toDo.displayToDoByName,
  4: toDo.editToDoById,
  5: toDo.deleteToDo,
};

do {
  console.log('===== TODO =====\n');
  const menu = '1. add todo\n2. display todo list\n3. display Todo by name\n4.edid todo by id\n5.delete todo\n'
  console.log(menu);
  do {
    choice = input("Enter your choice ");
  } while (!Object.keys(choices).includes(choice));
  switch (choice) {
  case '1':
    toDo.addToDo(toDo.createToDo(input('Enter todo name '), input('Enter todo details ')))
    console.log('\ntodo added !')
    break;
  case '2':
    toDo.displayToDoList()
    break;
  case '3':
    console.log(toDo.displayToDoByName(input('Enter the the todo name to find ')))
    break
  case '4':
    toDo.editToDoById(input('Enter todo id to edit '))
    break
  case '5':
    toDo.deleteToDo(input('Enter todo id to delete '))
}
} while (choice !== "exit");