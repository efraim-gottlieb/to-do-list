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

const displayToDoList = (sortBy = "date", ascending = true) => {
  let list = arrayTools.sortBy(DB, sortBy, ascending);
  DB.forEach((toDo) => {
    console.log(toDo);
  });
  return list;
};

const editToDoById = (id, details) => {
  const recordToEdit = DB.filter((toDo) => toDo.ID === id);
  if (!recordToEdit.length) {
    return "todo not found";
  }
  DB[DB.findIndex((toDo) => toDo.ID === id)].details = details;
  return "updated";
};

const deleteToDo = (id) => {
  if (DB.find((toDo) => toDo.ID === id)) {
    DB.splice(
      DB.findIndex((toDo) => toDo.ID === id),
      1
    );
    return "deleted";
  } else {
    return "todo not found";
  }
};

const displayToDoByName = (name) => {
  const recordToDisplay = DB.find((toDo) => toDo.name === name);
  if (recordToDisplay) {
    return recordToDisplay;
  } else {
    return "todo not found";
  }
};
export default {
  createToDo,
  addToDo,
  displayToDoList,
  editToDoById,
  deleteToDo,
  displayToDoByName,
};
