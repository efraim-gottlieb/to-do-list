import { nanoid } from "nanoid";
import arrayTools from "./arrayTools.js";
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
  DB.push(toDo);
};

const displayToDoList = (sortBy = "date", ascending=true) => {
  let list = arrayTools.sortBy(DB, sortBy, ascending);
  DB.forEach((toDo) => {
    console.log(toDo);
  });
  return list;
};

export default { createToDo, addToDo, displayToDoList };
