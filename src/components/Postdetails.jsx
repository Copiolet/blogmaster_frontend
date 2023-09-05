import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { useParams } from 'react-router-dom'


const Postdetails = () => {
    const [postInfo, setPostInfo] = useState(null)
    const { id } = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo)
                })
            })
    })

    if (!postInfo) return '';
    return (
        <div>
            <NavBar />
            <div className="container" style={{ justifyItems: 'center' }}>
                <div className="container" style={{wordWrap: 'break-word' }}>
                    <h1 className='container'>{postInfo.title}</h1>

                    <p>{postInfo.description}</p>
                </div>

            </div>
        </div>

    )
}

export default Postdetails