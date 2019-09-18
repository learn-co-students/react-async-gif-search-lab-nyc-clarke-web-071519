import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    searchForGifs = (searchText) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=dc6zaTOxFJmzC&rating=g`)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    gifs: [json.data[0],json.data[1],json.data[2]]
                })
            })
    }

    render() {
        return (
            <div>
                <GifSearch searchForGifs={this.searchForGifs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

}

export default GifListContainer