import React from "react";
import ImageLoader from "./image-loader";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Activity = (props) => {
  const el = props.el;
  const navigate =useNavigate()

  return (
    <section className="home-component">
      <section className="activity activity-background" onClick={() =>navigate(`/selectedCateg/${el._id}`)}>
        <ImageLoader alt={el.nomcategorie} src={el.imagecategorie} />
        <div className="description">
          <h2>{el.nomcategorie}</h2>
        </div>
      </section>
      <div id={el._id} className="collapse" style={{ color: "white" }}>
        <div className="container">
          <div style={{ height: "100px" }}></div>

          <div className="row accordion__columns">
            <div className="submenu-images">
              <img className="submenu-image" src={el.imagecategorie} alt="" />
            </div>
            <div className="submenu-paragraphes"></div>
          </div>

          <div style={{ height: "100px" }}></div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
