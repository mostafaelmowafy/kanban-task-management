import { useState } from "react";
import styles from "../boardContent.module.css";
import SectionInfo from "./SectionInfo";

function BoardContent({
  board,
  children,
  handleDelete,
  handleChange,
  handleChecked,
}) {
  const [showInfo, setShowInfo] = useState(false);
  const [info, setInfo] = useState("");
  const [status, setStatus] = useState("");

  function handleClick(info, status) {
    setShowInfo(true);
    setInfo(info);
    setStatus(status);
    // console.log(board);
  }

  return (
    <>
      <div className={styles.main}>
        {children}
        <div className={styles.board_content}>
          {board?.colums?.map((c, index) => {
            return (
              <section key={index}>
                <h5 className={styles.status}>
                  <span></span> {c.status} ({c.num})
                </h5>
                {board?.sections?.map((task) => {
                  return (
                    c?.status === task?.status && (
                      <div
                        className={styles.box}
                        key={task?.taskId}
                        onClick={() => handleClick(task, c.status)}
                      >
                        <h4>{task?.name}</h4>
                        <p>
                          {task.numOfSubTasks} of {task?.subtasks.length}{" "}
                          subtasks
                        </p>
                      </div>
                    )
                  );
                })}
              </section>
            );
          })}
        </div>
      </div>
      {showInfo && (
        <SectionInfo
          board={board}
          info={info}
          status={status}
          setStatus={setStatus}
          setShowInfo={setShowInfo}
          handleDelete={handleDelete}
          handleChange={handleChange}
          handleChecked={handleChecked}
        />
      )}
    </>
  );
}

export default BoardContent;
