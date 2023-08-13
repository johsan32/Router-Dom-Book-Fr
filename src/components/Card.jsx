import { Link } from "react-router-dom";

const Card = ({ item, total }) => {

    const textMax = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substr(0, maxLength) + '...';
        }
        return text;
    };
    return ( 
        <div className="card mb-3">
        <div className="row no-gutters align-items-center">
            <div className="col-md-4">
                <img src={item.published_works[0].cover_art_url} className="card-img-top" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{textMax(item.summary, 150)}</p>
                    <p className="card-text"><small className="text-muted">{item.authors}</small></p>
                </div>
                <Link className="btn btn-warning mb-2" to={`/product/${item.work_id}`} state={{ total }} >Detail...</Link >           
            </div>
        </div>
    </div>
     );
}
 
export default Card;