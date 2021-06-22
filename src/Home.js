import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Product from "./Product";
import Carousal from "react-elastic-carousel";
import Firstwindow from "./Firstwindow";

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
              title="Book Name"
              price={832}
              download={
                "https://drive.google.com/file/d/1pRVj9kwO8jgxUW5S5u_V5sdWbESysYWc/view?usp=sharing"
              }
              image="https://images-na.ssl-images-amazon.com/images/I/61WF3gkx8bL._SL1080_.jpg"
              rating={5}
            />
            <Product
              key="2"
              id="2"
              title="Book Name"
              price={19990}
              image="https://images-na.ssl-images-amazon.com/images/I/71g6DgrFQJL._SL1500_.jpg"
              rating={3}
            />
            <Product
              key="3"
              id="3"
              title="Book Name"
              price={19990}
              image="https://images-na.ssl-images-amazon.com/images/I/71ohtkj8w-L._SL1090_.jpg"
              rating={3}
            />
            <Product
              key="4"
              id="4"
              title="Book Name"
              price={1199}
              image="https://m.media-amazon.com/images/I/81USTq+tGzL._UL1500_.jpg"
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
            />
            <Product
              key="7"
              id="7"
              title="Effective Java"
              price={0}
              download="https://drive.google.com/file/d/1qk2jQ7o-_BcmJ7UaD9zDrYpiyZZqYqOM/view?usp=sharing"
              image="https://m.media-amazon.com/images/I/51wl8cINKYL.jpg"
              rating={4}
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
            />
          </div>

          <div className="home_row">
            <p className="lorem23">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
              quae necessitatibus non natus nulla culpa vitae! Accusantium nobis
              dolores iusto explicabo delectus animi eligendi nulla excepturi
              eaque odit. Ad ipsum officia sunt quidem exercitationem? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Maxime quae
              necessitatibus non natus nulla culpa vitae! Accusantium nobis
              dolores iusto explicabo delectus animi eligendi nulla excepturi
              eaque odit. Ad ipsum officia sunt quidem exercitationem? Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Maxime quae
              necessitatibus non natus nulla culpa vitae! Accusantium nobis
              dolores iusto explicabo delectus animi eligendi nulla excepturi
              eaque odit. Ad ipsum officia sunt quidem exercitationem?
            </p>
          </div>

          <div className="home_row">
            <Carousal breakPoints={breakPoints}>
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
              />
              <Product
                key="14"
                id="14"
                title="500 Numerical Aptitude QnA"
                price={0}
                download={"https://drive.google.com/file/d/1yOJz7BSlTTUJssZfBl-wetY2P7yaOmPT/view?usp=sharing"}
                image="https://i.ibb.co/CVNtGPS/Aptitude.png"
                rating={4}
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
              />

              <Product
                key="17"
                id="17"
                title="Epson 6641 Black Ink Bottle - 70 ml"
                price={299}
                download={""}
                image="https://images-na.ssl-images-amazon.com/images/I/411kZc11THL.jpg"
                rating={4}
              />
              <Product
                key="18"
                id="18"
                title="Epson 6641 Black Ink Bottle - 70 ml"
                price={299}
                download={""}
                image="https://images-na.ssl-images-amazon.com/images/I/411kZc11THL.jpg"
                rating={4}
              />
              <Product
                key="19"
                id="19"
                title="Epson 6641 Black Ink Bottle - 70 ml"
                price={299}
                download={""}
                image="https://images-na.ssl-images-amazon.com/images/I/411kZc11THL.jpg"
                rating={4}
              />
              
            </Carousal>
          </div>

          <div className="home_row">
            <Product
              key="20"
              id="20"
              title="HP 678 Tri-Color Ink Cartridge"
              price={809}
              image="https://images-na.ssl-images-amazon.com/images/I/71KmvDHtyHL._SL1500_.jpg"
              rating={4}
            />
            <Product
              key="21"
              id="21"
              title="Canon Pixma G3000 All-in-One Wireless Ink Tank Colour Printer"
              price={13849}
              image="https://images-na.ssl-images-amazon.com/images/I/61saGX0RILL._SL1040_.jpg"
              rating={5}
            />

            <Product
              key="22"
              id="22"
              title="Epson 6641 Black Ink Bottle - 70 ml"
              price={299}
              image="https://images-na.ssl-images-amazon.com/images/I/411kZc11THL.jpg"
              rating={4}
            />
          </div>
        </div>

        {/* <menu class="open">
        <Link href="#" class="action">
          <i class="fab fa-dribbble"></i>
        </Link>
        <Link href="#" class="action">
          <i class="fab fa-instagram"></i>
        </Link>
        <Link href="#" class="action">
          <i class="fab fa-twitter"></i>
        </Link>
        <Link href="#" class="action">
          <i class="fab fa-facebook-f"></i>
        </Link>
        <Link href="#" onClick={trigger} class="trigger">
          <i class="fas fa-plus"></i>
        </Link>
      </menu> */}
      </div>
    </>
  );
}

export default Home;
