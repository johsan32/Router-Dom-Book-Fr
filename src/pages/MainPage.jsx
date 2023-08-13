import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const navigate = useNavigate();
    return ( 
        <div className="container d-flex justify-content-center flex-column">
           <img className="img-fluid align-self-center" style={{width:"600px", height:"400px"}} src="https://giffiles.alphacoders.com/590/59027.gif" alt="" />
           <p className="lead text-center mt-3"><span
           onClick={()=> navigate("/products")}
           className="text-info fs-3 btn-bg-info">Ürünler</span>  sayfasına göz atmak ister misin?</p>
        </div>
     );
}
 
export default MainPage;