import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';

const VideoDetail = ({video}) => {

    if(!video) return <div>Loading...</div>;

    console.log(video.assets[4].url);

    const videoSrc = `${video.assets[4].url}`;
    const videoHeight = `${540}`;
    const videoWidth = `${960 - 105}`;

    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Paper elevation={6} style={{ height: '70%' }}>
                    <iframe allowFullScreen frameBorder="0" height={videoHeight}
                            width={videoWidth} title={"Video Player"}
                           src={videoSrc} style={{borderRadius: "10px"}}/>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={6} style={{ padding: '15px'}}>
                    <Typography variant={"h4"}>{video.metadata.title}</Typography>
                    <Typography variant={"subtitle2"}>{video.metadata.description}</Typography>
                </Paper>
            </Grid>
        </React.Fragment>
    )
};

export default VideoDetail;