import React, { Component } from 'react'
import MoviesListItem from './MoviesListItem'

 class MoviesList extends Component {
    state={
         
    }

  
    render() {
        
        return (
            <div>
                <h1>{this.state.movies.Title}</h1>
                <MoviesListItem/>
            </div>
            
        )
    }
}

export default MoviesList 
