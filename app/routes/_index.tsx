import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { redirectRouteToURL } from "~/utils";

export const meta: MetaFunction = () => {
  return [
    { title: "Fachridan Tio Mu'afa - Personal Website" },
    {
      name: "description",
      content: "SWE - Android | GDG Jakarta Co-Organizer | #GoogleCertified - Associate Android Developer | Ex-GDSC Lead @ GDSC UIN Jakarta",
    },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return redirectRouteToURL(request);
};

export default function Index() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <title>Fachridan Tio Mu'afa - Personal Website</title>
      <meta
        content="SWE - Android | GDG Jakarta Co-Organizer | #GoogleCertified - Associate Android Developer | Ex-GDSC Lead @ GDSC UIN Jakarta"
        name="
      description"
      />
      <meta
        content="SWE - Android | GDG Jakarta Co-Organizer | #GoogleCertified - Associate Android Developer | Ex-GDSC Lead @ GDSC UIN Jakarta"
        name="keywords"
      />
      <meta
        name="google-site-verification"
        content="RSiGYGbWt0CDAuV5PHQQHGfDFDLjdkpNgieFp06GxjI"
      />
      <meta
        property="og:site_name"
        content="Fachridan Tio Mu'afa - Personal Website"
      />
      <meta property="og:title" content="Fachridan Tio Mu'afa" />
      <meta
        property="og:description"
        content="SWE - Android | GDG Jakarta Co-Organizer | #GoogleCertified - Associate Android Developer | Ex-GDSC Lead @ GDSC UIN Jakarta"
      />
      <meta
        property="og:image"
        itemProp="image"
        content="https://fachridantm.me/public/assets/img/profile-wide.jpg"
      />
      <meta
        property="og:image:secure_url"
        itemProp="image"
        content="https://fachridantm.me/public/assets/img/profile-wide.jpg"
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:type" content="Personal Website" />
      <meta property="og:url" content="https://fachridantm.me/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@fachridantm" />
      <meta name="twitter:site" content="https://fachridantm.me/" />
      <meta name="twitter:title" content="Fachridan Tio Mu'afa" />
      <meta
        name="twitter:description"
        content="SWE - Android | GDG Jakarta Co-Organizer | #GoogleCertified - Associate Android Developer | Ex-GDSC Lead @ GDSC UIN Jakarta"
      />
      <meta
        name="twitter:image"
        content="https://fachridantm.me/public/assets/img/profile-wide.jpg"
      />
      {/* Favicons */}
      <link rel="icon" type="image/png" href="public/assets/img/favicon.png" />
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet"
      />
      {/* Vendor CSS Files */}
      <link
        href="public/assets/vendor/bootstrap/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        href="public/assets/vendor/bootstrap-icons/bootstrap-icons.css"
        rel="stylesheet"
      />
      <link href="public/assets/vendor/icofont/icofont.min.css" rel="stylesheet" />
      <link
        href="public/assets/vendor/glightbox/css/glightbox.min.css"
        rel="stylesheet"
      />
      <link href="public/assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
      <link
        href="public/assets/vendor/owl.carousel/public/assets/owl.carousel.min.css"
        rel="stylesheet"
      />
      <link
        href="public/assets/vendor/boxicons/css/boxicons.min.css"
        rel="stylesheet"
      />
      <link href="public/assets/vendor/venobox/venobox.css" rel="stylesheet" />
      <link
        href="public/assets/vendor/swiper/swiper-bundle.min.css"
        rel="stylesheet"
      />
      <link
        href="https://calendar.google.com/calendar/scheduling-button-script.css"
        rel="stylesheet"
      />
      {/* Template Main CSS File */}
      <link href="public/assets/css/style.css" rel="stylesheet" />
      {/* Crsip Chat */}
      {/* =======================================================
    * Template Name: Personal - v2.1.0
    * Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== */}
      {/* ======= Header ======= */}
      <header id="header" className="header-tops">
        <div className="container">
          <h1>
            <a href="https://fachridantm.me/">Fachridan Tio Mu'afa</a>
          </h1>
          <br />
          <h2>
            Hi, Folks!{" "}
            <img
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              width="24px"
              height="24px"
            />
          </h2>
          <h2>
            I'm <span className="typing" />
          </h2>
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active">
                <a href="#header">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about">
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#education">
                  <span>Education</span>
                </a>
              </li>
              <li>
                <a href="#experience">
                  <span>Experience</span>
                </a>
              </li>
              <li>
                <a href="#projects">
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a
                  href="public/assets/pdf/Fachridan Tio Mu'afa_CV.pdf"
                  target="_blank"
                >
                  {" "}
                  <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* .nav-menu */}
          <div className="social-links">
            <a href="https://x.com/fachridantm" target="_blank" className="X">
              <i className="bi bi-twitter-x" />
            </a>
            <a
              href="https://instagram.com/fachridantm"
              target="_blank"
              className="instagram"
            >
              <i className="bi bi-instagram" />
            </a>
            <a
              href="https://linkedin.com/in/fachridantm"
              target="_blank"
              className="linkedin"
            >
              <i className="bi bi-linkedin" />
            </a>
            <a
              href="https://github.com/fachridantm"
              target="_blank"
              className="github"
            >
              <i className="bi bi-github" />
            </a>
            <a
              href="mailto:fachridantm@gmail.com"
              target="_blank"
              className="gmail"
            >
              <i className="bi bi-envelope-fill" />
            </a>
          </div>
          <div className="scheduling-button-script">
            {/* Google Calendar Appointment Scheduling begin */}
            {/* end Google Calendar Appointment Scheduling */}
          </div>
          <div className="credits">© 2023 All rights reserved.</div>
        </div>
      </header>
      {/* End Header */}
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        {/* ======= About Me ======= */}
        <div className="about-me container">
          <div className="section-title">
            <h2>About</h2>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img
                src="public/assets/img/profile.webp"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-7 pt-4 pt-lg-0 content" data-aos="fade-left">
              <p>
                Senior year student majoring in Informatics who is interested in
                Mobile Development.
              </p>
              <p>
                I have experience with Object-Oriented Programming (OOP) in Java
                since I entered college and certainly have a solid understanding the
                fundamental of Java language. So that's how I started fast into
                Kotlin and its implementation on Android since I joining Android
                Developer Club. Hence, I was able to get an award as
                <a
                  href="public/assets/img/awards/adc.webp"
                  data-gallery="adcOnly"
                  data-glightbox="type: image"
                  className="portfolio-details-lightbox"
                >
                  The Best Participant in the Android Developer Club
                </a>{" "}
                as part of the HIMTI DEV program which organized by HIMTI UIN
                Jakarta.
              </p>
              <p>
                After that, Alhamdulillah, I was selected as 3.1K participants from
                63K registrants as Mobile Development (Android) Cohort in{" "}
                <a href="https://g.co/bangkit" target="_blank">
                  Bangkit Academy led by Google, GoTo, &amp; Traveloka
                </a>{" "}
                and graduated with Google Certified as{" "}
                <a
                  href="public/assets/img/certifications/aad-cert.webp"
                  data-gallery="aadOnly"
                  data-glightbox="type: image"
                  className="portfolio-details-lightbox"
                >
                  Associate Android Developer
                </a>
                . After graduated, I am continuing my contribution to Bangkit
                Academy as a Mentor for Mobile Development (Android) Learning Path.
              </p>
              <p>
                Apart from that, I also have a good communication skill, leadership
                skill, and responsibility which have helped me a lot during my time
                when I was become a Lead of{" "}
                <a href="https://goo.gle/gdsc" target="_blank">
                  Google Developer Student Clubs
                </a>{" "}
                at my university. And all of that can happen because I have high
                self-confidence and love to improve myself to learn other new
                experiences.
              </p>
              {/* <div class="row">
        <div class="col-lg-6 pt-4">
          <ul>
            <li><i class="icofont-rounded-right"></i> <strong>Date of Birth: </strong>May 17th, 2001</li>
          </ul>
        </div>
  
        <div class="col-lg-6 pt-4">
          <ul>
            <li><i class="icofont-rounded-right"></i> <strong>City: </strong>Bekasi, Indonesia</li>
          </ul>
        </div>
      </div> */}
            </div>
          </div>
        </div>
        {/* End About Me */}
        {/* ======= Interests ======= */}
        <div className="interests container">
          <div className="section-title">
            <h2>Skills &amp; Tools</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <a
                href="https://d.android.com/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className="icon-box">
                  <i className="ri-android-fill" style={{ color: "#1c7d32" }} />
                  <h3>Android</h3>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <a
                href="https://kotlinlang.org/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className="icon-box">
                  <i
                    className="ri-code-s-slash-line"
                    style={{ color: "#5578ff" }}
                  />
                  <h3>Kotlin</h3>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
              <a
                href="https://docs.oracle.com/en/java/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className="icon-box">
                  <i
                    className="ri-code-s-slash-line"
                    style={{ color: "#e80368" }}
                  />
                  <h3>Java</h3>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
              <a
                href="https://www.w3schools.com/html/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className="icon-box">
                  <i className="ri-html5-fill" style={{ color: "#ffb007" }} />
                  <h3>HTML</h3>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className="icon-box">
                  <i className="ri-css3-fill" style={{ color: "#ff4d07" }} />
                  <h3>CSS</h3>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <div className="icon-box">
                <i className="ri-global-line" style={{ color: "#b5f10f" }} />
                <h3>REST APIs</h3>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <a
                href="https://github.com/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className="icon-box">
                  <i className="ri-github-fill" style={{ color: "#aac5e4a8" }} />
                  <h3>Github</h3>
                </div>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 mt-4">
              <a
                href="https://gitlab.com/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <div className="icon-box">
                  <i className="ri-gitlab-line" style={{ color: "#ffaf47" }} />
                  <h3>Gitlab</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* End Interests */}
        {/* ======= Recommendations ======= */}
        <div className="testimonials container">
          <div className="section-title">
            <h2>Recommendations</h2>
          </div>
          <div
            className="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Working with Fachri for approximately one month on our capstone
                    project was an amazing and inspiring moment. Fachri is diligent
                    and has high willingness to learn which contributes
                    significantly to the mobile development of our capstone project.
                    I would say that having Fachri on your team would benefit the
                    team greatly because of his ability in mobile development and
                    also boosting the overall relationship in the team.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img
                    src="public/assets/img/recommendations/aji.jpeg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>
                    <a
                      href="https://www.linkedin.com/in/muhajipra/"
                      target="_blank"
                    >
                      M. Aji Prasetyo
                    </a>
                  </h3>
                  <h4>
                    Google Certified TensorFlow Developer | Bangkit Academy 2022
                    Distinction Graduate in Machine Learning
                  </h4>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Fachri possesses exceptional leadership skills and has the
                    ability to effectively manage team members. He takes full
                    responsibility for tasks that contribute to the organization's
                    progress and would be a valuable asset to your team.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img
                    src="public/assets/img/recommendations/fitroh.jpeg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>
                    <a
                      href="https://www.linkedin.com/in/fitroh-amri08/"
                      target="_blank"
                    >
                      Muhammad Fitroh Amrilla
                    </a>
                  </h3>
                  <h4>
                    Google Certified Tensorflow Developer | Bangkit Graduate 2022 |
                    Data Science and Machine Learning Enthusiasts
                  </h4>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    He is passionate in android development, good leadership,
                    analytical things and good explanation for every feature that he
                    build
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img
                    src="public/assets/img/recommendations/mas-agung.jpeg"
                    className="testimonial-img"
                    alt=""
                  />
                  <h3>
                    <a
                      href="https://www.linkedin.com/in/agungjies/"
                      target="_blank"
                    >
                      Agung Gunawan
                    </a>
                  </h3>
                  <h4>
                    Cloud Engineer | Cloud Certified GCP AWS Azure | Cloud Infra
                    &amp; App Modernization | 10 Years in Tech Industry
                  </h4>
                </div>
              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
          <div className="owl-carousel testimonials-carousel"></div>
        </div>
        {/* End Recommendations  */}
      </section>
      {/* End About Section */}
      {/* ======= Education Section ======= */}
      <section id="education" className="education">
        <div className="container">
          <div className="section-title">
            <h2>Education</h2>
          </div>
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div
                className="col-md-4 mt-4 mt-md-0 icon-box"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <img
                  src="public/assets/img/education/uin-jakarta.webp"
                  className="img-fluid"
                  alt=""
                />
                <h5>
                  <a href="https://www.uinjkt.ac.id" target="_blank">
                    UIN Syarif Hidayatullah Jakarta
                  </a>
                </h5>
                <h6>Sep 2019 - Present</h6>
                <p>
                  <em>Bachelor;s Degree in Informatics - S.Kom.</em>
                </p>
                <p>Grade: 3.70/4.00 (GPA)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div className="container">
            <div className="section-title">
              <h2>Certifications</h2>
            </div>
            <div
              className="row portfolio-container"
              style={{ position: "relative", height: "437.75px" }}
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="public/assets/img/certifications/aad-cert.webp"
                    className="img-thumbnail"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Google Certified - Associate Android Developer</h4>
                    <div className="portfolio-links">
                      <a
                        href="public/assets/img/certifications/aad-cert.webp"
                        data-gallery="certificateGallery"
                        data-glightbox="type: image"
                        className="portfolio-details-lightbox"
                      >
                        <i className="bx bx-zoom-in" />
                      </a>
                      <a
                        href="https://www.credential.net/595d9027-ffcb-4c82-9fe7-2dfc0fdbf24c"
                        target="_blank"
                      >
                        <i className="bx bx-link" />
                      </a>
                      <a
                        className="clipboard"
                        href="https://www.credential.net/595d9027-ffcb-4c82-9fe7-2dfc0fdbf24c"
                        target="_blank"
                      >
                        <i className="bx bx-clipboard" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End certicateion item */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="public/assets/img/certifications/dicoding-compose.webp"
                    className="img-thumbnail"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>
                      Dicoding - Belajar Membuat Aplikasi Android dengan Jetpack
                      Compose
                    </h4>
                    <div className="portfolio-links">
                      <a
                        href="public/assets/img/certifications/dicoding-compose.webp"
                        data-gallery="certificateGallery"
                        data-glightbox="type: image"
                        className="portfolio-details-lightbox"
                      >
                        <i className="bx bx-zoom-in" />
                      </a>
                      <a
                        href="https://www.dicoding.com/certificates/L4PQ61OWVPO1"
                        target="_blank"
                      >
                        <i className="bx bx-link" />
                      </a>
                      <a
                        className="clipboard"
                        href="https://www.dicoding.com/certificates/L4PQ61OWVPO1"
                        target="_blank"
                      >
                        <i className="bx bx-clipboard" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End certicateion item */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="public/assets/img/certifications/dicoding-android-expert.webp"
                    className="img-thumbnail"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Dicoding - Menjadi Android Developer Expert</h4>
                    <div className="portfolio-links">
                      <a
                        href="public/assets/img/certifications/dicoding-android-expert.webp"
                        data-gallery="certificateGallery"
                        data-glightbox="type: image"
                        className="portfolio-details-lightbox"
                      >
                        <i className="bx bx-zoom-in" />
                      </a>
                      <a
                        href="https://www.dicoding.com/certificates/0LZ09O4LQZ65"
                        target="_blank"
                      >
                        <i className="bx bx-link" />
                      </a>
                      <a
                        className="clipboard"
                        href="https://www.dicoding.com/certificates/0LZ09O4LQZ65"
                        target="_blank"
                      >
                        <i className="bx bx-clipboard" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End certicateion item */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="public/assets/img/certifications/dicoding-android-intermediate.webp"
                    className="img-thumbnail"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>
                      Dicoding - Belajar Pengembangan Aplikasi Android Intermediate
                    </h4>
                    <div className="portfolio-links">
                      <a
                        href="public/assets/img/certifications/dicoding-android-intermediate.webp"
                        data-gallery="certificateGallery"
                        data-glightbox="type: image"
                        className="portfolio-details-lightbox"
                      >
                        <i className="bx bx-zoom-in" />
                      </a>
                      <a
                        href="https://www.dicoding.com/certificates/L4PQ43J1VXO1"
                        target="_blank"
                      >
                        <i className="bx bx-link" />
                      </a>
                      <a
                        className="clipboard"
                        href="https://www.dicoding.com/certificates/L4PQ43J1VXO1"
                        target="_blank"
                      >
                        <i className="bx bx-clipboard" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End certicateion item */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="public/assets/img/certifications/dicoding-android-fundamental.webp"
                    className="img-thumbnail"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Dicoding - Belajar Fundamental Aplikasi Android</h4>
                    <div className="portfolio-links">
                      <a
                        href="public/assets/img/certifications/dicoding-android-fundamental.webp"
                        data-gallery="certificateGallery"
                        data-glightbox="type: image"
                        className="portfolio-details-lightbox"
                      >
                        <i className="bx bx-zoom-in" />
                      </a>
                      <a
                        href="https://www.dicoding.com/certificates/53XEWVYJKXRN"
                        target="_blank"
                      >
                        <i className="bx bx-link" />
                      </a>
                      <a
                        className="clipboard"
                        href="https://www.dicoding.com/certificates/53XEWVYJKXRN"
                        target="_blank"
                      >
                        <i className="bx bx-clipboard" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End certicateion item */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="public/assets/img/certifications/dicoding-android-pemula.webp"
                    className="img-thumbnail"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>
                      Dicoding - Belajar Membuat Aplikasi Android untuk Pemula
                    </h4>
                    <div className="portfolio-links">
                      <a
                        href="public/assets/img/certifications/dicoding-android-pemula.webp"
                        data-gallery="certificateGallery"
                        data-glightbox="type: image"
                        className="portfolio-details-lightbox"
                      >
                        <i className="bx bx-zoom-in" />
                      </a>
                      <a
                        href="https://www.dicoding.com/certificates/2VX3N36V4XYQ"
                        target="_blank"
                      >
                        <i className="bx bx-link" />
                      </a>
                      <a
                        className="clipboard"
                        href="https://www.dicoding.com/certificates/2VX3N36V4XYQ"
                        target="_blank"
                      >
                        <i className="bx bx-clipboard" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End certicateion item */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="public/assets/img/certifications/dicoding-solid.webp"
                    className="img-thumbnail"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Dicoding - Belajar Prinsip Pemrograman SOLID</h4>
                    <div className="portfolio-links">
                      <a
                        href="public/assets/img/certifications/dicoding-solid.webp"
                        data-gallery="certificateGallery"
                        data-glightbox="type: image"
                        className="portfolio-details-lightbox"
                      >
                        <i className="bx bx-zoom-in" />
                      </a>
                      <a
                        href="https://www.dicoding.com/certificates/2VX328V4JPYQ"
                        target="_blank"
                      >
                        <i className="bx bx-link" />
                      </a>
                      <a
                        className="clipboard"
                        href="https://www.dicoding.com/certificates/2VX328V4JPYQ"
                        target="_blank"
                      >
                        <i className="bx bx-clipboard" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End certicateion item */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="public/assets/img/certifications/dicoding-kotlin.webp"
                    className="img-thumbnail"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Dicoding - Memulai Pemrograman Dengan Kotlin</h4>
                    <div className="portfolio-links">
                      <a
                        href="public/assets/img/certifications/dicoding-kotlin.webp"
                        data-gallery="certificateGallery"
                        data-glightbox="type: image"
                        className="portfolio-details-lightbox"
                      >
                        <i className="bx bx-zoom-in" />
                      </a>
                      <a
                        href="https://www.dicoding.com/certificates/KEXL36J9MPG2"
                        target="_blank"
                      >
                        <i className="bx bx-link" />
                      </a>
                      <a
                        className="clipboard"
                        href="https://www.dicoding.com/certificates/KEXL36J9MPG2"
                        target="_blank"
                      >
                        <i className="bx bx-clipboard" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End certicateion item */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="public/assets/img/certifications/dicoding-java.webp"
                    className="img-thumbnail"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Dicoding - Memulai Pemrograman Dengan Java</h4>
                    <div className="portfolio-links">
                      <a
                        href="public/assets/img/certifications/dicoding-java.webp"
                        data-gallery="certificateGallery"
                        data-glightbox="type: image"
                        className="portfolio-details-lightbox"
                      >
                        <i className="bx bx-zoom-in" />
                      </a>
                      <a
                        href="https://www.dicoding.com/certificates/L4PQ3WREOPO1"
                        target="_blank"
                      >
                        <i className="bx bx-link" />
                      </a>
                      <a
                        className="clipboard"
                        href="https://www.dicoding.com/certificates/L4PQ3WREOPO1"
                        target="_blank"
                      >
                        <i className="bx bx-clipboard" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End certicateion item */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="public/assets/img/certifications/dicoding-logic-programming.webp"
                    className="img-thumbnail"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>
                      Dicoding - Pengenalan ke Logika Pemrograman (Programming Logic
                      101)
                    </h4>
                    <div className="portfolio-links">
                      <a
                        href="public/assets/img/certifications/dicoding-logic-programming.webp"
                        data-gallery="certificateGallery"
                        data-glightbox="type: image"
                        className="portfolio-details-lightbox"
                      >
                        <i className="bx bx-zoom-in" />
                      </a>
                      <a
                        href="https://www.dicoding.com/certificates/EYX47NR6OXDL"
                        target="_blank"
                      >
                        <i className="bx bx-link" />
                      </a>
                      <a
                        className="clipboard"
                        href="https://www.dicoding.com/certificates/EYX47NR6OXDL"
                        target="_blank"
                      >
                        <i className="bx bx-clipboard" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End certicateion item */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="public/assets/img/certifications/dicoding-software-developer-prep.webp"
                    className="img-thumbnail"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>
                      Dicoding - Memulai Dasar Pemrograman untuk Menjadi Pengembang
                      Software
                    </h4>
                    <div className="portfolio-links">
                      <a
                        href="public/assets/img/certifications/dicoding-software-developer-prep.webp"
                        data-gallery="certificateGallery"
                        data-glightbox="type: image"
                        className="portfolio-details-lightbox"
                      >
                        <i className="bx bx-zoom-in" />
                      </a>
                      <a
                        href="https://www.dicoding.com/certificates/N9ZOE1D4RXG5"
                        target="_blank"
                      >
                        <i className="bx bx-link" />
                      </a>
                      <a
                        className="clipboard"
                        href="https://www.dicoding.com/certificates/N9ZOE1D4RXG5"
                        target="_blank"
                      >
                        <i className="bx bx-clipboard" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End certicateion item */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="public/assets/img/certifications/dicoding-career-as-software-developer.webp"
                    className="img-thumbnail"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Dicoding - Meniti Karier sebagai Software Developer</h4>
                    <div className="portfolio-links">
                      <a
                        href="public/assets/img/certifications/dicoding-career-as-software-developer.webp"
                        data-gallery="certificateGallery"
                        data-glightbox="type: image"
                        className="portfolio-details-lightbox"
                      >
                        <i className="bx bx-zoom-in" />
                      </a>
                      <a
                        href="https://www.dicoding.com/certificates/ERZRME02OPYV"
                        target="_blank"
                      >
                        <i className="bx bx-link" />
                      </a>
                      <a
                        className="clipboard"
                        href="https://www.dicoding.com/certificates/ERZRME02OPYV"
                        target="_blank"
                      >
                        <i className="bx bx-clipboard" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End certicateion item */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="public/assets/img/certifications/dicoding-github.webp"
                    className="img-thumbnail"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Dicoding - Belajar Dasar Git dengan GitHub</h4>
                    <div className="portfolio-links">
                      <a
                        href="public/assets/img/certifications/dicoding-github.webp"
                        data-gallery="certificateGallery"
                        data-glightbox="type: image"
                        className="portfolio-details-lightbox"
                      >
                        <i className="bx bx-zoom-in" />
                      </a>
                      <a
                        href="https://www.dicoding.com/certificates/53XEW58YRXRN"
                        target="_blank"
                      >
                        <i className="bx bx-link" />
                      </a>
                      <a
                        className="clipboard"
                        href="https://www.dicoding.com/certificates/53XEW58YRXRN"
                        target="_blank"
                      >
                        <i className="bx bx-clipboard" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End certicateion item */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="public/assets/img/certifications/dicoding-ux-design.webp"
                    className="img-thumbnail"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Dicoding - Belajar Dasar UX Design</h4>
                    <div className="portfolio-links">
                      <a
                        href="public/assets/img/certifications/dicoding-ux-design.webp"
                        data-gallery="certificateGallery"
                        data-glightbox="type: image"
                        className="portfolio-details-lightbox"
                      >
                        <i className="bx bx-zoom-in" />
                      </a>
                      <a
                        href="https://www.dicoding.com/certificates/NVP7K178GZR0"
                        target="_blank"
                      >
                        <i className="bx bx-link" />
                      </a>
                      <a
                        className="clipboard"
                        href="https://www.dicoding.com/certificates/NVP7K178GZR0"
                        target="_blank"
                      >
                        <i className="bx bx-clipboard" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End certicateion item */}
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div className="container">
            <div className="section-title">
              <h2>Awards</h2>
            </div>
            <div
              className="row portfolio-container"
              style={{ position: "relative", height: "437.75px" }}
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="public/assets/img/awards/bangkit-mentor.webp"
                    className="img-thumbnail"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Bangkit 2023 H1 - Mentor in Mobile Development Path</h4>
                    <div className="portfolio-links">
                      <a
                        href="public/assets/img/awards/bangkit-mentor.webp"
                        data-gallery="awardsGallery"
                        data-glightbox="type: image"
                        className="portfolio-details-lightbox"
                      >
                        <i className="bx bx-zoom-in" />
                      </a>
                      <a
                        className="clipboard"
                        href="https://fachridantm.me/public/assets/img/awards/bangkit-mentor.webp"
                        target="_blank"
                      >
                        <i className="bx bx-clipboard" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Awards item */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="public/assets/img/awards/gdsc-lead-graduate.webp"
                    className="img-thumbnail"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>GDSC Lead 2021 - Graduate</h4>
                    <div className="portfolio-links">
                      <a
                        href="public/assets/img/awards/gdsc-lead-graduate.webp"
                        data-gallery="awardsGallery"
                        data-glightbox="type: image"
                        className="portfolio-details-lightbox"
                      >
                        <i className="bx bx-zoom-in" />
                      </a>
                      <a
                        className="clipboard"
                        href="https://fachridantm.me/public/assets/img/awards/gdsc-lead-graduate.webp"
                        target="_blank"
                      >
                        <i className="bx bx-clipboard" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Awards item */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="public/assets/img/awards/bangkit-graduate.webp"
                    className="img-thumbnail"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Bangkit 2022 - Graduate in Mobile Development Path</h4>
                    <div className="portfolio-links">
                      <a
                        href="public/assets/img/awards/bangkit-graduate.webp"
                        data-gallery="awardsGallery"
                        data-glightbox="type: image"
                        className="portfolio-details-lightbox"
                      >
                        <i className="bx bx-zoom-in" />
                      </a>
                      <a
                        className="clipboard"
                        href="https://fachridantm.me/public/assets/img/awards/bangkit-graduate.webp"
                        target="_blank"
                      >
                        <i className="bx bx-clipboard" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Awards item */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="public/assets/img/awards/adc.webp"
                    className="img-thumbnail"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>HIMTI DEV - Best Participant in Android Developer Club</h4>
                    <div className="portfolio-links">
                      <a
                        href="public/assets/img/awards/adc.webp"
                        data-gallery="awardsGallery"
                        data-glightbox="type: image"
                        className="portfolio-details-lightbox"
                      >
                        <i className="bx bx-zoom-in" />
                      </a>
                      <a
                        className="clipboard"
                        href="https://fachridantm.me/public/assets/img/awards/adc.webp"
                        target="_blank"
                      >
                        <i className="bx bx-clipboard" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Awards item */}
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="public/assets/img/awards/olim-saintek-21-basket.webp"
                    className="img-thumbnail"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Olimpiade Saintek 2021 - Juara 1 Lomba Basket</h4>
                    <div className="portfolio-links">
                      <a
                        href="public/assets/img/awards/olim-saintek-21-basket.webp"
                        data-gallery="awardsGallery"
                        data-glightbox="type: image"
                        className="portfolio-details-lightbox"
                      >
                        <i className="bx bx-zoom-in" />
                      </a>
                      <a
                        className="clipboard"
                        href="https://fachridantm.me/public/assets/img/awards/olim-saintek-21-basket.webp"
                        target="_blank"
                      >
                        <i className="bx bx-clipboard" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Awards item */}
            </div>
          </div>
        </div>
      </section>
      {/* End Education Section */}
      {/* Start Experience Section */}
      <section id="experience" className="experience">
        {/* ======= Work Experience ======= */}
        <div className="container">
          <div className="section-title">
            <h2>Work</h2>
          </div>
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div
                className="col-md-12 mt-4 mt-md-0 icon-box"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <h4>Mobile Development (Android) Mentor</h4>
                <h5>
                  <a href="https://g.co/bangkit" target="_blank">
                    Bangkit Academy led by Google, Tokopedia, Gojek, &amp; Traveloka
                  </a>
                </h5>
                <h6>Feb 2023 - Present</h6>
                <h6>
                  <em>Contract</em>
                </h6>
                <p>
                  Bangkit is a unique career readiness program led by Google and
                  delivered with support from industry experts from their industry
                  partner like GoTo, Traveloka, and Deeptech Foundation. The program
                  is designed to provide participants with first-hand exposure to
                  real-world practicioners and prepare them with relevant skills for
                  a successful career in leading tech companies.
                </p>
                <p>
                  I am successfully selected to be 216 mentors from 556 applicants
                  as Mobile Developer (Android) Mentor. In Bangkit, mentor played a
                  crucial role, such as:
                </p>
                <p>✅ Helped contribute to 86% graduation rate</p>
                <p>
                  ✅ Beside academic achievement, mentor also provided community
                  support that boosted students motivation
                </p>
                <p>
                  ✅ In fact, about 91% students said that Mentor is between
                  "useful" to "very useful" for learning experience (Bangkit 2022
                  students survey)
                </p>
                <p>Responsibilities: </p>
                <ul>
                  <li>
                    Lead and assist a cohort of 25 students in a class from Mobile
                    Development (Android) learning, through a weekly consultation,
                    study group, and discord
                  </li>
                  <li>Helping instructor during ILT session</li>
                  <li>
                    Provide consultative support to study together and support each
                    other
                  </li>
                  <li>
                    Overall, provide a supportive learning environment that will
                    lead to a high graduation rate among my students, which is 86%
                    at minimum
                  </li>
                  <li>Allocate + 9 hours per week</li>
                </ul>
              </div>
              {/* End experience item */}
              <br />
              <div
                className="col-md-12 mt-4 mt-md-0 icon-box"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <h4>Content Specialist - Twitter</h4>
                <h5>
                  <a href="https://pacmann.io" target="_blank">
                    PACMANN
                  </a>
                </h5>
                <h6>Feb 2023 - Mar 2023</h6>
                <h6>
                  <em>Part-time</em>
                </h6>
                <p>
                  PACMANN is a research startup focusing on the application and
                  development of machine learning algorithms. We have implemented
                  several machine learning projects in different fields in Indonesia
                  and are currently offering classes for those who are interested in
                  learning about data modeling.
                </p>
                <p>Responsibilities: </p>
                <ul>
                  <li>
                    Coordinate with internal team to maintain and constantly update
                    editorial schedule for the Twitter Contents
                  </li>
                  <li>
                    Research related contents about Artificial intelligence, Machine
                    Learning, Data Engineering, Deep Learning, and Software
                    Engineering for content banks
                  </li>
                  <li>
                    Generate and share daily Twitter contents that build meaningful
                    connections and encourage the followers to interact actively
                  </li>
                  <li>Create a weekly report about Twitter insight</li>
                  <li>
                    Coordinate and execute the marketing strategy with all Marketing
                    teams
                  </li>
                  <li>Allocate 4 hours per day</li>
                </ul>
              </div>
              {/* End experience item */}
              <br />
              <div
                className="col-md-12 mt-4 mt-md-0 icon-box"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <h4>Android Developer</h4>
                <h5>
                  <a href="https://fishku.id" target="_blank">
                    Fishku Indonesia
                  </a>
                </h5>
                <h6>Jul 2022 - Apr 2023</h6>
                <h6>
                  <em>Self-employed</em>
                </h6>
                <p>
                  Fishku is a startup engaged in fisheries as a fish sales platform
                  with features that support fish freshness detection. Fishku is
                  incubated-startup by Google and Dikti and supported by Bangkit
                  Academy led by Google, GoTo, and Traveloka
                </p>
                <p>Responsibilities: </p>
                <ul>
                  <li>
                    Develop and maintain android apps from scratch for consumer-side
                  </li>
                  <li>Create robust and reliable code with clean architecture</li>
                  <li>Build and manage github organization</li>
                  <li>
                    Helping team to migrate project management tools by using Trello
                  </li>
                  <li>
                    Publish beta track into Google Play Store and reach 250+ testers
                  </li>
                  <li>
                    Launch{" "}
                    <a
                      href="https://play.google.com/store/apps/details?id=id.fishku.consumer"
                      target="_blank"
                    >
                      apps
                    </a>{" "}
                    into production track and reach 100+ downloads
                  </li>
                </ul>
              </div>
              {/* End experience item */}
              <br />
              <div
                className="col-md-12 mt-4 mt-md-0 icon-box"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <h4>Mobile Development (Android) Cohort</h4>
                <h5>
                  <a href="https://g.co/bangkit" target="_blank">
                    Bangkit Academy led by Google, Tokopedia, Gojek, &amp; Traveloka
                  </a>
                </h5>
                <h6>Jan 2022 - Sep 2022</h6>
                <h6>
                  <em>Apprenticeship</em>
                </h6>
                <p>
                  Bangkit is a unique career readiness program led by Google and
                  delivered with support from industry experts from their industry
                  partner like GoTo, Traveloka, and Deeptech Foundation. The program
                  is designed to provide participants with first-hand exposure to
                  real-world practicioners and prepare them with relevant skills for
                  a successful career in leading tech companies.
                </p>
                <p>
                  I am successfully selected to be 3,100 participants from 63,000
                  registrants as Mobile Developer (Android) Trainees and graduated
                  as Google Certified Associate Android Developer.
                </p>
                <p>Responsibilities: </p>
                <p>As an Individual, </p>
                <ul>
                  <li>
                    Attend all Bangkit Team Meeting and Instructor Led-Training
                    sessions, which has 3 types (soft skills, english, and tech)
                  </li>
                  <li>Finish every assignment for each week within deadline</li>
                  <li>Attend Weekly Consultation with Facilitator</li>
                  <li>
                    Finish all mandatory courses for Android Learning Path on
                    Dicoding platform
                  </li>
                </ul>
                <p>As a Team, </p>
                <ul>
                  <li>
                    Build capstone project namely Selidik Pasar a.k.a.{" "}
                    <a
                      href="projects/selasar.html"
                      data-gallery="selasarOnly"
                      data-glightbox="type: external"
                      className="portfolio-details-lightbox"
                    >
                      Selasar
                    </a>
                  </li>
                  <li>Project Manager at Selasar Team</li>
                  <li>Build android apps from scratch</li>
                </ul>
              </div>
              {/* End experience item */}
            </div>
          </div>
        </div>
        {/* End Work Experience  */}
        {/* ======= Organizational Experience ======= */}
        <div className="container">
          <div className="section-title">
            <h2>Organizational</h2>
          </div>
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div
                className="col-md-12 mt-4 mt-md-0 icon-box"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <h4>Staff of Regeneration and Advocacy Division</h4>
                <h5>
                  <a href="https://himtiuinjkt.or.id" target="_blank">
                    Himpunan Mahasiswa Teknik Informatika UIN Syarif Hidayatullah
                    Jakarta
                  </a>
                </h5>
                <h6>Jan 2021 - Jan 2022</h6>
                <p>
                  HIMTI UIN Syarif Hidayatullah Jakarta is a forum for friendship
                  and unification between students and alumni of the Informatics
                  Engineering Study Program at UIN Syarif Hidayatullah Jakarta, and
                  functions as an organizer of activities for student affairs,
                  reasoning and knowledge in the field of information technology.
                </p>
                <p>Responsibilities: </p>
                <ul>
                  <li>
                    Preparing active students from class of 2020 &amp; 2021 of HIMTI
                    UIN Syarif Hidayatullah Jakarta to continue the relay management
                    of HIMTI UIN Syarif Hidayatullah Jakarta
                  </li>
                  <li>
                    Give an attitude towards an event/campus policy that has an
                    impact on students
                  </li>
                  <li>
                    Convey students from class of 2017 - 2021 aspirations towards
                    the campus bureaucratic system
                  </li>
                </ul>
              </div>
              {/* End experience item */}
              <br />
              <div
                className="col-md-12 mt-4 mt-md-0 icon-box"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <h4>Staff of Information and Technology Department</h4>
                <h5>
                  <a
                    href="https://www.linkedin.com/company/ishlah-alhamid"
                    target="_blank"
                  >
                    Ikatan Silaturrahim Alumni Al Hamid (ISHLAH)
                  </a>
                </h5>
                <h6>Sep 2021 - Present</h6>
                <p>
                  Ikatan Silaturrahim Alumni Al Hamid (ISHLAH) is a forum for
                  friendship and unification between Al Hamid Islamic Boarding
                  School students and alumni, and functions as an organizer of
                  alumni activities and an introduction to information between
                  alumni
                </p>
                <p>Responsibilities: </p>
                <ul>
                  <li>
                    Maintenance website and every ISHLAH social media (Instagram,
                    LinkedIn, Youtube)
                  </li>
                  <li>
                    Delivering of information between alumni through social media
                    where there are 1,000+ alumni spread throughout Indonesia
                  </li>
                  <li>Manage live reports at every events</li>
                </ul>
              </div>
              {/* End experience item */}
            </div>
          </div>
        </div>
        {/* End Organizational Experience  */}
        {/* ======= Volunteer Experience ======= */}
        <div className="container">
          <div className="section-title">
            <h2>Volunteer</h2>
          </div>
          <div className="row">
            <div className="col-lg-12" data-aos="fade-up">
              <div
                className="col-md-12 mt-4 mt-md-0 icon-box"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <h4>Discord Manager Lead</h4>
                <h5>
                  <a href="https://goo.gle/googledevsid" target="_blank">
                    Google Developers Community: Indonesia
                  </a>
                </h5>
                <h6>Jul 2022 - Present</h6>
                <p>
                  Our{" "}
                  <a href="https://developers.google.com/community" target="_blank">
                    developer community
                  </a>{" "}
                  spans across the globe. Connect through chapter-hosted events,
                  join a program to fast-track success, or simply explore this space
                  to learn something new from the community.
                </p>
                <p>
                  Google for Developers helps developers build smarter, ship faster,
                  and simplify workflows with open, integrated solutions from
                  Google.
                  <a href="https://goo.gle/m/devsid" target="_blank">
                    Join our community
                  </a>{" "}
                  of creative developers and learn how to use the latest
                  technologies from AI and cloud, to mobile and web.
                </p>
                <p>Responsibilities: </p>
                <ul>
                  <li>
                    Help community manager to build an ecosystem through Discord
                    platform, harnessing its potential with a large membership base
                    of 12.8K+ members
                  </li>
                  <li>
                    Foster a welcoming and active community within the Discord
                    server
                  </li>
                  <li>
                    Monitor and enforce community guidelines and rules to maintain a
                    safe and respectful environment
                  </li>
                  <li>
                    Manage, organize, and promote events community event from{" "}
                    <a href="https://goo.gle/gdsc" target="_blank">
                      GDSC
                    </a>
                    ,{" "}
                    <a href="https://goo.gle/gdg" target="_blank">
                      GDG
                    </a>
                    ,{" "}
                    <a href="https://goo.gle/gde" target="_blank">
                      GDE
                    </a>
                    ,{" "}
                    <a href="https://goo.gle/wtm" target="_blank">
                      WTM
                    </a>
                  </li>
                  <li>
                    Provide assistance to members who encounter technical issues or
                    need help navigating the server
                  </li>
                  <li>
                    Create, organize, and maintain channels to facilitate
                    discussions and content sharing
                  </li>
                  <li>
                    Implement and manage bots to automate tasks, enhance user
                    experience, and ensure server security
                  </li>
                  <li>
                    Respond to member inquiries, provide guidance, and resolve
                    conflicts or issues as they arise
                  </li>
                  <li>
                    Collaborate with other managers &amp; moderators to make
                    informed decisions regarding server policies and improvements
                  </li>
                  <li>
                    Promote the Discord server through various platforms and
                    networks to grow the community
                  </li>
                  <li>
                    Develop and share engaging content, such as announcements,
                    updates, or resources, to keep members informed and interested
                  </li>
                  <li>
                    Analyze server metrics and gather feedback from members to make
                    data-driven improvements
                  </li>
                  <li>
                    Customize the server's appearance and settings to align with the
                    community's branding and objectives
                  </li>
                  <li>
                    Ensure server security by implementing appropriate measures to
                    prevent spam, trolling, and other disruptive activities
                  </li>
                  <li>
                    Develop and maintain clear and concise community guidelines and
                    rules for server members to follow
                  </li>
                  <li>
                    Assist new members in getting acclimated to the server and its
                    features
                  </li>
                  <li>
                    Regularly update and maintain server infrastructure to ensure
                    optimal performance
                  </li>
                  <li>
                    Actively seek feedback from server members to make improvements
                    and enhancements
                  </li>
                </ul>
              </div>
              {/* End experience item */}
              <br />
              <div
                className="col-md-12 mt-4 mt-md-0 icon-box"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <h4>GDG Co-Organizer</h4>
                <h5>
                  <a href="https://gdg.community.dev/gdg-jakarta/" target="_blank">
                    GDG Jakarta
                  </a>
                </h5>
                <h6>Aug 2022 - Jul 2022</h6>
                <p>
                  <a href="https://goo.gle/gdg" target="_blank">
                    Google Developer Groups (GDG)
                  </a>{" "}
                  are groups of local developers interested in Google products and
                  APIs. Starting from the Android platform, App Engine, Web,
                  Multiplatform, to API products such as Google Maps, YouTube,
                  Google Calendar, and others.
                </p>
                <p>
                  Each of these local developer groups, called GDGs, can host a
                  variety of technical activities for developers, from small
                  gatherings to watch our latest videos, to large gatherings with
                  tech demos and discussions, to hackathons.
                </p>
                <p>
                  Disclaimer: GDG Jakarta is an independent group; our activities
                  and the opinions expressed here should in no way be linked to
                  Google, the corporation. To learn more about the GDG program,
                  visit https://goo.gle/gdg
                </p>
                {/* <p>Responsibilities: </p>
        <ul>
          <li>Leading a community with 18 Core Team Members, 120 Members, and 900+ Followers on <a
              href="https://instagram.com/gdsc.uinjkt" target="_blank">Instagram</a></li>
          <li>Managing events, workshops, and weekly classes</li>
          <li>Helping member projects for Google Solution Challenges from Google Developers</li>
        </ul> */}
              </div>
              {/* End experience item */}
              <br />
              <div
                className="col-md-12 mt-4 mt-md-0 icon-box"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <h4>GDSC Lead</h4>
                <h5>
                  <a href="https://gdsc-uinjkt.github.io/" target="_blank">
                    GDSC UIN Syarif Hidayatullah Jakarta
                  </a>
                </h5>
                <h6>Aug 2022 - Jul 2022</h6>
                <p>
                  <a href="https://goo.gle/gdsc" target="_blank">
                    Google Developer Student Clubs (GDSC)
                  </a>{" "}
                  are community groups for college and university students who are
                  interested in Google Developers technologies. Students from all
                  undergraduate or graduate programs with an interest in growing as
                  a developer are welcome. By joining a GDSC, students grow their
                  knowledge in a peer-to-peer learning environment and build
                  solutions for local businesses and their community. This program
                  presented by Google Developers.
                </p>
                <p>
                  <a href="https://goo.gle/gdsc-leads" target="_blank">
                    Google Developer Student Club Leads
                  </a>{" "}
                  are community organizers. Like Googlers, they are leaders who
                  believe that technology can do extraordinary things for the world.
                  They have taken on the responsibility to impact students and
                  empower these students to impact their communities. Through this
                  experience they will not only be leaving a legacy of impact but
                  also growing as an individual and a meaningful contributor in the
                  greater developer ecosystem.
                </p>
                <p>
                  Their role as a Google Developer Student Club Lead (GDSC) will
                  challenge them and help them to grow as a leader.
                </p>
                <p>Responsibilities: </p>
                <ul>
                  <li>
                    Leading a community with 18 Core Team Members, 120 Members, and
                    900+ Followers on{" "}
                    <a href="https://instagram.com/gdsc.uinjkt" target="_blank">
                      Instagram
                    </a>
                  </li>
                  <li>Managing events, workshops, and weekly classes</li>
                  <li>
                    Helping member projects for Google Solution Challenges from
                    Google Developers
                  </li>
                </ul>
              </div>
              {/* End experience item */}
            </div>
          </div>
        </div>
        {/* End Volunteer Experience  */}
      </section>
      {/* End Experience Section */}
      {/* Start Project Section */}
      <section id="projects" className="portfolio">
        <div className="container">
          <div className="section-title">
            <h2>Projects</h2>
            <p>My Works</p>
          </div>
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-android">Android</li>
                <li data-filter=".filter-desktop">Desktop</li>
              </ul>
            </div>
          </div>
          <div className="row portfolio-container">
            <div className="col-lg-4 col-md-6 portfolio-item filter-android">
              <center>
                <h4>FI$HKU</h4>
              </center>
              <div className="portfolio-wrap">
                <img
                  src="public/assets/img/projects/details/fishku-details.png"
                  className="img-thumbnail"
                  alt=""
                />
                <div className="portfolio-info">
                  {/* <h4>FI$HKU</h4> */}
                  {/* Title if needed */}
                  <div className="portfolio-links">
                    <a
                      href="projects/fishku.html"
                      data-gallery="portfolioDetailsGallery"
                      data-glightbox="type: external"
                      className="portfolio-details-lightbox"
                    >
                      <i className="bx bx-info-circle" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-android">
              <center>
                <h4>Selidik Pasar (Selasar)</h4>
              </center>
              <div className="portfolio-wrap">
                <img
                  src="public/assets/img/projects/details/selasar-details.png"
                  className="img-thumbnail"
                  alt=""
                />
                <div className="portfolio-info">
                  {/* <h4>FI$HKU</h4> */}
                  {/* Title if needed */}
                  <div className="portfolio-links">
                    <a
                      href="projects/selasar.html"
                      data-gallery="portfolioDetailsGallery"
                      data-glightbox="type: external"
                      className="portfolio-details-lightbox"
                    >
                      <i className="bx bx-info-circle" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-android">
              <center>
                <h4>Bangkit Merch Store</h4>
              </center>
              <div className="portfolio-wrap">
                <img
                  src="public/assets/img/projects/details/bangkit-details.png"
                  className="img-thumbnail"
                  alt=""
                />
                <div className="portfolio-info">
                  {/* <h4>FI$HKU</h4> */}
                  {/* Title if needed */}
                  <div className="portfolio-links">
                    <a
                      href="projects/bangkit.html"
                      data-gallery="portfolioDetailsGallery"
                      data-glightbox="type: external"
                      className="portfolio-details-lightbox"
                    >
                      <i className="bx bx-info-circle" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-android">
              <center>
                <h4>Dicoding Story</h4>
              </center>
              <div className="portfolio-wrap">
                <img
                  src="public/assets/img/projects/details/dicoding-details.png"
                  className="img-thumbnail"
                  alt=""
                />
                <div className="portfolio-info">
                  {/* <h4>FI$HKU</h4> */}
                  {/* Title if needed */}
                  <div className="portfolio-links">
                    <a
                      href="projects/dicoding.html"
                      data-gallery="portfolioDetailsGallery"
                      data-glightbox="type: external"
                      className="portfolio-details-lightbox"
                    >
                      <i className="bx bx-info-circle" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-android">
              {/* <br> */}
              <center>
                <h4>Github Favorite</h4>
              </center>
              <div className="portfolio-wrap">
                <img
                  src="public/assets/img/projects/details/github-details.png"
                  className="img-thumbnail"
                  alt=""
                />
                <div className="portfolio-info">
                  {/* <h4>FI$HKU</h4> */}
                  {/* Title if needed */}
                  <div className="portfolio-links">
                    <a
                      href="projects/github.html"
                      data-gallery="portfolioDetailsGallery"
                      data-glightbox="type: external"
                      className="portfolio-details-lightbox"
                    >
                      <i className="bx bx-info-circle" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-android">
              <center>
                <h4>IBL Teams</h4>
              </center>
              <div className="portfolio-wrap">
                <img
                  src="public/assets/img/projects/details/ibl-details-1.png"
                  className="img-thumbnail"
                  alt=""
                />
                <div className="portfolio-info">
                  {/* <h4>FI$HKU</h4> */}
                  {/* Title if needed */}
                  <div className="portfolio-links">
                    <a
                      href="projects/ibl.html"
                      data-gallery="portfolioDetailsGallery"
                      data-glightbox="type: external"
                      className="portfolio-details-lightbox"
                    >
                      <i className="bx bx-info-circle" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-desktop">
              <center>
                <h4>Smart Villager</h4>
              </center>
              <div className="portfolio-wrap">
                <img
                  src="public/assets/img/projects/details/sv-details-1.png"
                  className="img-thumbnail"
                  alt=""
                />
                <div className="portfolio-info">
                  {/* <h4>FI$HKU</h4> */}
                  {/* Title if needed */}
                  <div className="portfolio-links">
                    <a
                      href="projects/sv.html"
                      data-gallery="portfolioDetailsGallery"
                      data-glightbox="type: external"
                      className="portfolio-details-lightbox"
                    >
                      <i className="bx bx-info-circle" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Project Section */}
      {/* Start Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
          </div>
          <div className="row mt-2">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-envelope" />
                <h3>Email</h3>
                <div className="social-links">
                  <a href="mailto:fachridantm@gmail.com" target="_blank">
                    fachridantm@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-link" />
                <h3>Social Network</h3>
                <div className="social-links">
                  <a
                    href="https://linkedin.com/in/fachridantm"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="bi bi-linkedin" />
                  </a>
                  <a href="https://x.com/fachridantm" target="_blank" className="x">
                    <i className="bi bi-twitter-x" />
                  </a>
                  <a
                    href="https://threads.net/@fachridantm"
                    target="_blank"
                    className="threads"
                  >
                    <i className="bi bi-threads" />
                  </a>
                  <a
                    href="https://instagram.com/fachridantm"
                    target="_blank"
                    className="instagram"
                  >
                    <i className="bi bi-instagram" />
                  </a>
                  <a
                    href="https://tiktok.com/@fachridantm"
                    target="_blank"
                    className="tiktok"
                  >
                    <i className="bi bi-tiktok" />
                  </a>
                  <a
                    href="https://github.com/fachridantm"
                    target="_blank"
                    className="github"
                  >
                    <i className="bi bi-github" />
                  </a>
                  <a
                    href="https://gitlab.com/fachridantm"
                    target="_blank"
                    className="gitlab"
                  >
                    <i className="bi bi-gitlab" />
                  </a>
                  <a
                    href="https://sptfy.com/fachridantm"
                    target="_blank"
                    className="spotify"
                  >
                    <i className="bi bi-spotify" />
                  </a>
                  <a
                    href="https://youtube.com/channel/UCO_C6AZ5TXmoUl29mkWxDxg"
                    target="_blank"
                    className="youtube"
                  >
                    <i className="bi bi-youtube" />
                  </a>
                  <a
                    href="https://twitch.tv/fachridantm"
                    target="_blank"
                    className="twitch"
                  >
                    <i className="bi bi-twitch" />
                  </a>
                  <a
                    href="https://g.dev/fachridantm"
                    target="_blank"
                    className="google-devs"
                  >
                    <i className="bi bi-code-square" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4 d-flex align-items-stretch">
              <div className="info-box">
                <i className="bx bx-share-alt" />
                <h3>Others</h3>
                <div className="social-links">
                  <a
                    href="https://discord.com/users/515252328551546890"
                    target="_blank"
                    className="discord"
                  >
                    <i className="bi bi-discord" />
                  </a>
                  <a
                    href="https://t.me/fachridantm"
                    target="_blank"
                    className="telegram"
                  >
                    <i className="bi bi-telegram" />
                  </a>
                  <a
                    href="https://snapchat.com/add/fachridantm"
                    target="_blank"
                    className="snapchat"
                  >
                    <i className="bi bi-snapchat" />
                  </a>
                  <a
                    href="https://fachridantm.medium.com/"
                    target="_blank"
                    className="medium"
                  >
                    <i className="bi bi-medium" />
                  </a>
                  <a
                    href="https://speakerdeck.com/fachridantm"
                    target="_blank"
                    className="speakerdeck"
                  >
                    <i className="bi bi-display" />
                  </a>
                  <a
                    href="https://linktr.ee/fachridantm"
                    target="_blank"
                    className="linktree"
                  >
                    <i className="bi bi-tree-fill" />
                  </a>
                  <a
                    href="https://paypal.me/fachridantm"
                    target="_blank"
                    className="paypal"
                  >
                    <i className="bi bi-paypal" />
                  </a>
                </div>
              </div>
            </div>
            {/* PHP Form
    <div class="col-md-6 mt-4 d-flex align-items-stretch">
      <div class="info-box">
        <i class="bx bx-question-mark"></i>
        <h3>Ask Me Anything!</h3>
        <br>
        <p>
          <form action="forms/contact.php" method="post" role="form" class="php-email-form mt-4">
          <div class="row">
            <div class="col-md-6 form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
            </div>
            <div class="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
            </div>
          </div>
          <div class="form-group mt-3">
            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
          </div>
          <div class="form-group mt-3">
            <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <div class="my-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div class="text-center"><button type="submit">Send Message</button></div>
        </form>
      </p>
    </div>
  </div>
      </div>
      */}
          </div>
        </div>
      </section>
      {/* End Contact Section */}
      {/* Vendor JS Files */}
      {/* Template Main JS File */}
    </>

  );
}