import React, { Fragment } from "react";
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const CustomerSaying = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }
    return (
        <Fragment>
            <div className='bg-customer'>
                <div className='container customer customer_top'>
                    <h1 className='customer-text customer_bottom'>What our customers are saying?</h1>
                    <Carousel infinite={true} autoPlay={true} responsive={responsive}>
                        <div className='row customer-main'>
                            <div className=''>
                                <p className='customer-type'>“It’s my pleasure today to visit Rainy. A great and memorable experience to see the silent but giant steps of this institution. I realized the passion and love towards the water conservation.”</p>
                                <h6 className='customer-name'>I. M Vital Murthy</h6>
                                <p className='customer-type2'>( IAS officer )</p>
                            </div>
                        </div>
                        <div className='row customer-main'>
                            <div className=''>
                                <p className='customer-type'>“Rainy has evolved beyond and after expectations, nice product and campus. The sustainable way for conserving the rainwater and utilizing it beautifully demonstrated”</p>
                                <h6 className='customer-name'>“Professors of Bangalore university”</h6>
                                {/* <p className='customer-type2'>Austin</p> */}
                            </div>
                        </div>
                        <div className='row customer-main'>
                            <div className=''>
                                <p className='customer-type'>“Rainy have started with good intention to save environment, the products are best for the rooftop rainwater harvesting.”</p>
                                <h6 className='customer-name'>“Dr Ullasa M. Y Scientist”</h6>
                                <p className='customer-type2'>( Keladi Shivappa Nayaka University of Agricultural and Horticultural Sciences )</p>
                            </div>
                        </div>
                        <div className='row customer-main'>
                            <div className=''>
                                <p className='customer-type'>“Really eye-opening technology. The research, the product and the way it is presented in amazing to experience.”</p>
                                <h6 className='customer-name'>“Kishore Hegde” </h6>
                                <p className='customer-type2'>( Chairman and Managing Director of Life Line feeds India )</p>
                            </div>
                        </div>
                        <div className='row customer-main'>
                            <div className=''>
                                <p className='customer-type'>“Very impressive technology, extremely innovative and practical technology looking forward to collaborate and work with you” </p>
                                <h6 className='customer-name'>“Austin Roach”</h6>
                                <p className='customer-type2'>( chairman of roach life spaces )</p>
                            </div>
                        </div>
                        <div className='row customer-main'>
                            <div className=''>
                                <p className='customer-type'>“Impressed by the wide range of products and technology developed and sustained. You are doing a great service for the sustainability of eco system”</p>
                                <h6 className='customer-name'>“Dr. A. T. Kalghatgi”</h6>
                                <p className='customer-type2'>( Member of the CeNS Governing Council
                                    Bharat Electronics Limited )</p>
                            </div>
                        </div>
                        <div className='row customer-main'>
                            <div className=''>
                                <p className='customer-type'>“It was an excellent experience, keep it up with the passion the entire team is driving the noble concept of rainwater harvesting”</p>
                                <h6 className='customer-name'>“C B Sahu”</h6>
                                <p className='customer-type2'>( VP & P2P Tower Head at UltraTech Cement, Aditya Birla Group )
                                </p>
                            </div>
                        </div>
                        <div className='row customer-main'>
                            <div className=''>
                                <p className='customer-type'>“I have heard about rainy for more than 10 years, wonderful work done by Rainy team, inspired more to save every drop of water”
                                </p>
                                <h6 className='customer-name'>“Dr. Gregory Lobo, Chairman”
                                </h6>
                                <p className='customer-type2'>( St Mary's College )</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </Fragment>
    )
}

export default CustomerSaying