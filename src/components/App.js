import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../App.css";
import Sidebar from "./Sidebar";
import BoardContent from "./BoardContent";
import Header from "./Header";
import Welcome from "./Welcome";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

// Initial Data As Example
const initialData = [
  {
    name: "Roadmap",
    colums: [
      { status: "TODO", num: 2 },
      { status: "DOING", num: 1 },
      { status: "DONE", num: 6 },
    ],
    boardId: 1,
    active: false,
    sections: [
      {
        taskID: 1,
        status: "TODO",
        name: "Next.JS",
        description: "Bla Bla Bla Bla Bla Bla.......",
        subtasks: [
          { name: "build", checked: false },
          { name: "Bla Bla Bla", checked: false },
        ],
        numOfSubTasks: 0,
      },
      {
        taskID: 2,
        status: "TODO",
        name: "tailwind css",
        description: "Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla.......",
        subtasks: [{ name: "STart", checked: false }],
        numOfSubTasks: 0,
      },

      {
        taskID: 3,
        status: "DOING",
        name: "React",
        description: "Bla Bla Bla Bla Bla Bla.......",
        subtasks: [
          { name: "build", checked: true },
          { name: "Bla Bla Bla", checked: false },
        ],
        numOfSubTasks: 1,
      },

      {
        taskID: 4,
        status: "DONE",
        name: "HTML",
        description: "Bla Bla Bla Bla Bla Bla.......",
        subtasks: [
          { name: "build", checked: true },
          { name: "Bla Bla Bla", checked: true },
        ],
        numOfSubTasks: 2,
      },
      {
        taskID: 5,
        status: "DONE",
        name: "CSS",
        description: "Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla.......",
        subtasks: [
          { name: "build", checked: true },
          { name: "Bla Bla Bla", checked: true },
          { name: "build 2", checked: true },
          { name: "STart", checked: true },
        ],
        numOfSubTasks: 4,
      },
      {
        taskID: 6,
        status: "DONE",
        name: "JavaScript",
        description: "Bla Bla Bla Bla Bla Bla.......",
        subtasks: [
          { name: "build", checked: true },
          { name: "Bla Bla Bla", checked: true },
        ],
        numOfSubTasks: 2,
      },
      {
        taskID: 7,
        status: "DONE",
        name: "BootStrap 5",
        description: "Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla.......",
        subtasks: [
          { name: "build", checked: true },
          { name: "Bla Bla Bla", checked: true },
          { name: "STart", checked: true },
        ],
        numOfSubTasks: 3,
      },
      {
        taskID: 8,
        status: "DONE",
        name: "SASS",
        description: "Bla Bla Bla Bla Bla Bla.......",
        subtasks: [{ name: "build", checked: true }],
        numOfSubTasks: 1,
      },
      {
        taskID: 7,
        status: "DONE",
        name: "Typescript",
        description: "Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla Bla.......",
        subtasks: [
          { name: "build", checked: true },
          { name: "Bla Bla Bla", checked: true },
          { name: "STart", checked: true },
        ],
        numOfSubTasks: 3,
      },
    ],
  },
];

