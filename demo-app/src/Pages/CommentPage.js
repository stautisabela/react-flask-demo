import React, {useState, useEffect} from 'react';
import { Card } from '../Components/Card/card'
import { Form } from '../Components/Form/form'

export const CommentPage = ()=> {

    const [comment, setComment] = useState([])
    const [addComment, setAddComment] = useState('')

    useEffect(() => {
        fetch ('./api').then(response => {
            if(response.ok) {
                return response.json()
            }
        }).then(data => setComment(data))
    },[])

    const handleFormChange = (inputValue) => {
        setAddComment(inputValue)
    }

    return(
        <>
            <Form userInput={addComment} onFormChange={handleFormChange}/>
            <Card listOfComments={comment}/>
        </>
    )
}