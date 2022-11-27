import styles from "./app.module.css";
import Header from "../header/header";
import Voting from "../voting/voting";
import Footer from "../footer/Footer";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Voting />
      </main>
      <Footer />
    </div>
  );
}

export default App;
