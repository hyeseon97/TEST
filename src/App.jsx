import logo from './logo.svg';
import styles from './App.module.css';
import after from "../src/assets/after.png";
import before from "../src/assets/before.png";

function App() {
  return (
    <div className={styles.App} style={{ width: '100%', height: '100vh' }}>
      {/* <img src={after} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
      <img src={before} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
}

export default App;
