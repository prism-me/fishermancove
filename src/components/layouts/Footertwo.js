import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/http';

class Footertwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redText: false,
      footerData: null,
    };
  }
  async componentDidMount() {
    const response = await API.get('/get_widgets/footer');
    if (response.status === 200) {
      const { data } = response;
      const first = data.find(x => x.widget_name === "first")?.items;
      const second = data.find(x => x.widget_name === "second")?.items;
      const third = data.find(x => x.widget_name === "third")?.items;
      // const social = data.find(x => x.widget_name === "social");
      this.setState({
        footerData: {
          first: JSON.parse(first),
          second: JSON.parse(second),
          third: JSON.parse(third),
        }
      });
    }

    window.addEventListener('scroll', () => {
      this.setState({
        isTop: window.scrollY > 300
      });
    }, false);
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  render() {
    const className = this.state.isTop ? 'active' : '';
    return (
      <div>
        {/*====== Back to Top ======*/}
        <Link to="#" className={`back-to-top ${className}`} id="backToTop" onClick={() => this.scrollToTop()}>
          <i className="fal fa-angle-double-up" />
        </Link>
        {/*====== FOOTER START ======*/}
        <div className="container-1">
          {/* <div className="row">
                <div className="col-md-12 alert-footer">

                    <p>Kindly note, we will be undergoing some repair work around the Sea Wall and Executive Rooms at
                    Fisherman’s Cove Resort from 22 November 2021 for 3 months. Hence there will be some noise and
                    hoarding in that area. We do apologies for any inconvenience that this may cause during your 
                    stay with us. The finished project will give our guests direct access to the Beau Vallon beach
                    and they can also enjoy leisurely walks along our Sea Wall.
                    </p>
                </div>
              </div> */}
        </div>
        <footer className="footer-two">
          <div className="footer-widget-area pt-30 pb-30">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-sm-6 order-1">
                  {/* Site Info Widget */}
                  <div className="widget site-info-widget mb-50">
                    <div className="footer-logo mb-1">
                      <img src={require('./../../assets/img/logo-fisher.png')} alt="fishermancove footer logo" />
                    </div>
                    <p>
                      {/* Situated at Beau Vallon Beach with its 3km sparkling ivory sand, Fishermans Cove Resort is the promise of genuine tranquility and eternal enjoyment. The guest rooms and suites are set amidst lush tropical gardens, complemented by a peaceful environment. */}
                      {
                        this.state.footerData?.first?.description
                      }
                    </p>
                    <div className="social-links mt-40 d-none">
                      <a href="https://www.facebook.com/fishermanscoveresort/"><i className="fab fa-facebook-f" /></a>
                      <a href="https://twitter.com/fisherman_cove"><i className="fab fa-twitter" /></a>
                      <a href="https://www.instagram.com/fishermanscove.resort/"><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 order-3 order-lg-2">
                  {/* Nav Widget */}
                  <div className="widget nav-widget mb-50">
                    <div>
                      <h4 className="widget-title">Services</h4>
                      <ul>

                        {
                          this.state.footerData?.second?.links?.map(x => (
                            <li><Link to={`/${x.address}`}>{x.text}</Link></li>

                          ))
                        }
                        {/* <li><Link to="/about-us">About Us</Link></li>

                        <li><Link to="/wedding">Weddings </Link></li>

                        <li><Link to="/room-suites">Rooms &amp; Suites</Link></li>
                        <li><Link to="/sustainability">Sustainability</Link></li>
                        <li><Link to="/whats-on">Leisure Activities </Link></li>
                        <li><Link to="/dining">Dining</Link></li>


                        <li><Link to="/gallery">Media Center</Link></li>
                        <li><Link to="/spa-wellness">Spa</Link></li>
                        <li><Link to="/faq">FAQs</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/cancellation-policy">Cancellation Policy</Link></li>

                        <li><Link to="/covid-policy">COVID-19 Policy</Link></li> */}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-sm-6 order-2 order-lg-3">
                  {/* Contact Widget */}
                  <div className="widget contact-widget mb-50">
                    <h4 className="widget-title">Contact Us</h4>
                    <div className="contact-lists">
                      <div className="contact-box">
                        {/* <div className="icon">
                          <i className="flaticon-call" />
                        </div> */}
                        <div className="desc">
                          <h6 className="title">Phone Number</h6>
                          {/* <a href="tel:+2484677000">+248 467 7000</a> */}
                          <a href={`tel:${this.state.footerData?.third?.phone?.replace(/\s/g, '')}`}>{this.state.footerData?.third?.phone}</a>
                        </div>
                      </div>
                      <div className="contact-box">
                        {/* <div className="icon">
                          <i className="flaticon-message" />
                        </div> */}
                        <div className="desc">
                          <h6 className="title">Email Address</h6>
                          <a href={`mailto:${this.state.footerData?.third?.email}`}>{this.state.footerData?.third?.email}</a>
                        </div>
                      </div>
                      <div className="contact-box">
                        {/* <div className="icon">
                          <i className="flaticon-location-pin" />
                        </div> */}
                        <div className="desc">
                          <h6 className="title">Office Address</h6>
                          {this.state.footerData?.third?.address}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="footer-bottom-wrapper py-1">
              <div className="container d-flex flex-wrap justify-content-between align-items-center">
                <div className="py-2 footer-logos">
                  <a href="https://story-hospitality.com/" target='_blank'><img className="px-2" src={require('./../../assets/img/footer/story-hospitality-footer.png')} alt="story-rabat hospitality footer" /></a>
                  <a href="https://www.story-rabat.com/" target='_blank'><img className="px-2" src={require('./../../assets/img/footer/story-rabat-footer.png')} alt="sotry-rabat footer" /></a>
                  <a href="https://www.cue-podgorica.com/" target='_blank'><img className="px-2" src={require('./../../assets/img/footer/cue-hotel-footer.png')} alt="cue hotel footer" /></a>
                  <a href="/"><img className="px-2" src={require('./../../assets/img/footer/logo-fisher.png')} alt="fishermanscove footer" /></a>
                  <a href="https://www.hhoteldubai.com/" target='_blank'> <img className="px-2 hhotel-dubai-footer" src={require('./../../assets/img/footer/hhotel-footer.png')} alt="hhotel footer" /></a>
                  <a href="https://almayauae.com/"><img className="px-2" src={require('./../../assets/img/footer/al-maya.png')} style={{width : "140px"}} alt="fishermanscove footer" /></a>
                </div>
                <div className="social-icons py-2">
                  <a href="https://www.tripadvisor.co.za/Hotel_Review-g1185571-d302667-Reviews-Fisherman_s_Cove_Resort-Beau_Vallon_Mahe_Island.html" target='_blank'>
                    <img className="px-2" style={{ width: "80px" }} src={require('./../../assets/img/footer/tripadvisor.png')} alt="tripAdvisor" />
                  </a>
                  <a href="https://www.facebook.com/fishermanscoveresort/" target='_blank'><i className="fab fa-facebook-f" /></a>
                  <a href="https://twitter.com/fisherman_cove" target='_blank'><i className="fab fa-twitter" /></a>
                  <a href="https://www.instagram.com/fishermanscove.resort/" target='_blank'><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
          </div>


          <div className="copyright-area py-2">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-5 order-2 order-md-1">
                  <p className="copyright-text copyright-two">Copyright By @<Link to="#">Fishermans Cove Resort</Link> - {new Date().getFullYear()}</p>
                </div>
                <div className="col-lg-6 col-md-7 order-1 order-md-2">
                  <div className="footer-menu text-center text-md-right">
                    <ul>
                      <p style={{ fontSize: '14px' }}>Powered By <a href="https://prismdigital.ae" style={{ color: "white" }} >Prism Digital</a>.</p>
                      {/* <li><Link to="#">Terms of use</Link></li>
                      <li><Link to="#">Privacy Environmental Policy</Link></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*====== FOOTER END ======*/}
      </div>
    );
  }
}

export default Footertwo;
