import React, { Component } from 'react'

class GifSearch extends Component {

    state = {
        searchText: ''
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.searchForGifs(this.state.searchText)
    }
    
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Search For Gifs</label>
                <input onChange={this.handleChange} name="searchText" type='text'></input>
                <button type="submit">Search</button>
            </form>

        )
    }

}

export default GifSearch