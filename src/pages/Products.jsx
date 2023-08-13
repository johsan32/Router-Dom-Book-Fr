import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const Products = () => {
    const [products, setProducts] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://book-finder1.p.rapidapi.com/api/search',
        params: {
            lexile_min: '600',
            lexile_max: '800',
            results_per_page: '30',
            page: '30'
        },
        headers: {
            'X-RapidAPI-Key': 'ea11628bc3msh9bce3efeff26503p1bb3e5jsn6a1ee7a21e4e',
            'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
    };
    useEffect(() => {
        axios.request(options)
            .then((res) => {
                console.log(res);
                setProducts(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (!products) return (<div className='text-center text-danger'>Looding...</div>);

    return (
        <div className='container'>
            <h5 className='text-center'><span className='text-warning fs-4'>"{products.length}" </span> books found</h5>
            <div className="row">
                {products.map((item, index) => (
                    <div key={index} className="col-md-6">
                        <Card 
                        item = {item}
                        total = {products.length}
                        />
                    </div>
                ))}
            </div>
        </div>

    );
}

export default Products;
