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

    const handleFormSubmit = () => {
        fetch('/api/create', {
            method: 'POST',
            body: JSON.stringify({
                content: addComment
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
          .then(message => {
                console.log(message)
                setAddComment('')
                getLatestComments()
          })
    }

    const getLatestComments = () => {
        fetch('/api').then(response => {
            if(response.ok) {
                return response.json()
            }
        }).then(data => setComment(data))
    }

    return(
        <>
            <Form userInput={addComment} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit}/>
            <Card listOfComments={comment}/>
        </>
    )
}