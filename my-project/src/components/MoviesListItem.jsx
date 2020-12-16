import React from 'react'

function MoviesListItem(props) {
//    let itemList = props.movie.map((m)=>{
//        return m
//    })
const movies =[
    {
      Title: "The Amazing Spiderman T4 Premiere Special",
      Year: 2012,
      imdbID: "tt2233044",
    },
    { Title: "Amazing Spiderman Syndrome", Year: 2012, imdbID: "tt2586634" },
    { Title: "The Road to Ironman", Year: 2012, imdbID: "tt1712051" },
    { Title: "Ironman Triathlon Special", Year: 2012, imdbID: "tt2622884" },
    { Title: "Boundless Maze", Year: 2012, imdbID: "tt2260208" },
    { Title: "Maze", Year: 2012, imdbID: "tt2290460" },
    {
      Title: "Harry Dean Stanton: Partly Fiction",
      Year: 2012,
      imdbID: "tt2372776",
    },
    {
      Title: "Harry Potter and the Ten Years Later",
      Year: 2012,
      imdbID: "tt2335590",
    },
    {
      Title: "Ain't It Cool with Harry Knowles",
      Year: 2012,
      imdbID: "tt2189892",
    },
    {
      Title: "Creating the World of Harry Potter, Part 8: Growing Up",
      Year: 2012,
      imdbID: "tt2339417",
    },
  ]

//   fetch('https://swapi.dev/api/planets/')
//     .then((res)=>{
//        res.json().then((data)=>{
//            for(let planet of data.results){
//             console.log(planet.name)
//            }
//        })
//     })
  let itemlist = movies.map((movie)=>{
      return movie.Title
  }).filter((val,idx)=>{
     return idx < 3
  }).map(n => <li>{n}</li>)
console.log(itemlist)
    return (
        <div>
            <ol>{itemlist}</ol>
        </div>
    )
}

export default MoviesListItem
