import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://wallpapercave.com/wp/wp4038697.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="1"
            title="Careview Non-Woven Reuseable Fabric N95 Mask (White, Pack of 10)"
            price={832}
            image="https://images-na.ssl-images-amazon.com/images/I/61WF3gkx8bL._SL1080_.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="LG 235 L 4 Star Inverter Direct-Cool Single Door Refrigerator"
            price={19990}
            image="https://images-na.ssl-images-amazon.com/images/I/71g6DgrFQJL._SL1500_.jpg"
            rating={3}
          />
          <Product
            id="2"
            title="wolpin Vinyl Self Adhesive Sticker Wallpaper, 45 X 500 CM"
            price={19990}
            image="https://images-na.ssl-images-amazon.com/images/I/71ohtkj8w-L._SL1090_.jpg"
            rating={3}
          />
          <Product
            id="2"
            title="US Polo Association Men's Solid Regular Fit Polo"
            price={1199}
            image="https://m.media-amazon.com/images/I/81USTq+tGzL._UL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row row_repeat no">
          <Product
            id="6"
            title=""
            price={1}
            image="https://i.ibb.co/qdxd6V1/fathers-day.jpg"
            rating={1}
          />
        </div>
        <div className="home_row">
          <Product
            id="3"
            title="OnePlus Smart Band: 13 Exercise Modes, Blood Oxygen Saturation (SpO2), Heart Rate & Sleep Tracking, 5ATM+Water & Dust Resistant(Android & iOS Compatible)"
            price={2499}
            image="https://images-na.ssl-images-amazon.com/images/I/61XPTRJZcCL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1-inch AMOLED Color Display, Magnetic Charging, 2 Weeks Battery Life, Personal Activity Intelligence (PAI), Women’s Health Tracking"
            price={2499}
            image="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="(Renewed) MI 5ATM 5 Smart Band (Black, 2 Weeks Battery Life)"
            price={2199}
            image="https://images-na.ssl-images-amazon.com/images/I/31x-J%2BtVmgS.jpg"
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id="7"
            title="boAt Stone 200 3W Bluetooth Speaker(Orange)"
            price={999}
            image="https://images-na.ssl-images-amazon.com/images/I/814bMyDCONL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="8"
            title="boAt Stone 650 10W Bluetooth Speaker(Red)"
            price={1299}
            image="https://images-na.ssl-images-amazon.com/images/I/71u53d%2BHJ-L._SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row row_repeat no">
          <Product
            id="9"
            title=""
            price={1}
            image="https://i.ibb.co/W30zdXZ/wfh.jpg"
            rating={1}
          />
        </div>

        <div className="home_row">
          <Product
            id="10"
            title="Epson EcoTank L3150 Wi-Fi All-in-One Ink Tank Printer (Black)"
            price={13698}
            image="https://images-na.ssl-images-amazon.com/images/I/51VC5qV7cQL._SL1000_.jpg"
            rating={4}
          />
          <Product
            id="11"
            title="HP 678 Tri-Color Ink Cartridge"
            price={809}
            image="https://images-na.ssl-images-amazon.com/images/I/71KmvDHtyHL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="12"
            title="Canon Pixma G3000 All-in-One Wireless Ink Tank Colour Printer"
            price={13849}
            image="https://images-na.ssl-images-amazon.com/images/I/61saGX0RILL._SL1040_.jpg"
            rating={5}
          />

          <Product
            id="13"
            title="Epson 6641 Black Ink Bottle - 70 ml"
            price={299}
            image="https://images-na.ssl-images-amazon.com/images/I/411kZc11THL.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
