import React,{useState, useEffect} from 'react';
import {
    useParams
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
        </div>
    )
}