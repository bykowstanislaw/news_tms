import React,{useState,useReducer, useEffect} from "react"
import axios from 'axios'
import reducer from './reducer'

export default function Container(){
    const [title,setTitle]=useState([])
    const [descr,setDescr]=useState([])
    const initialState="general"
    const [state,dispatch]= useReducer(reducer,initialState)
    useEffect(
    ()=>{
        axios.get(`https://newsapi.org/v2/sources?category=${state}&language=en&apiKey=25fe98aa9572458698579c3af3d29ae4`)
        .then((data)=>{
            setTitle(data.data.sources.map((el)=>{
                return el.name                
            }))
            setDescr(data.data.sources.map((el)=>{
                return el.description
            }))
        })
    },
    [state]
    )

    return (
        <>  
         <nav className="menu">
            <button className="sliding-button" onClick={()=> dispatch({type:'general'})}>general</button>
            <button className="sliding-button" onClick={()=> dispatch({type:'health'})}>health</button>
            <button className="sliding-button" onClick={()=> dispatch({type:'science'})}>science</button>
            <button className="sliding-button" onClick={()=> dispatch({type:'entertainment'})}>entertainment</button>
            <button className="sliding-button" onClick={()=> dispatch({type:'sports'})}>sports</button>
            <button className="sliding-button" onClick={()=> dispatch({type:'technology'})}>technology</button>
            <button className="sliding-button" onClick={()=> dispatch({type:'business'})}>business</button>
        </nav>
        <div className='news'>
             <div className="box">
                 <div><b>{title[0]}</b></div>
                 <div>{descr[0]}</div>
             </div>
             <div className="box">
                 <div><b>{title[1]}</b></div>
                 <div>{descr[1]}</div>
             </div>
             <div className="box">
                 <div><b>{title[2]}</b></div>
                 <div>{descr[2]}</div>
             </div>
             <div className="box">
                 <div><b>{title[3]}</b></div>
                 <div>{descr[3]}</div>
             </div>
             <div className="box">
                 <div><b>{title[4]}</b></div>
                 <div>{descr[4]}</div>
             </div>
        </div> 
        </>
    )
}