import React from "react";
import "./home.css";
import {
  aeps,
  content,
  content1,
  dj,
  dmt,
  i,
  iphone,
  nothing,
  nothing3,
  pro14,
  s24,
  sam,
  samsung,
} from "../Assets/image";
import { Link } from "react-router-dom";
const Home = () => {
  const mobilePhone = [
    {
      name: "Iphone",
      image: i,
      price: 136000,
      description: "Iphone 12 pro max",
    },
    {
      name: "Samsung",
      image: sam,
      price: 124000,
      description: "Samsung s24 Ultra",
    },
    {
      name: "Nothing",
      image: nothing3,
      price: 80000,
      description: "Nothing",
    },
    {
      name: "Xiaomi",
      image: pro14,
      price: 6000,
      description: "Redmi 14pro Max",
    },
  ];
  return (
    <>
      <header>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-12 mt-5">
              <div>
                <h1 className="fw-bold text-white">Welcome To Shop Site</h1>
                <div className="section2 mt-3">
                  <div className=" position-relative row ">
                    <div
                      id="carouselExampleSlidesOnly"
                      className="carousel slide"
                      data-bs-ride="carousel"
                      data-bs-interval="3000"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleSlidesOnly"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleSlidesOnly"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleSlidesOnly"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src={s24}
                            className="d-block w-100 main-carsousel rounded-4 "
                            style={{ height: "400px" }}
                            loading="lazy"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src={iphone}
                            className="d-block w-100 main-carsousel rounded-4"
                            style={{ height: "400px" }}
                            loading="lazy"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src={samsung}
                            className="d-block w-100 main-carsousel rounded-4"
                            style={{ height: "400px" }}
                            loading="lazy"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="video-section" className="video-section">
          <div className="container-fluid mt-5">
            <div className="row mx-auto">
              <div className="col-12">
                <div>
                  <h3 className="text-white fw-bold">New launching Mobile</h3>
                </div>
                <div className="video-wrapper">
                  <iframe
                    src="https://www.youtube.com/embed/4yKY_GfzMdo?si=bcCrZtiu8tHaGqYi&amp;start=10"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="animated-sections" className="animated-sections">
          <div className="container-fluid p-5 bg-white mt-5">
            <div className="row">
              <div className="text-center mb-4">
                <h3 className="fw-bold">New launching Mobile</h3>
              </div>
              {mobilePhone.map((mobile, index) => {
                const { name, image, description, price } = mobile;
                return (
                  <div className="col-12 col-md-6 col-lg-3">
                    <div className="">
                      <img
                        src={mobile.image}
                        alt=""
                        style={{ width: "80%", height: "250px" }}
                      />
                    </div>
                    <h5>{mobile.name}</h5>
                    <h6 className="animated-item">{mobile.description}</h6>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="banking" className="">
          <div className="container-fluid p-5 bg-transparent border border-white">
            <div className="row">
              <div className="col-12">
                <div className="text-center fw-bolder mb-5">
                  <h2 className="fw-bold">Banking</h2>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-6 mt-5 newAnimation border border-white p-3 rounded">
                    <p className="fs-5 text-warning fw-bolder mb-0"> OUR</p>
                    <p className="fs-3 text-primary fw-bold">
                      POPULAR PRODUCTS
                    </p>
                    <div>
                      <p className="fs-5 fw-bold text-danger">AEPS</p>
                      <p className="text-justify text-white">
                        Aadhaar enabled Payment System or AePS is a payment
                        system which was introduced with an aim to empower
                        people from all parts of the society by making banking
                        and financial services available to them. This payment
                        system makes it possible to initiate payments through
                        the unique identification number (UID).
                      </p>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-6 imagesAnimation">
                    <div>
                      <img
                        src={aeps}
                        className="rounded"
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 imagesAnimation">
                    <div>
                      <img
                        src={dmt}
                        className="rounded"
                        alt=""
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 mt-5 secondAnimation">
                    <div>
                      <p className="fs-5 fw-bold text-success">DMT</p>
                      <p className="text-justify text-white">
                        Domestic Money Transfer (DMT) allows users to transfer
                        money to their desired bank account. The mentioned
                        method of money transfer is available on a 24/7 basis
                        for its customers.NSDL Payments Bank has come up with
                        Domestic Money Transfer (DMT) which is an assisted
                        service to facilitate money transfer needs of unbanked,
                        under-banked and migrant people in India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact">
          <div className="container mt-5">
            <div className="row">
              <div className="col-12 text-center text-white">
                <p className="fw-bolder fs-3">Contact Us</p>
              </div>
              <div className="col-12 col-md-12 col-lg-12 text-center text-white">
                <div className="contact-info w-100">
                  <p className="fs-5">
                    According to the National Oceanic and Atmospheric <br />
                    Administration, Ted, Scambos, NSIDClead scentist, puts the
                    potentially <br />
                    record maximum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-fluid bg-transparent text-white py-5">
            <div className="row ">
              <div className="col-6 text-center">
                <h2 className="fw-bolder">Mobile Development</h2>
                <div className="text-center">
                  <p>
                    I had the pleasure of working with Lily on a <br />
                    critical web development project, and I can confidently{" "}
                    <br />
                    say that their expertise and professionalism <br /> exceeded
                    my expectations.
                  </p>
                </div>
                <p>
                  DjShadow - <span>Frontend Developer</span>
                </p>
                <div className="row">
                  <div className="d-flex justify-content-center">
                    <div className="col-2 border-end">
                      <img
                        src={s24}
                        alt=""
                        style={{
                          width: "80%",
                          borderRadius: ".5rem",
                          height: "100%",
                        }}
                      />
                    </div>
                    <div className="col-2 border-end">
                      <img
                        src={iphone}
                        alt=""
                        style={{
                          width: "80%",
                          borderRadius: ".5rem",
                          height: "100%",
                        }}
                      />
                    </div>
                    <div className="col-2">
                      <img
                        src={nothing}
                        alt=""
                        style={{
                          width: "80%",
                          borderRadius: ".5rem",
                          height: "100%",
                        }}
                        s
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to={"/electronics"}
                className="col-12 col-md-6 col-lg-6 text-center border-none"
              >
                <img
                  src={dj}
                  alt=""
                  className="shadow border border-primary"
                  style={{
                    width: "40%",
                    borderRadius: ".5rem",
                    height: "100%",
                  }}
                />
              </Link>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container-fluid p-5"style={{backgroundColor:"#32325d",width:"100%",height:"32rem"}}>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-7">
                <div className="">
                  <img
                    src={content}
                    alt=""
                    className="w-50 position-relative "
                    style={{
                      width: "70%",
                      border: "1px solid #344675",
                      borderRadius: ".5rem",
                    }}
                  />
                </div>
                <div className="position-absolute ">
                  <img
                    src={content1}
                    alt=""
                    className=""
                    style={{
                      marginTop: "-55%",
                      marginLeft: "36%",
                      width: "70%",
                      border: "1px solid #344675",
                      borderRadius: ".5rem",
                    }}
                  />
                </div>
              </div>
              <div className="col-12 col-md-5 col-lg-5 mt-5">
                <div>
                  <h1 className="text-white fw-bold mb-0 p-0">Content Area</h1>
                  <p className="mt-3 pt-0 fw-bold" style={{ color: "pink",fontSize:"12px" }}>
                    FOR AREAS THAT NEED MORE SPACE{" "}
                  </p>
                </div>
                <div className="mt-5">
                  <p className="text-white"style={{fontSize:"1.14rem"}}>
                    We took into consideration multiple use cases and came up
                    with some specific areas for you. If you need elements such
                    as tables, comments, description areas, tabs and many
                    others, we've got you covered. They're beautiful and easy to
                    use for the end user navigating your website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
