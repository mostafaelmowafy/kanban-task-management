import React, { useState } from "react";
import styles from "../creatBoard.module.css";

const CreatBoard = ({ onClose, handleCreatBoard }) => {
  const [name, setName] = useState("");

  return (
    <div className={styles.form_overlay}>
      <form className={styles.newTask}>
        <h3>Add New Board</h3>
        <label>Name Of Board *</label>
        <input
          type="text"
          name="name"
          placeholder="Type Board's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        {name ? (
          <button
            className={styles.creat}
            onClick={(e) => handleCreatBoard(e, name, onClose)}
          >
            Creat Board
          </button>
        ) : (
          <button
            className={styles.disabled}
            disabled
            onClick={(e) => handleCreatBoard(e, name, onClose)}
          >
            Creat Board
          </button>
        )}

        <br />
        <button className={styles.close} onClick={onClose}>
          Close
        </button>
      </form>
    </div>
  );
};

export default CreatBoard;
