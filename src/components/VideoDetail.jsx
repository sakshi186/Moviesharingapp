import { Paper,Typography } from "@mui/material";
import React from "react";

const VideoDetail=( {video : {  id:{videoId}  ,  snippet:{title,channelTitle,description}}})=>{
        if(!videoId)
        return <div>Loading...</div>

        const videoSrc = `https://www.youtube.com/embed/${videoId}`

        return(
            <React.Fragment>
                <Paper elevation={6} styling={{height:"70%"}}>
                    <iframe
                      frameBorder="0"
                      height="100%"
                      width="100%"
                      title="Video Player"
                      src={videoSrc}
                    />
                </Paper>
                <Paper elevation={6} styling={{padding:"15px"}}>
                        <Typography variant="h4">
                            {title} - {channelTitle}
                        </Typography>
                        <Typography varaint="subtitle1">
                            {channelTitle}
                        </Typography>
                        <Typography varaint="subtitle2">
                            {description}
                        </Typography>
                </Paper>
            </React.Fragment>
        )
}

export default VideoDetail;