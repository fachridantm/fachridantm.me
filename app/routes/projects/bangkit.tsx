import type { MetaFunction } from "@vercel/remix";

export const config = { runtime: "edge" };

export const meta: MetaFunction = () => [{ title: "Bangkit Merch Store" }];

export default function Bangkit() {
  return (
    <>
      <main id="main">
        <div id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <h2 className="portfolio-title">Bangkit Merch Store</h2>
                <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    <img
                      src="/img/projects/details/bangkit-details.png"
                      width="100%"
                      height="100%"
                      alt=""
                    />
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
      </main>
    </>
  );
}