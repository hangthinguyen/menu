import styles from "./App.module.scss";
import MainContent from "./Components/MainContent/MainContent";

function App() {
  return (
    <div className={styles.App}>
      <h1 className={styles.Title}>Our Menu</h1>
      <div className={styles.underlineContainer}>
        <hr className={styles.underline} />
      </div>
      <MainContent />
    </div>
  );
}

export default App;
