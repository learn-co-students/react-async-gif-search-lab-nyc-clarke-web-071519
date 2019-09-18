import React, { Component } from 'react'

class GifList extends Component {

    render() {
        return (
            this.props.gifs.map( (gif) => {
                return <li key="gif.id"><img src={gif.images.original.url}></img></li>
            })
        )
    }

}

export default GifList