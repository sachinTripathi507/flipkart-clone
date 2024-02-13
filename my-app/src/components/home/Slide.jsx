import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { Box, Typography, Button, Divider, styled } from '@mui/material';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const Slide = ({ data, title, timer }) => {

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const Completionist = () => <span>You are good to go!</span>;

    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span>{hours}:{minutes}:{seconds}</span>;
        }
    };
    const responsive = {

        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const Component = styled(Box)`
    margin-top: 10px;
    background: #ffffff;

 `
    const Deal = styled(Box)`
    padding:15px 20px;
    display:flex;

 `
    const Timer = styled(Box)`
    display: flex;
    margin-left:10px;
    align-items: center;
    color: #7f7f7f;
`
    const Dealtext = styled(Typography)`
    font-size:22px;
    fint-weight:600;
    line-height:32px;
    margin-right:25px;
    `
    const Viewallbutton = styled(Button)`
    margin-left:auto;
    background-color:#2874f0 ;
    border-radius: 2px;
    font-size: 13px;
    font-weight: 600;`

    const Image = styled('img')`
   width:auto;
   height:150px;

    `

    const Text = styled(Typography)`
    font-size:14px;
    margin-top:3px;`
    return (
        <Component>
            <Deal>
                <Dealtext>{title}</Dealtext>
                {timer &&
                    <Timer>
                        <img src={timerURL} alt='timer' style={{ width: 24 }} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Timer>}
                <Viewallbutton variant='contained' style={{ margin: '0 20 0 6' }}>View All</Viewallbutton>
            </Deal>
            <Divider />
            <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                showDots={false}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px">
                {
                    data.map(product => (
                        <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                            < Box textAlign='center' style={{ padding: '25px 15px' }} >
                                <Image id={product.id.toString()} src={product.url} alt="data" />
                                <Text style={{ color: 'black', }}><b>{product.title.shorttitle}</b></Text>
                                <Text style={{ color: 'green', }}>{product.discount}</Text>
                                <Text style={{ color: 'grey', opacity: '.6' }}>{product.tagline}</Text>
                            </ Box>
                        </Link>
                    ))
                }

            </Carousel>
        </Component>

    )
}

export default Slide