function App() {
  const [boards, setBoards] = useState(initialData);
  const [board, setBoard] = useState(boards[0]);
  const [boardName, setBoardName] = useState(boards[0]?.name);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showWelcom, setIsWelcom] = useState(true);
  const [showSideBar, setShowSideBar] = useState(false);

  // const isTablet = useMediaQuery({ maxWidth: 991 });
  const isPhone = useMediaQuery({ maxWidth: 767 });

  // useEffect(() => {
  //   async function getInitialData() {
  //     try {
  //       setIsLoading(true);
  //       setError("");
  //       // Get the data from API or Database here and store it in `response` variable
  //       const response = await fetch("http://localhost:8000/boards");
  //       if (!response.ok)
  //         throw new Error(`Something went wrong with fetching movies.`);
  //       setBoards([]);

  //       const data = await response.json();
  //       setError("");
  //       setBoards(data);
  //       setIsLoading(false);
  //     } catch (err) {
  //       if (err.name !== "AbortError") {
  //         setError(err.message);
  //       }
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
  //   getInitialData();
  // }, []);

  // Function For Delete Task By His Name And Description In The Board
  // function deleteTask(name, description, handleClose) {
  //   handleClose();
  //   const confirmed = window.confirm(
  //     "Are you sure you want to delete this task?"
  //   );
  //   if (confirmed) {
  //     setBoards((prevBoards) => {
  //       const updatedBoards = prevBoards.map((board) => {
  //         const updatedSections = board.sections?.map((section) => {
  //           const updatedTasks = section.section?.filter(
  //             (task) => task.name !== name
  //           );
  //           return { ...section, section: updatedTasks };
  //         });
  //         return { ...board, sections: updatedSections };
  //       });
  //       console.log(updatedBoards);
  //       return updatedBoards;
  //     });
  //   }
  // }
  function deleteTask(board, name, description, handleClose, confirm, status) {
    handleClose();
    const confirmed = window.confirm(confirm);
    if (confirmed) {
      setBoards((prevBoards) => {
        const updatedBoards = prevBoards.map((b) => {
          const taskIndex = b.sections?.findIndex(
            (task) => task.name === name && task.description === description
          );
          if (taskIndex !== -1 && board.name === b.name) {
            b.sections.splice(taskIndex, 1);
            // This for increase num of tasks in each board (e.g. TODO, DOING, ...)
            b.colums.map((colum) => {
              return colum.status === status
                ? (colum.num = colum.num - 1)
                : colum.num;
            });
          }
          return { ...b };
        });
        return updatedBoards;
      });
    }
  }

  // Function For Creat New Task In The Board
  function creatTask(e, name, description, status, subtasks, onClose) {
    onClose();
    e.preventDefault();
    setBoards(
      (boards) => [...boards],
      boards?.map(
        (board) =>
          // This for increase num of tasks in each board (e.g. TODO, DOING, ...)
          board.colums.map((colum) => {
            return colum.status === status && board.name === boardName
              ? (colum.num = colum.num + 1)
              : colum.num;
          }),
        board?.sections?.map((_, index) => {
          return board.name === boardName && index === 0
            ? board.sections.push({
                taskID: board.sections.length + 1,
                status: status,
                name: name,
                description: description,
                subtasks: subtasks,
              })
            : board.sections;
        })
      )
    );
  }

  // function creatTask(e, name, description, status, subtasks, onClose) {
  //   onClose();
  //   e.preventDefault();
  //   setBoards((boards) => {
  //     const updatedBoards = boards?.map((board) => {
  //       const updatedSections = board?.sections?.map((section) => {
  //         return board.name === boardName && section.status === status
  //           ? (section.section = [
  //               ...section.section,
  //               {
  //                 taskID: section.length + 1,
  //                 name: name,
  //                 description: description,
  //                 subtasks: subtasks,
  //               },
  //             ])
  //           : (section.section = [...section.section]);
  //       });
  //     });
  //   });
  // }
  // Function For Change The Task's Status (Todo, Doing, Done) In The Board
  function changeStatus(
    b,
    name,
    description,
    subtasks,
    oldStatus,
    newStatus,
    confirm
  ) {
    if (window.confirm(confirm)) {
      setBoards(
        (boards) => [...boards],
        boards?.map(
          (b) =>
            board.name === b.name &&
            // This for increase num of tasks in each board (e.g. TODO, DOING, ...)
            board.colums.map((colum) => {
              return colum.status === oldStatus
                ? (colum.num = colum.num - 1)
                : colum.status === newStatus
                ? (colum.num = colum.num + 1)
                : colum.num;
            }),
          board?.sections?.map((s) => {
            return s.name === name && s.description === description
              ? (s.status = newStatus)
              : s;
          })
        )
      );
    }
  }

  function handleCreatBoard(e, name, onClose) {
    e.preventDefault();
    const newBoard = {
      name: name,
      colums: [
        { status: "TODO", num: 0 },
        { status: "DOING", num: 0 },
        { status: "DONE", num: 0 },
      ],
      boardId: boards.length + 1,
      active: false,
      sections: [
        {
          // taskID: 1,
          // status: "TODO",
          // name: "e.g",
          // description: "It's Just Example",
          // subtasks: ["NAN"],
        },
      ],
    };
    setBoards((boards) => [...boards, newBoard]);
    onClose();
  }

  function deleteBoard(boardName) {
    const confirm = window.confirm("Are you sure to delete this board?");
    if (!confirm) return;
    boards?.map((board) => (board.active = false));
    setBoards((prevBoards) => prevBoards.filter((b) => b.name !== boardName));
    setBoard(null);
    setIsWelcom(true);
  }

  function checked(e, board, info, task) {
    setBoards(
      (boards) => [...boards],
      boards?.map((b) => {
        b.name === board.name &&
          b.sections.map((s) => {
            s.name === info.name &&
              s.subtasks.map((t) => {
                return t.name === task.name
                  ? ((t.checked = e.target.checked),
                    t.checked === true
                      ? (s.numOfSubTasks = s.numOfSubTasks + 1)
                      : (s.numOfSubTasks = s.numOfSubTasks - 1))
                  : t.checked;
              });
          });
      })
    );
  }

  return (
    <div className="App">
      {showSideBar || (
        <Sidebar
          boards={boards}
          setBoard={setBoard}
          handleCreatBoard={handleCreatBoard}
          deleteBoard={deleteBoard}
          setIsWelcom={setIsWelcom}
          showWelcom={showWelcom}
          errorMessage={error}
          isLoading={isLoading}
          isPhone={isPhone}
        />
      )}
      {isLoading && !showWelcom && <Loader />}
      {error && !showWelcom && <ErrorMessage message={error} />}
      {!isLoading && !error && !showWelcom && (
        <BoardContent
          board={board}
          handleChange={changeStatus}
          handleDelete={deleteTask}
          isPhone={isPhone}
          handleChecked={checked}
        >
          <Header
            board={board}
            setBoards={setBoards}
            handleCreat={creatTask}
            setBoardName={setBoardName}
            isPhone={isPhone}
            setShowSideBar={setShowSideBar}
            showSideBar={showSideBar}
          />
        </BoardContent>
      )}
      {showWelcom && (
        <Welcome
          isPhone={isPhone}
          setShowSideBar={setShowSideBar}
          showSideBar={showSideBar}
        />
      )}
    </div>
  );
}
export default App;
