import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    render() {
        return this.props.songs.map(song => <div>{song.title}</div>)
    }
}

// @state is all the state in the store
const mapStateToProps = (state) => {
    // This object will show up as props in this component
    return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);