import React,{useEffect, useState} from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY,  imageURL} from '../../constents/constants'

export default function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState([])
    useEffect(()=> {
        axios.get(props.url).then(response =>{
            setMovies(response.data.results)
        }).catch(err=>{
            alert('Network error')
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        },
      };

      const handlleMovie = (id) => {
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response =>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }else{
                console.log('Array empty');
            }
        })

      }
  
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movies.map((obj)=>
            <img onClick={()=>handlleMovie(obj.id)} className={props.isSize?'smallPoster':'poster'} alt='poster' src={`${imageURL+obj.backdrop_path}`}></img>
        )}
      </div>
    {urlId && <YouTube opts={opts} videoId={urlId.key}/> }
    </div>
  )
}
