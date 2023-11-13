import type { MetaFunction } from "@vercel/remix";

export const config = { runtime: "bangkit" };

export const meta: MetaFunction = () => [{ title: "Bangkit" }];

export default function Bangkit() {
  return (
    <>
      {/* Favicons */}
      <link href="../public/img/favicon.png" rel="icon" />
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />
      {/* Vendor CSS Files */}
      <link
        href="../public/vendor/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="../public/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link
        href="../public/vendor/icofont/icofont.min.css"
        rel="stylesheet"
      />
      <link
        href="../public/vendor/remixicon/remixicon.css"
        rel="stylesheet"
      />
      <link
        href="../public/vendor/owl.carousel/public/owl.carousel.min.css"
        rel="stylesheet"
      />
      <link
        href="../public/vendor/boxicons/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link href="../public/vendor/venobox/venobox.css" rel="stylesheet" />
      <link
        href="../public/vendor/swiper/swiper-bundle.min.css"
        rel="stylesheet"
      />
      <link
        href="../public/vendor/glightbox/css/glightbox.min.css"
        rel="stylesheet"
      />
      {/* Template Main CSS File */}
      <link href="../public/css/style.css" rel="stylesheet" />
      {/* =======================================================
    * Template Name: Personal - v2.2.0
    * Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== */}
      <main id="main">
        {/* ======= Portfolio Details ======= */}
        <div id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="portfolio-title">Bangkit Merch Store</h2>
                <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    {/* <div class="swiper-slide"> */}
                    <img
                      src="../public/img/projects/details/bangkit-details.png"
                      width="100%"
                      height="100%"
                      alt=""
                    />
                    {/* </div> */}
                  </div>
                  <div className="swiper-pagination" />
                </div>
              </div>
              <div className="col-lg-4 portfolio-info">
                <h3>Project Information</h3>
                <ul>
                  <li>
                    <strong>Category</strong> : Android (Kotlin)
                  </li>
                  <li>
                    <strong>Project Date</strong> : Nov 2022 - Dec 2022
                  </li>
                  <li>
                    <strong>Find more on</strong> : &nbsp;
                    <a
                      href="https://github.com/fachridantm/Dicoding-JetpackCompose"
                      target="_blank"
                    >
                      <i className="bi-github" />
                    </a>
                  </li>
                </ul>
                <p>
                  Bangkit Merch Store is a simple Android apps that implement
                  Jetpack Compose. The idea is build an apps as a marketplace where
                  Bangkit Students can redeem their points for eligible merchandise.
                  This project is for completing the submission in the Belajar
                  Membuat Aplikasi Android dengan Jetpack Compose course at Dicoding
                  Indonesia which became my first project in building an Android
                  apps by using Jetpack Compose. I made this project from scratch
                  until it can be used by myself and I got 4/5 stars for this
                  submssion rating.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Details */}
      </main>
      {/* End #main */}
      {/* Vendor JS Files */}
      {/* Template Main JS File */}
    </>
  );
}