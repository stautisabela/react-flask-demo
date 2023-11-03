import React from 'react';
import {Link} from "react-router-dom"

export const Card = ({ listOfComments })=> {
    return (
    <>
        {listOfComments.map(comment => {
            return(
                <ul key={comment.id}>
                    <li>
                        <Link to={`${comment.id}`}>{comment.content}</Link>
                    </li>
                </ul>
            )
        })}
    </>
    )
}