import logo from './size_xxl.webp';
import download from "./126149333_380527723199057_624273093093858616_n.mp4";
import './App.css';
import Video from "./videoPlayer.js";
import "./main.css"
import tiktok from "./clipart1518017.png"
function App() {
  return (
    <div className="App">
     {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <video src={download} controls/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className="badge">
          <h1>Tik-Tok</h1>
          <img src={tiktok} className="logotik"/>
          </div>
    
    <div className = "app_videos">
    <Video audioone="sunnyelone" channelone="@tarushjreddy" descriptionone="Always aim to the sky in the world.."/>
    <Video />
    <Video />
    <Video />


    </div>
      {/* </header> */}
    </div>
  );
}

export default App;
