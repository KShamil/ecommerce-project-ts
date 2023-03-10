import React, { useState, useContext } from "react";
import { ProductType } from "../data/productsData";
import { Link } from "react-router-dom";
import AddProductButton from "../components/Buttons/AddProductButton";
import AddWishlistButton from "../components/Buttons/AddWishlistButton";
import { Pagination } from "@mui/material";
import { useEffect } from "react";
import { ProductContext } from "../context/ProductContext";

const SpecialOffersPage = (props: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [products] = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 5;

  const totalPages: number = Math.ceil(
    Object.keys(products).length / itemsPerPage
  );
  const startIndex: number = (currentPage - 1) * itemsPerPage;
  const endIndex: number = startIndex + itemsPerPage;
  const currentData: ProductType[] = Object.values(products).slice(
    startIndex,
    endIndex
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };
  return (
    <>
      <div className="special-offers-page col-lg-12 container mt-5">
        <div className="mb-8">
          <div className="top-link d-flex justify-content-start align-items-center gap-3">
            <div className="title-link">
              <Link to="/" className="link text-decoration-none">
                Home
              </Link>{" "}
              <i className="fa-solid fa-angle-right"></i>
            </div>
            <h4 className="title my-1">Special Offers</h4>
          </div>
        </div>
        <div className="mt-5">
          <div className="table-responsive">
            <table className="table bg-body">
              <thead className="table-danger">
                <tr></tr>
              </thead>
              <tbody>
                {currentData
                  .filter((item) =>
                    item.title.toLowerCase().includes(props.search)
                  )
                  .map((item) => (
                    <tr key={item.id}>
                      <th className="align-middle w-25">
                        <Link to="">
                          <img
                            src={item.photo}
                            style={{
                              width: "100%",
                              maxWidth: "150px",
                              minWidth: "70px",
                            }}
                            className="icon-shape icon-xxl"
                            alt="error"
                          />
                        </Link>
                      </th>
                      <th className="align-start w-50">
                        <div className="">
                          <h5 className="fs-6 mb-0">
                            <Link
                              to=""
                              className="title text-decoration-none text-dark"
                            >
                              {item.title}
                            </Link>
                          </h5>
                          <p className="badge bg-success mt-3">In Stock</p>
                        </div>
                      </th>
                      <th className="align-middle">
                        <p className="text-decoration-line-through text-muted fw-bold">
                          {item.salePrice}
                        </p>
                        <p className="price text-danger fw-bold">
                          {item.price} azn
                        </p>
                        <div className="action-btn d-flex gap-2">
                          <AddWishlistButton addWishlist={item} />
                          <AddProductButton addProduct={item} />
                        </div>
                      </th>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="pagination d-flex justify-content-center">
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            color={"primary"}
          />
        </div>
      </div>
    </>
  );
};

export default SpecialOffersPage;
