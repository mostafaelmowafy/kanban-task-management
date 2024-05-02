import { useState } from "react";
import styles from "../header.module.css";
import CreatTask from "./CreatTask";

function Header({
  board,
  setBoards,
  handleCreat,
  setBoardName,
  isPhone,
  setShowSideBar,
  showSideBar,
}) {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
    console.log(board?.name);
    setBoardName(board?.name);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <div className={styles.mainHeader}>
      <header>
        {board?.name && (
          <>
            <h2>
              {board?.name}{" "}
              {isPhone && (
                <img
                  onClick={() => setShowSideBar(!showSideBar)}
                  className={styles.downIcon}
                  width="20"
                  height="20"
                  src="https://img.icons8.com/office/30/expand-arrow--v1.png"
                  alt="expand-arrow--v1"
                />
              )}
            </h2>
            {isPhone ? (
              <button className={styles.add} onClick={handleShowForm}>
                +
              </button>
            ) : (
              <button onClick={handleShowForm}>+Add Task</button>
            )}
          </>
        )}
      </header>
      {showForm && (
        <CreatTask
          onClose={handleCloseForm}
          setBoards={setBoards}
          board={board}
          handleCreat={handleCreat}
        />
      )}
    </div>
  );
}

export default Header;
