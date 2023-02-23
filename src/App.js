import styles from "./App.module.scss";
import Categories from "./Components/Categories/Categories";
import MainContent from "./Components/MainContent/MainContent";

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.Title}>Our Menu</h1>
      <div className="underline"></div>
      <MainContent />
    </div>
  );
}

export default App;
