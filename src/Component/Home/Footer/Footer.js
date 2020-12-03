import React from "react";
import "../../../Component/Home/Footer/Footer.css";


const style = {
  backgroundImage: "url(../../../images/Mask Group 4.png)",
  color:"black",
  fontSize:"45px",
  backgroundSize:"cover"

}

const Footer = () => {
  return (
    <section className="p-2">
      <div className="row" class="row-container">
        <div style={style} className="d-flex col-lg-12 justify-content-between background-footer">
          
          <div>
           <a href="#">Yt</a> <br/> <br/>
           <a href="#">Yt</a> <br/> <br/>
           <a href="#">Yt</a> <br/> <br/>
          </div>

          <div>
          <a href="#">Yt</a> <br/> <br/>
           <a href="#">Yt</a> <br/> <br/>
           <a href="#">Yt</a> <br/> <br/>
          </div>

          <div>
          <a href="#">Yt</a> <br/> <br/>
           <a href="#">Yt</a> <br/> <br/>
           <a href="#">Yt</a> <br/> <br/>
          </div>

          <div>
          <a href="#">Yt</a> <br/> <br/>
           <a href="#">Yt</a> <br/> <br/>
           <a href="#">Yt</a> <br/> <br/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
