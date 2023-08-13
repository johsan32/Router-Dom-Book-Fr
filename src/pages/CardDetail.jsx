import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import "./CardDetail.css";

const CardDetail = () => {
    const { productId } = useParams();
    const [detail, setDetail] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();


    const options = {
        method: "GET",
        url: "https://book-finder1.p.rapidapi.com/api/search",
        params: {
            lexile_min: "600",
            lexile_max: "800",
            results_per_page: "30",
            page: "30",
        },
        headers: {
            "X-RapidAPI-Key": "ea11628bc3msh9bce3efeff26503p1bb3e5jsn6a1ee7a21e4e",
            "X-RapidAPI-Host": "book-finder1.p.rapidapi.com",
        },
    };

    useEffect(() => {
        axios.request(options)
            .then((res) => {
                console.log(res.data.results);
                const book = [...res.data.results];
                console.log("book", book);
                const productDetail = book.find(
                    (item) => item.work_id == productId);
                if (productDetail) {
                    setDetail(productDetail);
                }
            })
            .catch((err) => {
                navigate ({state:err.response.status});
            });
    }, [productId]);

    if (!detail) return (<div className='text-center text-danger'>Looding...</div>);
    
    return (
        <div className="container">

            <div className="card ">
                <div className="row">
                    <div className="col-md-8  d-flex justify-content-between my-3">
                        <div className="card-info px-1  d-flex justify-content-between flex-column">
                            <h4 className="card-title text-center mt-2">{detail.title}</h4>
                            <p className="text-center leaad">{detail.authors}</p>
                            <p className="card-text"><span className="text-warning">Summary: </span> {detail.summary}</p>
                            <p className="card-text"><span className="text-warning">Category: </span>{detail.categories}</p>
                            <div>
                                <p className="detail-info"><span className="text-warning">Copyright: </span>{detail.copyright}</p>
                                <p className="detail-info"><span className="text-warning">Language: </span> {detail.language}</p>
                                <p className="detail-info"> <span className="text-warning">Page: </span> {detail.page_count}</p>
                                <p className="detail-info"> <span className="text-warning">Isbn: </span> {detail.canonical_isbn}</p>
                                <p className="detail-info"> <span className="text-warning">Type: </span> {detail.subcategories.map((word, index) => (
                                    <span key={index}>{word} </span>))}
                                </p>
                                <p className="detail-info"><span className="text-warning">Words: </span>
                                    {detail.vocab_words.map((word, index) => (
                                    <span key={index}>{word} </span>))}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 detail-img">
                        <img className="" src={detail.published_works[0].cover_art_url} alt="" />
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between">
                 <Link to="/products" className="fs-5">
                    <img src="https://www.svgrepo.com/show/226483/backward.svg"  style={{width:"30px", height:"30px"}}  alt="" />
                    {" "}Back to Products</Link>
                 <p className="lead fs-5 fw-bold">
                    <img src="https://www.svgrepo.com/show/417138/search.svg" style={{width:"30px", height:"30px"}}  alt="" />
                    {" "}You accessed the book with the <span className="text-warning fw-bold">{productId}</span> ID out of <span className="text-warning fw-bold">{location?.state?.total} </span> books</p>
            </div>
           
        </div>
    );
}


export default CardDetail;
