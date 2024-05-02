import styles from "../Welcome.module.css";
function Welcome({ isPhone, setShowSideBar, showSideBar }) {
  return (
    <main className={styles.container}>
      <header>
        {isPhone && showSideBar && (
          <img src={require("../assets/menu-bar.png")} alt="menu" />
        )}
        <h2>
          Home
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
      </header>
      <div className={styles.welcome}>
        <section>
          <img
            className={styles.welcomeIcon}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADKElEQVR4nO2Yy29NURTGD0WJRwiatAMDAxIkhpUIE2bqlbYRCaMG8WhLlakmxcBjIPEHeEQaI4mxkpAIIpSi3hN0IkhKKKo/2c13ZafuOfvcfc6pe+V+yU2au3a/b313r73O2icI/ncAdUA38AX4rL/XBKUE4DDh6AxKaCcMBoF2oFqfA/qOktgZ4KqSbc8TO6hYd1DsAAaUbHWeWI1iAzG5JgKNwAWgT2fNnLmnQBewCZiUlZER+MatdeuBF7jxGmgoOiPAeOAoMKylvcBeYDEwDZgKLAKagR7L0AmgopiMHNGS78AuY8xhehvwTf9zMg0PcRMNjQPrtBPGxKoCNFdYZhp8c4+daFRcB/uZwns8dM3O5M5MpU/usRJ1xYGNCj32qXWV2X1xbPbJPVairjhwTqG2BNq7xXHRl8OZqCsOPFJoaQLtBeJ45cvhTNQVBz4pNDOB9mQ1C3Pwx/nyRCbqigMfFZqVQHuKOL76cjgTHaPSWlgMpXUmbNgsQLtZHF2+HM5ER8eBqpD2+yRB++1Js/3+FNmEkPhda4b6Y8as11Rr0OKhuyNXVqlMxEC/COeFxKus8zDaTJ26zg9gdQGaK61LW31iEyK9LMKmiDVRZjr1vZm3WqLKTOW00zJxPBUTIt9qjRqTCjVj+r/u/MMWTxuwBJiuUd6M9K3AQ+vMHYualH2MmOHvuchPO9ZG7cxaa4iMwkvTKFIzYAOotba7I3Cb6Q0xY36UeuC8utmArrp9uv42ZnbVHXW3yHWw/UEEgLlWmfTlu+//UwBbgF+q96ZSN9Oq5MzubCigzAqF4X8LXNEVeUYWZjokNui6wsrMHZKjP5MmAJySgHk3VZsBf4XeaDYA16Rlynp72kLm+XBWAh/McyFVgb/19ulsDgHL0iY389QlmXkHzE9VYBT0fszgQeKLVh7ySh3I3IBXk6qABfOMAd5IK/brpdjQmHFbAvdSF7AAHIozZXgDmJ1rL5kICMDyzH+wMTIyRzLvS91IhWSGSsYIcAu4mbXOWBgZQdY6sYXT5qNsJCbKOxICyqWVEOXSKsLSugFcz5qPlHXKKCOIj9+GgFohdB/quAAAAABJRU5ErkJggg=="
            alt="welcomeIcone"
          />
          <h2>Welcome In Your To Do List!</h2>
          <p>
            Developed By: <span>Mostafa El-Mowafy.</span>
          </p>
          <ul>
            <li>
              <a
                href="https://github.com/mostafaelmowafy"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/3d-fluency/94/github.png"
                  alt="github"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mostafa-elmowafy-7b015621b/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/3d-fluency/32/linkedin.png"
                  alt="linkedin"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/mostafa.elmowafy.35/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/3d-plastilina/69/facebook-new.png"
                  alt="facebook-new"
                />
              </a>
            </li>
            <li>
              <a
                href="mailto:mostafaelmowafy1@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  width="42"
                  height="42"
                  src="https://img.icons8.com/arcade/64/gmail-login.png"
                  alt="gmail-login"
                />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
export default Welcome;
