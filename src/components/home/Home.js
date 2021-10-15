import React from "react";
import "./home.css";
import pic from "../../images/home_photo.png";
import { FaInstagram, FaSnapchatGhost, FaFacebookF } from "react-icons/fa";
import TopBanner from "../topBanner/TopBanner";
import background from "../../images/bg_img.jpeg";

function Home() {
  return (
    <>
      <TopBanner
        image={background}
        h1_text="Matin"
        h1_span="Arshad"
        h2_text="Web Developer"
        h2_span="I'm a"
      />
      <div className="home_wrapper">
        <div className="home">
          <div className="home_top">
            <div className="home_top_img">
              <img src={pic} alt="" />
            </div>
            <div className="home_top_content">
              <h1>Matin Arshad</h1>
              <h5>Frontend-developer</h5>
              <div className="home_top_content_icon">
                <div className="home_top_content_icon_con">
                  <FaInstagram />
                </div>
                <div className="home_top_content_icon_con">
                  <FaSnapchatGhost />
                </div>
                <div className="home_top_content_icon_con">
                  <FaFacebookF />
                </div>
              </div>
            </div>
          </div>
          <div className="home_bottom">
            <div className="home_bottom_about">
              <h3>About Me</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                excepturi perferendis itaque repellendus, adipisci cupiditate
                optio exercitationem commodi vero eos consectetur? Eius illo
                esse id, atque soluta nobis! Repellendus, iste!
              </p>
            </div>

            <div className="home_bottom_about_right">
              <ul class="myinfo">
                <li>
                  <span class="title">Age</span>
                  <span class="value">24</span>
                </li>
                <li class="">
                  <span class="title">Residence</span>
                  <span class="value">Nelson</span>
                </li>
                <li>
                  <span class="title">Address</span>
                  <span class="value">Nelson</span>
                </li>
                <li>
                  <span class="title">e-mail</span>
                  <span class="value">
                    <a href="mailto:email@example.com">email@example.com</a>
                  </span>
                </li>
                <li>
                  <span class="title">Phone</span>
                  <span class="value">07405466464</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
