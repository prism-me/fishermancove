import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';

class Roomtype extends Component {
  render() {
    return (
        <section className="room-type-section pt-115 pb-115" style={{backgroundImage: 'url(assets/img/bg/01.jpg)'}}>
          <Tab.Container defaultActiveKey="relex">
              <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-title text-lg-left text-center">
                  <span className="title-tag">room type</span>
                  <h2>Inspired Loding</h2>
                </div>
              </div>
              <div className="col-lg-6">
              <Nav variant="pills" className="room-filter nav nav-pills justify-content-center justify-content-lg-end">

                <Nav.Item>
                <Nav.Link eventKey="luxury">Luxury</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                <Nav.Link eventKey="family">Family</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                <Nav.Link eventKey="doublebed">Double Bed</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="relex">Relex</Nav.Link>
                </Nav.Item>

                </Nav>
                </div>
            </div>
            <Tab.Content className="mt-65">
                <Tab.Pane eventKey="luxury">
                    <div className="room-items">
                    <div className="row">
                        <div className="col-lg-8">
                        <div className="row">
                            <div className="col-12">
                            <div className="room-box extra-wide">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/room-type/04.jpg)'}} />
                                <div className="room-content">
                                <span className="room-count"><i className="fal fa-th" />03 Rooms</span>
                                <h3><Link to="/room-details">Luxury Hall Of Fame</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/room-type/01.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <span className="room-count"><i className="fal fa-th" />05 Rooms</span>
                                <h3><Link to="/room-details">Pendora Fame</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/room-type/02.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <span className="room-count"><i className="fal fa-th" />10 Rooms</span>
                                <h3><Link to="/room-details">Pacific Room</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="room-box extra-height">
                            <div className="room-bg" style={{backgroundImage: 'url(assets/img/room-type/03.jpg)'}}>
                            </div>
                            <div className="room-content">
                            <span className="room-count"><i className="fal fa-th" />12 Rooms</span>
                            <h3><Link to="/room-details">Junior Suite</Link></h3>
                            </div>
                            <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </Tab.Pane>

                <Tab.Pane eventKey="family">
                    <div className="room-items">
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="room-box extra-height">
                            <div className="room-bg" style={{backgroundImage: 'url(assets/img/room-type/03.jpg)'}}>
                            </div>
                            <div className="room-content">
                            <span className="room-count"><i className="fal fa-th" />12 Rooms</span>
                            <h3><Link to="/room-details">Junior Suite</Link></h3>
                            </div>
                            <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                        </div>
                        </div>
                        <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/room-type/02.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <span className="room-count"><i className="fal fa-th" />10 Rooms</span>
                                <h3><Link to="/room-details">Pacific Room</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/room-type/01.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <span className="room-count"><i className="fal fa-th" />05 Rooms</span>
                                <h3><Link to="/room-details">Pendora Fame</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                            <div className="col-12">
                            <div className="room-box extra-wide">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/room-type/04.jpg)'}} />
                                <div className="room-content">
                                <span className="room-count"><i className="fal fa-th" />03 Rooms</span>
                                <h3><Link to="/room-details">Luxury Hall Of Fame</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </Tab.Pane>

                <Tab.Pane eventKey="doublebed">
                    <div className="room-items">
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="room-box extra-height">
                            <div className="room-bg" style={{backgroundImage: 'url(assets/img/room-type/03.jpg)'}}>
                            </div>
                            <div className="room-content">
                            <span className="room-count"><i className="fal fa-th" />12 Rooms</span>
                            <h3><Link to="/room-details">Junior Suite</Link></h3>
                            </div>
                            <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                        </div>
                        </div>
                        <div className="col-lg-8">
                        <div className="row">
                            <div className="col-12">
                            <div className="room-box extra-wide">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/room-type/04.jpg)'}} />
                                <div className="room-content">
                                <span className="room-count"><i className="fal fa-th" />03 Rooms</span>
                                <h3><Link to="/room-details">Luxury Hall Of Fame</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/room-type/01.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <span className="room-count"><i className="fal fa-th" />05 Rooms</span>
                                <h3><Link to="/room-details">Pendora Fame</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/room-type/02.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <span className="room-count"><i className="fal fa-th" />10 Rooms</span>
                                <h3><Link to="/room-details">Pacific Room</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="relex">
                    <div className="room-items">
                    <div className="row">
                        <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/room-type/01.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <span className="room-count"><i className="fal fa-th" />05 Rooms</span>
                                <h3><Link to="/room-details">Pendora Fame</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                            <div className="room-box">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/room-type/02.jpg)'}}>
                                </div>
                                <div className="room-content">
                                <span className="room-count"><i className="fal fa-th" />10 Rooms</span>
                                <h3><Link to="/room-details">Pacific Room</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                            <div className="col-12">
                            <div className="room-box extra-wide">
                                <div className="room-bg" style={{backgroundImage: 'url(assets/img/room-type/04.jpg)'}} />
                                <div className="room-content">
                                <span className="room-count"><i className="fal fa-th" />03 Rooms</span>
                                <h3><Link to="/room-details">Luxury Hall Of Fame</Link></h3>
                                </div>
                                <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="room-box extra-height">
                            <div className="room-bg" style={{backgroundImage: 'url(assets/img/room-type/03.jpg)'}}>
                            </div>
                            <div className="room-content">
                            <span className="room-count"><i className="fal fa-th" />12 Rooms</span>
                            <h3><Link to="/room-details">Junior Suite</Link></h3>
                            </div>
                            <Link to="/room-details" className="room-link"><i className="fal fa-arrow-right" /></Link>
                        </div>
                        </div>
                    </div>
                    </div>
                </Tab.Pane>

            </Tab.Content>
            </div>
            </Tab.Container>
        </section>
    );
  }
}

export default Roomtype;
