import react from 'react';

export const Card = ({ listOfComments })=> {
    return (
    <>
        {listOfComments.map(comment => {
            return(
                <ul>
                    <li>{comment.content}</li>
                </ul>
            )
        })}
    </>
    )
}