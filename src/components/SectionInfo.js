// import { useState } from "react";
import styles from "../sectionInfo.module.css";

const SectionInfo = ({
  board,
  info,
  status,
  setStatus,
  handleChange,
  handleDelete,
  setShowInfo,
  handleChecked,
}) => {
  // const [statue, setStatue] = useState(status);

  function handleClose() {
    setShowInfo(false);
  }

  function handleClick(e) {
    setStatus(e.target.value);
    handleChange(
      board,
      info.name,
      info.description,
      info.subtasks,
      status,
      e.target.value,
      "Are you sure you want to change this status"
    );
    handleClose();
  }
  function checked(e, board, info, task) {
    // task.checked = e.target.checked;
    handleChecked(e, board, info, task);
  }
  return (
    <div className={styles.section_info}>
      <section className={styles.info}>
        <h4>{info?.name}</h4>
        <p>{info?.description}</p>
        <br />
        <label>Subtasks ({info?.subtasks.length})</label>
        {info?.subtasks.map((task, index) => {
          return (
            <div className={styles.checkedbox} key={index}>
              <input
                type="checkbox"
                checked={task.checked}
                onChange={(e) => checked(e, board, info, task)}
              />
              {task.name}
              <br />
            </div>
          );
        })}
        <label>Status</label>
        <select name="status" value={status} onChange={(e) => handleClick(e)}>
          <option>TODO</option>
          <option>DOING</option>
          <option>DONE</option>
        </select>
        <div className={styles.buttons}>
          <button className={styles.ok} onClick={handleClose}>
            OK
          </button>
          <button
            className={styles.delete}
            onClick={() =>
              handleDelete(
                board,
                info?.name,
                info?.description,
                handleClose,
                "Are you sure you want to delete?",
                status
              )
            }
          >
            Delete
          </button>
        </div>
      </section>
    </div>
  );
};
export default SectionInfo;
