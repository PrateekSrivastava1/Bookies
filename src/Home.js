import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Product from "./Product";
import Carousal from "react-elastic-carousel";
import Firstwindow from "./Firstwindow";
import SocialMedia from "./SocialMedia";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import  FloatingSocialMedia  from "./FloatingSocialMedia";
import Footer from "./Footer";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Home() {
  // const trigger = () => {
  //   const trigger = document.querySelector("menu > .trigger");
  //   trigger.addEventListener("click", (e) => {
  //     e.currentTarget.parentElement.classList.toggle("open");
  //   });
  // };

  return (
    <>
      <Firstwindow />
      <div className="home">
        <div className="home_container">
          {/* <img
          className="home_image"
          src="https://wallpapercave.com/wp/wp4038697.jpg"
          alt=""
        /> */}
          <div className="home_row">
            <Product
              key="1"
              id="1"
              title="Harry Potter and the Philosopher's Stone"
              price={99}
              download={""}
              image="https://images-na.ssl-images-amazon.com/images/I/51ifu1aebKL._SX332_BO1,204,203,200_.jpg"
              rating={5}
            />
            <Product
              key="2"
              id="2"
              title="Great Stories for Children"
              download={""}
              price={141}
              image="https://images-na.ssl-images-amazon.com/images/I/51H2M2jWmvL._SX311_BO1,204,203,200_.jpg"
              rating={3}
            />
            <Product
              key="3"
              id="3"
              title="The Complete Novels of Sherlock Holmes"
              price={243}
              download={""}
              image="https://images-na.ssl-images-amazon.com/images/I/81StezluKUS.jpg"
              rating={3}
            />
            <Product
              key="4"
              id="4"
              title="Think & Grow Rich"
              price={99}
              image="https://images-na.ssl-images-amazon.com/images/I/41BctxOfzzS._SX460_BO1,204,203,200_.jpg"
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              key="6"
              id="6"
              title="Dynamic Programming Coding interviews"
              price={0}
              download={
                "https://drive.google.com/file/d/1BBS1PpmpoamYCj8KZ4o_hkskVh7QtvtJ/view?usp=sharing"
              }
              image="https://images-na.ssl-images-amazon.com/images/I/81io-ZZJjEL.jpg"
              rating={4}
              hideButton
            />
            <Product
              key="7"
              id="7"
              title="Effective Java"
              price={0}
              download="https://drive.google.com/file/d/1qk2jQ7o-_BcmJ7UaD9zDrYpiyZZqYqOM/view?usp=sharing"
              image="https://m.media-amazon.com/images/I/51wl8cINKYL.jpg"
              rating={4}
              hideButton
            />
            <Product
              key="8"
              id="8"
              title="THE Algorithm Design MANUAL"
              price={0}
              image="https://images-na.ssl-images-amazon.com/images/I/61ExhOMbJLL.jpg"
              download={
                "https://drive.google.com/file/d/1LAL-9Oet_ydv647cHJWw8h3UcN3LaWMH/view?usp=sharing"
              }
              rating={4}
              hideButton
            />
          </div>
          <div className="home_row">
            <Product
              key="9"
              id="9"
              title="SQL Cookbook"
              price={0}
              image="https://images-na.ssl-images-amazon.com/images/I/919N5M6kIeL.jpg"
              download={
                "https://drive.google.com/file/d/1D19aCg2wg9ne4c4pUhyY2GFtfWi8slB-/view?usp=sharing"
              }
              rating={4}
              hideButton
            />
            <Product
              key="10"
              id="10"
              title="Python Crash Course"
              price={0}
              image="https://images-na.ssl-images-amazon.com/images/I/81vmJCNCm6L.jpg"
              download={
                "https://drive.google.com/file/d/1d0YrY5b8xV1XhooKvSmj4SlloJMA9vY6/view?usp=sharing"
              }
              rating={5}
              hideButton
            />
            <Product
              key="11"
              id="11"
              title="Pro Git"
              price={0}
              image="https://git-scm.com/images/progit2.png"
              download={
                "https://drive.google.com/file/d/1UdfsQoTZygWk28zfPL-xunFtmrPz7v4H/view?usp=sharing"
              }
              rating={4}
              hideButton
            />
          </div>

          <div className="home_row">
            <Carousal breakPoints={breakPoints} className="slide">
              <Product
                key="12"
                id="12"
                title="Striver 180 Questions (!Downloadable)"
                price={0}
                download={
                  "https://docs.google.com/document/d/1SM92efk8oDl8nyVw8NHPnbGexTS9W-1gmTEYfEurLWQ/edit"
                }
                image="https://i.ibb.co/5Gkh8m4/striver.png"
                rating={4}
                hideButton
              />
              <Product
                key="13"
                id="13"
                title="Dynamic Programming Coding interviews"
                price={0}
                download={
                  "https://drive.google.com/file/d/1BBS1PpmpoamYCj8KZ4o_hkskVh7QtvtJ/view?usp=sharing"
                }
                image="https://images-na.ssl-images-amazon.com/images/I/81io-ZZJjEL.jpg"
                rating={4}
                hideButton
              />
              <Product
                key="14"
                id="14"
                title="500 Numerical Aptitude QnA"
                price={0}
                download={
                  "https://drive.google.com/file/d/1yOJz7BSlTTUJssZfBl-wetY2P7yaOmPT/view?usp=sharing"
                }
                image="https://i.ibb.co/CVNtGPS/Aptitude.png"
                rating={4}
                hideButton
              />
              <Product
                key="15"
                id="15"
                title="Amazon Interview Questions"
                price={0}
                image="https://i.ibb.co/jH9PnT0/amazon-thumbnail.png"
                download={
                  "https://drive.google.com/file/d/1eFs_1hIzvkSvv3MwpjZ5GyIWaD3dbik_/view?usp=sharing"
                }
                rating={4}
                hideButton
              />
              <Product
                key="16"
                id="16"
                title="Airbnb Interview Questions"
                price={0}
                download={
                  "https://drive.google.com/file/d/17XHhkvXZWz8_cycukj5bfKNYXBvn6YcX/view?usp=sharing"
                }
                image="https://i.ibb.co/D5wfgL1/airbnb.png"
                rating={4}
                hideButton
              />

              <Product
                key="17"
                id="17"
                title="Cracking the Coding Interview "
                price={570}
                download={""}
                image="https://images-na.ssl-images-amazon.com/images/I/41p1cRZGtaL._SX348_BO1,204,203,200_.jpg"
                rating={5}
              />
              <Product
                key="18"
                id="18"
                title="SSB Interview: The Complete Guide"
                price={199}
                download={""}
                image="https://images-na.ssl-images-amazon.com/images/I/51aQBb0WR+L._SX331_BO1,204,203,200_.jpg"
                rating={4}
              />
              <Product
                key="19"
                id="19"
                title="IT Interview Guide for Freshers: Crack your IT interview with confidence"
                price={520}
                download={""}
                image="https://images-na.ssl-images-amazon.com/images/I/51T-3LbIYUL._SX404_BO1,204,203,200_.jpg"
                rating={4}
              />
            </Carousal>
          </div>

          <div className="home_row">
            <Product
              key="20"
              id="20"
              title="Jurassic Park"
              price={374}
              image="https://m.media-amazon.com/images/P/0394588169.01._SCLZZZZZZZ_SX500_.jpg"
              rating={4}
            />
            <Product
              key="21"
              id="21"
              title="Beware it's the Defective Detectives!"
              price={125}
              image="https://images-eu.ssl-images-amazon.com/images/I/51kZplRbUIL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
              download
              rating={5}
            />

            <Product
              key="22"
              id="22"
              title="Pinki And The Patient"
              price={100}
              image="https://images-na.ssl-images-amazon.com/images/I/51cdlLfD4SL._SX331_BO1,204,203,200_.jpg"
              download
              rating={4}
            />
          </div>
        </div>
      </div>

      <Footer />
      <FloatingSocialMedia/>
    </>
  );
}

export default Home;
