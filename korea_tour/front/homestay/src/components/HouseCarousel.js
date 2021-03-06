import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HouseDetailCss/Carousel.css';
import { URL } from '_utils/api';
import { img } from '_utils/api';
import { useParams } from 'react-router-dom';

function HouseCarousel(props) {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        className:"carousel11"
      };

    const [content, setContent] = useState(null);
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(null);


    let { houseNum } = useParams();

    useEffect( () => {
        const getModalPhotos = async () => {
            try {
                setContent(null);
                setError(null);
                setLoading(true);
                const response = await axios.get(
                    `${URL}/${houseNum}/photos`
                );
                setContent(response.data.photo);
            } catch(e) {
                setError(e);
            }
            setLoading(false);
        };
        getModalPhotos();
    }, []);

    if (loading) return <p>로딩중....</p>;
    if (error) return <p>에러가 발생했습니다.!!</p>;
    if (!content) return null;


    return (
        <div>
            <Slider {...settings}>
            {
                content.map((i)=>{  
                    return ( <div className="modal-imgbox">
                    <img src={i.photoName} className="carousel-img" />
                    </div>
                    )
                })
            }
            </Slider>
            
        </div>
    );
}

export default HouseCarousel;