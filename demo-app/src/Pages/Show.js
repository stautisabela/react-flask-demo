import React,{useState, useEffect} from 'react';
import { Delete } from '../Components/Delete/delete';
import {
    useParams,
    Link
} from "react-router-dom";

export const Show = () => {
    const { id } = useParams()
    const [comment, setComment] = useState([])

    useEffect(()=> {
        fetch(`/api/${id}`)
        .then(response => response.json())
        .then(data => setComment(data))
    }, [id])

    return(
        <div>
            {comment.length > 0 && comment.map(data => <div>{data.content}</div>)}
            <Delete id={id}/>
            <hr></hr>
            <Link to='/'>Back to comments</Link>
        </div>
    )
}