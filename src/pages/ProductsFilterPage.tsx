import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import products from "../data/productsData";
import { Pagination } from "@mui/material";
import FilterProductsCard from "../components/Cards/FilterProductsCard";
import { useEffect } from "react";

const ProductsFilterPage = (props:any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(10000);
  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  const handleColorSelect = (color: string | null) => {
    setSelectedColor(color);
  };

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(event.target.value));
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(event.target.value));
  };
  const filteredItems = products.filter((item) => {
    const matchCategory = !selectedCategory || item.category === selectedCategory;
    const matchColor = !selectedColor || item.color === selectedColor;
    const matchMinPrice = !minPrice || item.price >= minPrice;
    const matchMaxPrice = !maxPrice || item.price <= maxPrice;
    return matchCategory && matchColor && matchMinPrice && matchMaxPrice;
  });

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredItems.slice(startIndex, endIndex);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <>
      <div className="all-products">
        <div className="container-fluid mt-3">
          <div className="row">
            <nav
              id="sidebarMenu"
              className="col-md-3 col-lg-2 d-md-block bg-light sidebar"
              style={{}}
            >
              <div className="position-sticky pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                  <span className="fw-bold">Categories:</span>
                  <li className="nav-item mt-2">
                    <Link
                    to=""
                      onClick={() => handleCategorySelect(null)}
                      className="nav-link active"
                      aria-current="page"
                    
                    >
                      <i className="fa-brands fa-apple mx-1"></i>
                      All
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                    to=""
                      onClick={() => handleCategorySelect("iphone")}
                      className="nav-link active"
                      aria-current="page"
                
                    >
                      <i className="fa-solid fa-mobile-screen-button mx-1"></i>
                      iphone
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                        to=""
                      onClick={() => handleCategorySelect("ipad")}
                      className="nav-link"
                    >
                      <i className="fa-solid fa-tablet-screen-button mx-1"></i>
                      ipad
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="" className="nav-link">
                      <i className="fa-solid fa-desktop mx-1"></i>
                      iMac
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="" className="nav-link">
                      <i className="fa-solid fa-laptop mx-1"></i>
                      Mackbook
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                    to=""
                      onClick={() => handleCategorySelect("watch")}
                      className="nav-link"
                    >
                      <i className="fa-regular fa-clock mx-1"></i>
                      Watch
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="" className="nav-link">
                      <i className="fa-solid fa-headphones mx-1"></i>
                      AirPods
                    </Link>
                  </li>
                </ul>
                <ul className="bottom-nav nav flex-column mt-3">
                  <li className="nav-item">
                    <span className="fw-bold">Color:</span>
                    <div className="colors d-flex">
                      <Link
                        to=""
                        onClick={() => handleColorSelect("red")}
                        className="nav-link active"
                        aria-current="page"
                      >
                        <i className="fa-solid fa-circle text-danger fs-4"></i>
                      </Link>
                      <Link
                        to=""
                        onClick={() => handleColorSelect(null)}
                        className="nav-link active"
                        aria-current="page"
                      >
                        <i className="fa-solid fa-circle text-success fs-4"></i>
                      </Link>
                      <Link
                        to=""
                        onClick={() => handleColorSelect(null)}
                        className="nav-link active"
                        aria-current="page"
                
                      >
                        <i className="fa-solid fa-circle text-warning fs-4"></i>
                      </Link>
                      <Link
                        to=""
                        onClick={() => handleColorSelect(null)}
                        className="btn btn-danger"
                        aria-current="page"
                
                      >
                        Reset
                      </Link>
                    </div>
                  </li>
                </ul>
                <div className="bottom-nav nav flex-column mt-3">
                  <li className="nav-item">
                    <span className="fw-bold">Price:</span>
                    <div className="form-group d-flex flex-column mt-1">
                      <label htmlFor="">{`Min ${minPrice}`}</label>
                      <input
                        type="range"
                        className=""
                        placeholder="Min"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                      />
                      <label htmlFor="">{`Max ${maxPrice}`}</label>
                      <input
                        type="range"
                        min="100"
                        max="10000"
                        className=""
                        placeholder="Max"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                      />
                    </div>
                  </li>
                </div>
              </div>
            </nav>
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand">
                </div>
                <div className="chartjs-size-monitor-shrink">
                </div>
              </div>
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h1" style={{ fontFamily: "Cinzel" }}>
                  Products
                </h1>
              </div>
              <div className="products-list d-flex flex-wrap">
                {currentData
                  .filter((item) =>
                    item.title.toLowerCase().includes(props.search)
                  )
                  .map((item, i) => (
                    <FilterProductsCard
                      id={item.id}
                      img={item.photo}
                      title={item.title}
                      price={item.price}
                      rating={item.rating}
                      addProduct={item}
                      addWishlist={item}
                    />
                  ))}
              </div>
              <div className="pagination d-flex justify-content-center mt-5">
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  variant="outlined"
                  color="secondary"
                />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsFilterPage;