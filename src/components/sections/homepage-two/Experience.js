import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow'

const image = require('../../../assets/img/banner-widget.jpg');

const data = [
    {
        image: image,
        title: "Sustainability"
    },
    {
        image: image,
        title: "Overview of the Resort"
    },
    {
        image: image,
        title: "About Seychelles"
    },
    {
        image: image,
        title: "Contact \n Us"
    },
]

class Experience extends Component {
    render() {
        return (
            <section className="experience-wrapper pt-5">
                <h2 className="text-capitalize text-center text-muted p-3">Unlock the ultimate experience with us today</h2>
                <ReactWOW animation="fadeInLeft" data-wow-delay=".3s">
                    <div className="d-flex flex-row">
                        {
                            data.map(x => (
                                <div className="experience-item">
                                    <div className="background">
                                        <img className="img-fluid w-100 h-100" src={image} alt="" />
                                    </div>
                                    <div className="foreground">
                                        <h3>Sustainability</h3>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </ReactWOW>
            </section>

        );
    }
}

export default Experience;
