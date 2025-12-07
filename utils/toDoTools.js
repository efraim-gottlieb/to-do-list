import { nanoid } from "nanoid";
import DB from "../data.js";

const createToDo = (name, details, status = "pending") => {
  return {
    ID: nanoid(6),
    date: new Date(),
    name,
    details,
    status,
  };
};

const addToDo = (toDo) => {
  DB.push(toDo)
}

const displayToDoList = () => {
  DB.forEach((toDo) => {
    console.log(toDo);
  });
};

let a = createToDo('fix door', 'buy new door and install them')
addToDo(a)
displayToDoList()