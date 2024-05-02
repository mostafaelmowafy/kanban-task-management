import React, { useState } from "react";
import styles from "../creatTask.module.css";

const CreatTask = ({ onClose, handleCreat }) => {
  // const [start, setStart] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subtask, setSubtask] = useState();
  const [subtasks, setSubtasks] = useState([]);
  const [numTasks, setNumTasks] = useState(2);
  const [status, setStatus] = useState("TODO");
  const emptyArray = new Array(numTasks).fill(undefined);

  function addSubtask(e) {
    e.preventDefault();
    setNumTasks((num) => num + 1);
    console.log(numTasks);
  }

  function removeSubtask(index) {
    setSubtasks((currentSubtasks) =>
      currentSubtasks.filter((_, i) => i !== index)
    );

    emptyArray.filter((_, i) => i !== index);

    setNumTasks((num) => num - 1);
  }

  return (
    <div className={styles.form_overlay}>
      <form className={styles.newTask}>
        <h4>Add New Task</h4>
        <div className={styles.top}>
          <label>Title</label>
          <input
            type="text"
            name="name"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <label>Description</label>
          <textarea
            name="description"
            cols="40"
            rows="5"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className={styles.bottom}>
          <label>Subtasks</label>
          {emptyArray.map((num, index) => {
            return (
              <>
                <input
                  key={index}
                  type="text"
                  name="subtasks"
                  placeholder="Subtask Name"
                  value={subtasks[index]}
                  onChange={(e) => setSubtask(e.target.value)}
                  onBlur={(e) =>
                    setSubtasks((subtasks) => [...subtasks, subtask])
                  }
                />
                <span onClick={() => removeSubtask(index)}>X</span>
                <br />
              </>
            );
          })}
          <button className={styles.add} onClick={(e) => addSubtask(e)}>
            +Add New Subtask
          </button>
          <br />
          <label>Status</label>
          <select
            name="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>TODO</option>
            <option>DOING</option>
            <option>DONE</option>
          </select>
        </div>
        <button
          className={styles.creat}
          onClick={(e) =>
            handleCreat(e, title, description, status, subtasks, onClose)
          }
        >
          CreatTask
        </button>
        <button className={styles.close} onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default CreatTask;
