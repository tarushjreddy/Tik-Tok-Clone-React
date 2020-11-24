import logo from './size_xxl.webp';
import download from "./126149333_380527723199057_624273093093858616_n.mp4";
import './App.css';
// import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
import Video from "./videoPlayer.js";
import sourceone from "./125801226_2816222455276761_518569631384428102_n.mp4";
import sourcetwo from "./126149333_380527723199057_624273093093858616_n.mp4";
import sourcethree from "./125296265_227544382130727_8445571257324059465_n.mp4";
import sourcefour from "./126339744_178648170604395_6265059897814242327_n.mp4";
import sourcefive from "./126453476_1048323435641886_3788788449842839718_n.mp4";
import sourcesix from "./126622213_410541527037977_8667985833898282608_n.mp4";

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
          <div className="tarush" fontFamily="'Poppins', sans-serif;"><h6>A Project Developed by Tarush.</h6></div>
          </div>
    
    <div className = "app_videos">
    <Video audioone="original" channelone="@tarushjreddy" descriptionone="try if u can.." likevalone={1002} commentvalone={4000} sharevalone={1000} source={sourcethree}/>
    <Video audioone="original" channelone="@shrivathsap" descriptionone="Always aim to the sky in the world.." likevalone={90} commentvalone={40} sharevalone={100} source={sourcetwo}/>
    <Video audioone="original" channelone="@vindokumar" descriptionone="Happy diwali.." likevalone={3000} commentvalone={40} sharevalone={100} source={sourceone}/>
    <Video audioone="original" channelone="@userone" descriptionone="gta five.." likevalone={900} commentvalone={40} sharevalone={100} source={sourcefour}/>
    <Video audioone="original" channelone="@userthree" descriptionone="bb 13.." likevalone={40} commentvalone={40} sharevalone={100} source={sourcefive}/>
    <Video audioone="original" channelone="@userfive" descriptionone="Always aim to the sky in the world.." likevalone={90} commentvalone={40} sharevalone={100} source={sourcesix}/>
    <Video />
    <Video />
    <Video />


    </div>
      {/* </header> */}
    </div>
  );
}

export default App;
