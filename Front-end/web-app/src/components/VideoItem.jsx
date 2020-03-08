import React from "react";
import {Grid, Paper, Typography} from '@material-ui/core';


const VideoItem = ({video, onVideoSelect }) => {


    const videoThumbnail = video.thumbnails[0].url;
    const videoTitle = video.metadata.title;

    return(
        <Grid item xs={12}>
            <Grid item xs={6}>
                <Paper style={{display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => onVideoSelect(video)}>
                    <img style={{marginRight: '20px'}}
                         alt={"thumbnail"} src={videoThumbnail}/>
                </Paper>
            </Grid>

            <Grid item xs={6}>
                <Paper>
                    <Typography variant={"subtitle1"}><b>{videoTitle}</b></Typography>
                </Paper>
            </Grid>
            <hr/>
        </Grid>

    )
};

export default VideoItem;