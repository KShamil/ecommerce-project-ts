import React, { useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import bestSeller from "../data/saleData";
import products from "../../data/productsData";
import BestSellerCard from "../Cards/BestSellerCard";

const BestSeller = () => {
    
    const [activeCategory, setActiveCategory] = useState<string>('all');
    
    function handleFilter(category: string) {
        setActiveCategory(category);
    }
    let filteredData = products;
    if (activeCategory !== 'all') {
        filteredData = products.filter((item) => item.category === activeCategory);
    }
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <div className="best-sellers container">
        <div className="col-12 mt-5">
          <div className="mb-6 d-xl-flex justify-content-between align-items-center">
            <div className="mb-5 mb-xl-0">
              <h3 className="mb-0 fw-bold" style={{ fontFamily: "Cinzel" }}>
                Best Sellers
              </h3>
            </div>
            <div>
              <nav>
                <ul
                  className="nav nav-pills nav-scroll border-bottom-0 gap-1 "
                  id="nav-tab"
                  role="tablist"
                >
                  <li className="nav-item " role="presentation">
                    <Link to=""
                      onClick={() => handleFilter("iphone")}
                      className="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-fruitsandveg"
                      role="tab"
                      aria-selected="true"
                    >
                      iPhone
                    </Link>
                  </li>
                  <li className="nav-item " role="presentation">
                    <Link to=""
                      onClick={() => handleFilter("ipad")}
                      className="nav-link "
                      id="nav-snackMunchies-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-snackMunchies"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      iPad
                    </Link>
                  </li>
                  <li className="nav-item " role="presentation">
                    <Link to=""
                      className="nav-link"
                      id="nav-bakery-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-bakery"
                      role="tab"
                      aria-controls="nav-bakery"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      iMac
                    </Link>
                  </li>
                  <li className="nav-item " role="presentation">
                    <Link to=""
                      onClick={() => handleFilter("macbook")}
                      className="nav-link"
                      id="nav-tea-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-tea"
                      role="tab"
                      aria-controls="nav-tea"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Mackbook
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link to=""
                      onClick={() => handleFilter("watch")}
                      className="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-drinks"
                      role="tab"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Watch
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link
                      to=""
                      className="nav-link"
                      id="nav-drinks-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-drinks"
                      role="tab"
                      aria-controls="nav-drinks"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      AirPods
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link
                      to=""
                      className="nav-link"
                      id="nav-drinks-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-drinks"
                      role="tab"
                      aria-controls="nav-drinks"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      TV & Home
                    </Link>
                  </li>
                  <li className="nav-item" role="presentation">
                    <Link
                      to=""
                      className="nav-link"
                      id="nav-drinks-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-drinks"
                      role="tab"
                      aria-controls="nav-drinks"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Accessories
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="best-seller-list mt-2">
          <Slider {...settings}>
            {filteredData.map((item, i) => (
              <BestSellerCard
                key={i}
                img={item.photo}
                title={item.title}
                price={item.price}
                rating={item.rating}
                addProduct={item}
                addWishlist={item}
              />
            ))}
          </Slider>
          <Link
            to="/filterpage"
            className="btn btn-outline-danger rounded-0 w-100 d-flex justify-content-center align-items-center p-3 fw-bold"
          >
            Show More
          </Link>
        </div>
      </div>
    </>
  );
};

export default BestSeller;