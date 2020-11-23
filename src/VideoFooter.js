import React, {SvgIcon} from "react";
import "./videoFooter.css"
import  AlbumIcon from '@material-ui/icons/Album';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import Ticker from "react-ticker";

function VideoFooter({channel, description, audio}) {
    return (
        <div className = "videofooter">
<div className="finalFoot">
    <div className="userinformation">
    <h3>{channel}</h3>
    <p className="description">{description}</p>
    <div className="audioPart">
   <LibraryMusicIcon className="library"  />
        
<div className="tcontainer"><div className="ticker-wrap"><div className="ticker-move">
  <div className="ticker-item">The audio part of this video is {audio}.......</div>

</div></div></div>

   </div>
    </div>
     <img className = "recorder"src="https://static.thenounproject.com/png/934821-200.png"/>
   
    

    
</div>
</div>
    );

}
export default VideoFooter;