import React, {useState, useEffect} from 'react';
import { Card } from '../Components/Card/card'

export const CommentPage = ()=> {

    const [comment, setComment] = useState([])

    use/useEffect(() => {
        fetch ('./api').then(response => {
            if(response.ok) {
                return response.json()
            }
        }).then(data => console.log(data))
    },[])

    return(
        <>
            <Card/>
        </>
    )
}