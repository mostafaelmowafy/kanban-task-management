import { useState } from "react";
import styles from "../sidebar.module.css";
import CreatBoard from "./CreatBoard";

function Sidebar({
  boards,
  setBoard,
  handleCreatBoard,
  deleteBoard,
  setIsWelcom,
  showWelcom,
  errorMessage,
  isLoading,
}) {
  const [showForm, setShowForm] = useState(false);

  function handleClick(board) {
    setIsWelcom(false);
    setBoard(board);
    boards?.map((board) => (board.active = false));
    board.active = !board?.active;
  }

  function handleClose() {
    setShowForm(false);
  }

  function handleClickToHome() {
    boards?.map((board) => (board.active = false));
    setIsWelcom(true);
  }

  return (
    <div className={styles.side_bar}>
      <h1 className={styles.side_bar_h1} onClick={handleClickToHome}>
        <img src={require("../assets/menu-bar.png")} alt="menu" />
        Kanban
      </h1>
      <span className={styles.all_boards}>ALL BOARDS ({boards?.length})</span>
      {boards?.map((board) => {
        return (
          <div className={styles.board}>
            <span
              key={board?.boardId}
              className={`${styles.boardName} ${
                board?.active && styles.active
              }`}
              onClick={() => handleClick(board)}
            >
              - {board?.name}{" "}
            </span>
            <span
              className={styles.delete}
              onClick={() => deleteBoard(board?.name)}
            >
              ❌
            </span>
          </div>
        );
      })}
      {errorMessage && showWelcom && (
        <span className={styles.error}>{errorMessage}</span>
      )}
      {isLoading && showWelcom && (
        <span className={styles.loading}>LOADING...</span>
      )}
      {!errorMessage
        ? !isLoading && (
            <span
              className={styles.creat_board}
              onClick={() => setShowForm(true)}
            >
              + Creat New Board
            </span>
          )
        : null}

      {showForm && (
        <CreatBoard onClose={handleClose} handleCreatBoard={handleCreatBoard} />
      )}
    </div>
  );
}

export default Sidebar;
