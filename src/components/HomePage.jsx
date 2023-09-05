import Axios from "axios"
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css"
import { Link } from "react-router-dom"


const HomePage = () => {

    const [data, setdata] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const cardsPerPage = 5; // Adjust this number as needed
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    const visibleData = data.slice(startIndex, endIndex);

    const cardno = data.length
    useEffect(() => {
        Axios.get("https://blogmaster.onrender.com/").then((data) => { setdata(data.data.reverse()) })
    })

    let summary;
    return (
        <div>
            <NavBar />
            <section>

                {visibleData.map((e) => {
                    let desc = e.description
                    if (desc) {
                        summary = desc.slice(0, 150) + "..."
                    }
                    return (
                        <div id="parent" key={cardno}>
                            <div className="card" id="child" style={{ width: "18rem", margin: "4rem" }}>
                                <div className="card-body">
                                    <p>writer: {e.email}</p>
                                    <h5 className="card-title">{e.title}</h5>
                                    <p className="card-text">{summary}</p>
                                    <Link to={`/${e._id}`} className="btn btn-primary">Read More</Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>
            <div className="pagination-buttons" style={{ textAlign: 'center' }}>
                <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="btn btn-primary"
                >
                    Previous Page
                </button>
                <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={endIndex >= data.length}
                    className="btn btn-primary"
                >
                    Next Page
                </button>
            </div>

            <div>
                <p style={{ textAlign: "center" }}>copyright (c)2023 APN-creations</p>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin="anonymous"></script>
            <script
                src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                crossOrigin="anonymous"></script>

            <script
                src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossOrigin="anonymous"></script>
        </div>

    )
}

export default HomePage
