import "./styles.css";
import SideBar from "./components/Sidebar";
import Main from "./components/Main";
export default function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="main">
        <Main />
      </div>
      <div style={{ color: "blue" }}>@deepakgupta</div>
    </div>
  );
}
