 import React, {useState} from "react";
import "./videoControls.css"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

function VideoControls({commentval, likeval, sharval}) {
    const [liked , setLiked]= useState(true);
    const [comment , setComment]= useState(false);

    return (
        <div className = "videocontrols">
        <div className="videocontrols_btn">
        {liked ? ( <FavoriteBorderIcon
             fontSize = "large"
        onClick = {(e) =>setLiked(false)}/>
          
        
       )   : (<FavoriteIcon
        fontSize = "large"
                onClick = {(e) =>setLiked(true)}/>  )
                }
         {liked? likeval -  1: likeval}
       
    
        </div>
        <div className="videocontrols_btn">
        
         {comment ? ( <ChatBubbleIcon
             fontSize = "large"
        onClick = {(e) =>setComment(false)}/>
          
        
       )   : (<ChatBubbleOutlineIcon
        fontSize = "large"
                onClick = {(e) =>setComment(true)}/>  )
                }
        
 
        {commentval}
        </div>
        <div className="videocontrols_btn">
        <ShareIcon
        
         fontSize = "large"/>
        {sharval}
        </div>
        </div>


    );

}
export default VideoControls;