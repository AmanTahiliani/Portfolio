import React, { Component } from "react";
import Slider from "react-slick";
import publicationData from "./publications.json"
import Publication  from "./Publication";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa"
export default class SimpleSlider extends Component {
    constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div style={{height:"auto"}}>
        <Slider ref={c => (this.slider = c)} {...settings}>
        {publicationData.map(({title,authors, publish_date, abstract,link}) =>(
          <Publication title={title} authors={authors} publish_date={publish_date} abstract={abstract} link={link}/>
        ))}
        </Slider>
        <div style={{ textAlign: "center"}}>
            <FaArrowAltCircleLeft onClick={this.previous} style={{marginTop:"40px",marginBottom:"40px",borderRadius:"3em" ,fontSize:"40px", color:"aquamarine"}}/>

            <FaArrowAltCircleRight onClick={this.next} style={{marginTop:"40px", marginBottom:"40px", borderRadius:"3em",fontSize:"40px",marginLeft:"30px", color:"salmon"}}/>
        </div>
      </div>
    );
  }
}
