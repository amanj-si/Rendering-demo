
"use client";

import Carousel from 'react-bootstrap/Carousel';
import MainAfter from '../public/images/MainAfter.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ImageSlider() {
    return (
      <Carousel>
        <Carousel.Item>
          <img src={MainAfter.src}  className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={MainAfter.src}  className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={MainAfter.src}  className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}


