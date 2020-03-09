import React from "react";
import {Grid, Paper, Typography} from '@material-ui/core';


const VideoItem = ({video, onVideoSelect }) => {


    const videoThumbnail = video.thumbnails[0].url;
    const videoTitle = video.metadata.title;

    return(
        <Grid item xs={12}>
                <Paper style={{display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onVideoSelect(video)}>
                    <img style={{marginRight: '20px', borderRadius: '10%',}} height="86" width="153" alt={"thumbnail"} src={videoThumbnail}/>
                    <Typography variant={"body1"}>
                        <b>{videoTitle}</b>
                    </Typography>
                </Paper>
                <br/>
                <hr/>
        </Grid>

    )
};

export default VideoItem;