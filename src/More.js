import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Product from "./Product";
import Carousal from "react-elastic-carousel";
import Firstwindow from "./Firstwindow";
import SocialMedia from "./SocialMedia";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import FloatingSocialMedia from "./FloatingSocialMedia";
import Footer from "./Footer";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function More() {
  return (
    <>
      {/* <Firstwindow /> */}
      <div className="home more">
        <div className="home_container">
          <div className="home_row">
            <Product
              key="1"
              id="1"
              title="Bash scripting cheatsheet"
              price={0}
              download={"https://devhints.io/bash"}
              image="https://i.ibb.co/zXD8cSk/bash-CHEATSHEAT.png"
              rating={5}
              hideButton
            />
            <Product
              key="2"
              id="2"
              title="The C Cheat Sheet"
              download={
                "https://sites.ualberta.ca/~ygu/courses/geoph624/codes/C.CheatSheet.pdf"
              }
              price={0}
              image="https://i.ibb.co/KKN6wVT/C-CHEATSHEAT.png"
              rating={4}
              hideButton
            />
            <Product
              key="3"
              id="3"
              title="Cheatsheets for Data Scientists"
              price={0}
              download={
                "https://www.datacamp.com/community/data-science-cheatsheets"
              }
              image="https://i.ibb.co/JRYb0Kz/Data-science-CHEATSHEAT.png"
              rating={5}
              hideButton
            />
            <Product
              key="4"
              id="4"
              title="GIT CHEAT SHEET"
              price={0}
              download={
                "https://education.github.com/git-cheat-sheet-education.pdf"
              }
              image="https://i.ibb.co/4mP9tZ0/git-CHEATSHEAT.png"
              rating={5}
              hideButton
            />
          </div>
          <div className="home_row">
            <Product
              key="6"
              id="6"
              title="CSS CheatSheet"
              price={0}
              download={"https://htmlcheatsheet.com/css/"}
              image="https://i.ibb.co/PgJp25S/CSS-CHEATSHEAT.png"
              rating={4}
              hideButton
            />
            <Product
              key="7"
              id="7"
              title="A Complete Guide to Flexbox"
              price={0}
              download="https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
              image="https://i.ibb.co/J7dxKNw/CSS-flex-CHEATSHEAT.png"
              rating={5}
              hideButton
            />
            <Product
              key="8"
              id="8"
              title="A Complete Guide to Grid"
              price={0}
              image="https://i.ibb.co/ftpsB64/grid-CHEATSHEAT.png"
              download={
                "https://drive.google.com/file/d/1LAL-9Oet_ydv647cHJWw8h3UcN3LaWMH/view?usp=sharing"
              }
              rating={5}
              hideButton
            />
          </div>
          <div className="home_row">
            <Product
              key="9"
              id="9"
              title="HTML CheatSheet"
              price={0}
              image="https://i.ibb.co/Df6d6nr/HTML-CHEATSHEAT.png"
              download={"https://htmlcheatsheet.com/"}
              rating={4}
              hideButton
            />
            <Product
              key="10"
              id="10"
              title="Java Cheat Sheet"
              price={0}
              image="https://i.ibb.co/qNdxCtn/java-CHEATSHEAT.png"
              download={
                "https://programmingwithmosh.com/wp-content/uploads/2019/07/Java-Cheat-Sheet.pdf"
              }
              rating={5}
              hideButton
            />
            <Product
              key="11"
              id="11"
              title="JavaScript -Codecademy"
              price={0}
              image="https://i.ibb.co/Qpmyr6B/js-CHEATSHEAT.png"
              download={
                "https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/cheatsheet"
              }
              rating={4}
              hideButton
            />
          </div>

          <div className="home_row">
            <Product
              key="12"
              id="12"
              title="JavaScript Cheat Sheat"
              price={0}
              download={"https://htmlcheatsheet.com/js/"}
              image="https://i.ibb.co/Qpmyr6B/js-CHEATSHEAT.png"
              rating={4}
            />
            <Product
              key="13"
              id="13"
              title="JavaScript Regex Cheatsheet"
              price={0}
              image="https://i.ibb.co/Qpmyr6B/js-CHEATSHEAT.png"
              download={"https://www.debuggex.com/cheatsheet/regex/javascript"}
              rating={5}
              hideButton
            />

            <Product
              key="14"
              id="14"
              title="JavaScript WorldWide Cheatsheet - Cheatography (JavaScript)"
              price={0}
              image="https://i.ibb.co/Qpmyr6B/js-CHEATSHEAT.png"
              download={
                "https://cheatography.com/davechild/cheat-sheets/javascript/pdf/"
              }
              rating={4}
              hideButton
            />
          </div>
          <div className="home_row">
            <Product
              key="15"
              id="15"
              title="jQuery CheatSheet"
              price={0}
              download={"https://htmlcheatsheet.com/jquery/"}
              image="https://i.ibb.co/kD4Mr1h/jquery-CHEATSHEAT.png"
              rating={4}
              hideButton
            />
            <Product
              key="16"
              id="16"
              title="Vue Essential Cheatsheet -Vue Mastery"
              price={0}
              image="https://i.ibb.co/rf7c4D0/Vue.png"
              download={
                "https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf"
              }
              rating={5}
              hideButton
            />

            <Product
              key="17"
              id="17"
              title="Swift and C# Quick Reference"
              price={0}
              image="https://i.ibb.co/VSwvKcC/swift-CHEATSHEAT.png"
              download={
                "https://www.globalnerdy.com/wordpress/wp-content/uploads/2015/03/SwiftCSharpPoster.pdf"
              }
              rating={4}
              hideButton
            />
            <Product
              key="18"
              id="18"
              title="Perl Reference Card"
              price={0}
              image="https://i.ibb.co/jLY4MWf/perl-CHEATSHEAT.png"
              download={
                "https://cheatography.com/davechild/cheat-sheets/javascript/pdf/"
              }
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              key="19"
              id="19"
              title="Comprehensive Python Cheatsheet"
              price={0}
              download={"https://gto76.github.io/python-cheatsheet/"}
              image="https://i.ibb.co/YQ6Svqw/python-CHEATSHEAT.png"
              rating={4}
            />
            <Product
              key="20"
              id="20"
              title="Python WorldWide Cheatsheet"
              price={0}
              image="https://i.ibb.co/YQ6Svqw/python-CHEATSHEAT.png"
              download={
                "https://cheatography.com/davechild/cheat-sheets/python/pdf/"
              }
              rating={5}
              hideButton
            />

            <Product
              key="21"
              id="21"
              title="Ruby Cheat Sheet"
              price={0}
              image="https://i.ibb.co/7KRgfxK/RUBY-CHEATSHEAT.png"
              download={
                "https://www.codeconquest.com/wp-content/uploads/Ruby-Cheat-Sheet-by-CodeConquestDOTcom.pdf"
              }
              rating={4}
              hideButton
            />
            <Product
              key="23"
              id="23"
              title="SQL Cheat Sheet"
              price={0}
              image="https://i.ibb.co/0Q9v4f6/sql-CHEATSHEAT.png"
              download={
                "https://s3-us-west-2.amazonaws.com/dbshostedfiles/dbs/sql_cheat_sheet_mysql.pdf"
              }
              rating={4}
              hideButton
            />
          </div>
        </div>
      </div>

      <Footer />
      <FloatingSocialMedia />
    </>
  );
}

export default More;
