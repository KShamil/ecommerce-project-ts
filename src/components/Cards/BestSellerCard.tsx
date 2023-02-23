import React,{useState} from "react";
import { useCart } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import { useWishlist } from "react-use-wishlist";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface BestSellerCardType {
    img: string;
    title: string;
    price: number;
    rating: number;
    addProduct?: any;
    addWishlist?: any;
}

const BestSellerCard:React.FC<BestSellerCardType> = ({img,title,price,rating,addProduct,addWishlist}) => {
  const { addItem } = useCart();
  const { addWishlistItem } = useWishlist();
  const notify = () => toast("Cart added!");
  const notifyWishlist = () => toast("Wishlist added!");
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  let icon = addedToWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />;

  const handleAddToWishlist = () => {
    setAddedToWishlist(true);
    addWishlistItem(addWishlist);
    notifyWishlist();
  };
  const handleAddToCart = () => {
    addItem(addProduct);
    notify();
  };
  return (
    <>
      <div className="card-body position-relative border border-muted p-3 bg-body" style={{minHeight:'448px'}}>
        <div className="text-center position-relative ">
        <Link to="" onClick={handleAddToWishlist} className=" position-absolute top-0 end-0 fs-5 text-danger">
               {icon}
            </Link>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
          <a href="#!" tabIndex={-1}>
            <img
              src={img}
              alt="Grocery Ecommerce Template"
              className="mb-3 img-fluid p-3"
            />
          </a>
          <div className="product-action-btn">
            <a
              href="#!"
              className="btn-action mb-1"
              data-bs-toggle="modal"
              data-bs-target="#quickViewModal"
              tabIndex={-1}
            >
              <i
                className="bi bi-eye"
                data-bs-toggle="tooltip"
                data-bs-html="true"
                aria-label="Quick View"
                data-bs-original-title="Quick View"
              />
            </a>
            <a
              href="#!"
              className="btn-action mb-1"
              data-bs-toggle="tooltip"
              data-bs-html="true"
              aria-label="Wishlist"
              data-bs-original-title="Wishlist"
              tabIndex={-1}
            >
              <i className="bi bi-heart" />
            </a>
            <a
              href="#!"
              className="btn-action"
              data-bs-toggle="tooltip"
              data-bs-html="true"
              aria-label="Compare"
              data-bs-original-title="Compare"
              tabIndex={-1}
            >
              <i className="bi bi-arrow-left-right" />
            </a>
          </div>
        </div>
        <h2 className="fs-6">
          <span
            className="text-dark fs-6"
            tabIndex={-1}
          >
            {title.substring(0,20)}...
          </span>
        </h2>
        <div>
          <span className="text-muted small"><Rating
              name="half-rating"
              defaultValue={rating}
              precision={0.5}
              size="small"
            /></span>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <span className="text-danger fw-bold"style={{fontFamily:'Cinzel'}}>{price} azn</span>
          </div>
          <div>
            <span className="state badge bg-success">In Stock</span>
          </div>
        </div>
        <div>
          <div className="d-grid mt-4">
            <button onClick={handleAddToCart} className="btn btn-danger rounded-pill" tabIndex={-1}>
              Add to Cart
            </button>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellerCard;