import React, {Component} from 'react';
import Api from './api/ignApi';
import { Grid, Paper } from '@material-ui/core';

import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

class App extends Component {

    state = {
        videos: [],
        selectedVideo: null,
    };

    componentDidMount() {
        this.handleSubmit();
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video} )
    };

    handleSubmit = async () => {
        const response = await Api.get('videos', {
            params: {
                startindex: '30',
                count: 5,
            }
        });

        console.log(response.data.data[0]);

        this.setState({videos: response.data.data,
            selectedVideo: response.data.data[0]});
    };

  render() {

        const { selectedVideo } = this.state;
        const { videos } = this.state;

    return (
        <Grid justify="center" container spacing={3}>
            <Grid item xs={11}>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Paper>xs=12</Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <VideoDetail video={selectedVideo}/>
                    </Grid>
                    <Grid item xs={4} container spacing={2}>
                        <Grid item xs={12}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper>Load More</Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
  }
}

export default App;
