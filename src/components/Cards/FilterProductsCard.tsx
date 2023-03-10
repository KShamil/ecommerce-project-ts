import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useWishlist } from "react-use-wishlist";
import { Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "../../config/i18n";
import { useTranslation } from "react-i18next";

interface FilterProductsCardProps {
  id: string;
  img: string;
  title: string;
  price: number | string;
  rating?: number;
  addProduct?: any;
  addWishlist?: any;
}

const FilterProductsCard: React.FC<FilterProductsCardProps> = React.memo(
  ({ id, img, title, price, rating, addProduct, addWishlist }) => {
    const { addItem } = useCart();
    const { addWishlistItem } = useWishlist();
    const [addedToWishlist, setAddedToWishlist] = useState(false);
    const { t, i18n } = useTranslation();

    let icon = addedToWishlist ? <FavoriteIcon /> : <FavoriteBorderIcon />;

    const handleAddToWishlist = useCallback(() => {
      setAddedToWishlist(true);
      addWishlistItem(addWishlist);
    }, [addWishlistItem, addWishlist]);

    const handleAddToCart = useCallback(() => {
      addItem(addProduct);
    }, [addItem, addProduct]);

    return (
      <>
        <div
          className="card filter-products-card rounded-0"
          style={{ width: "243px", minHeight: "420px" }}
        >
          <div className="card-body">
            <div className="text-center position-relative ">
              <Link
                to=""
                onClick={handleAddToWishlist}
                className=" position-absolute top-0 end-0 fs-5 text-danger"
              >
                {icon}
              </Link>
              <Link to={`/${id}`}>
                <img
                  src={img}
                  alt="Grocery Ecommerce Template"
                  className="mb-3 img-fluid p-3"
                />
              </Link>
              <div className="card-product-action">
                <a
                  href="#!"
                  className="btn-action"
                  data-bs-toggle="modal"
                  data-bs-target="#quickViewModal"
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
                  className="btn-action"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  aria-label="Wishlist"
                  data-bs-original-title="Wishlist"
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
                >
                  <i className="bi bi-arrow-left-right" />
                </a>
              </div>
            </div>
            <div className="text-small mb-1">
              <a href="#!" className="text-decoration-none text-muted">
                <small>Apple &amp; iphone</small>
              </a>
            </div>
            <h2 className="card_title">{title.substring(0, 35)}...</h2>
            <div>
              <span className="text-muted fw-bold small">
                <Rating
                  name="half-rating"
                  defaultValue={rating}
                  precision={0.5}
                  size="small"
                />
              </span>
            </div>
            <span className="state badge bg-primary mt-2">In Stock</span>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div>
                <span
                  style={{ fontFamily: "'Cinzel', serif" }}
                  className="text-danger fw-bold"
                >
                  {price} azn
                </span>{" "}
              </div>
              <div>
                <button
                  onClick={handleAddToCart}
                  className="btn btn-primary btn-sm text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-plus"
                  >
                    <line x1={12} y1={5} x2={12} y2={19} />
                    <line x1={5} y1={12} x2={19} y2={12} />
                  </svg>{" "}
                  {t("changeMainCardBtnLanguage.addbtn")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
);

export default FilterProductsCard;
