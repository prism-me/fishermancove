import React, { Component } from 'react';

// import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';
import DatePickerComponent from "../../layouts/DatePickerComponent";
import { constants } from '../../../utils/constants';
import $ from "jquery";

const year = `${new Date().getFullYear()}`;
const month = (new Date().getMonth() + 1).toString().length === 1 ? `0${new Date().getMonth() + 1}` : `${new Date().getMonth() + 1}`;
const day = (new Date().getDate()).toString().length === 1 ? `0${new Date().getDate()}` : `${new Date().getDate()}`;
var date = new Date();
date.setDate(date.getDate() + 1);
const year2 = date.getFullYear();
const month2 = (date.getMonth() + 1).toString().length === 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
const day2 = (date.getDate()).toString().length === 1 ? `0${date.getDate()}` : `${date.getDate()}`;

console.log("============day============",year2,month2,day2)
class Bookingform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkIn: `${year}-${month}-${day}`,
            checkOut: `${year2}-${month2}-${day2}`,
            openCheckOut: false,
            openCheckIn: false,
            adults: 1,
            rooms: 1,
            childs: 0,
            showCountPopup: false,
            showPromoPopup: false,
            chain: 27304,
            hotel: 31842,
            promo: '',
            checkOutMin: `${year2}-${month2}-${day2}`
        }
        this.wrapperRef = React.createRef();
        this.propmoWrapperRef = React.createRef();

        // this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);

    }

    dateChange = (date) => {
        let cur = date;
        let newDate = this.nextDate(cur);
        let checkOutMin = newDate;

        this.setState({ checkOut: newDate, checkIn: cur, checkOutMin: checkOutMin });//
        this.setState({ openCheckOut: true });    //updating state for check-out date

    }

    nextDate = (cur) => {
        let currentdate = new Date(new Date(cur).getTime() + 24 * 60 * 60 * 1000);
        // let currMonth  = currentdate.getMonth()+1;
        // if(currMonth <= 9){
        //     currMonth = '0' + currMonth;
        // }
        // console.log(currMonth);

        // let currDate  = currentdate.getDate();
        // if(currDate <= 9){
        //     currDate = '0' + (currDate+1);
        // }
        // else{
        //     currDate = currDate+1;
        // }

        // currDate = currDate.toString();
        // console.log(currDate);

        let datetime = (currentdate.getFullYear() + "-" + (("0" + (currentdate.getMonth() + 1)).slice(-2)) + "-" + (("0" + currentdate.getDate()).slice(-2)))

        // let datetime =
        //     currentdate.getFullYear() +
        //     "-" +
        //     (currMonth) +
        //     "-" +
        //     (currDate)
        // this.setState({checkOut: datetime });
        // this.setState({  checkOut: datetime , checkIn: cur.target.value  });
        // console.log("datetime", datetime);
        return datetime;
    }

    // handleCheckInChange = (e) => {
    //
    //     let today = e.target.value;
    //     let n = 1;
    //     let fudate = new Date(new Date(today).setDate(new Date(today).getDate() + n));
    //     fudate = fudate.getFullYear() +  '-' + (fudate.getMonth() + 1) + '-' + fudate.toDateString().substring(8, 10) ;
    //     this.setState({checkOut: fudate });
    //     this.setState({  checkOut: fudate , checkIn: e.target.value  });
    //     // console.log(this.state.checkOut);
    //     // debugger;
    // }
    handleCheckOutChange = (date) => {
        this.setState({ checkOut: date })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const finalURL = `https://be.synxis.com/?adult=${this.state.adults}&arrive=${this.state.checkIn}&chain=${this.state.chain}&child=${this.state.childs}&currency=EUR&depart=${this.state.checkOut}&hotel=${this.state.hotel}&level=hotel&locale=en-US&rooms=${this.state.rooms}&promo=${this.state.promo}`;

        window.gtag_report_conversion(finalURL);
        return;
        // window.open(finalURL, '_blank') || window.location.replace(finalURL);

    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // if(prevState.checkOut !== this.state.checkOut){
        //     this.setState({
        //         openCheckOut: false,
        //     })
        // }
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.setState({ showCountPopup: false })
        }
        if (this.propmoWrapperRef && !this.propmoWrapperRef.current.contains(event.target)) {
            this.setState({ showPromoPopup: false })
        }
    }


    render() {
        const activeLang = localStorage.getItem('lang');
        const { rooms, childs, adults, showCountPopup, showPromoPopup, openCheckOut, openCheckIn, checkIn, checkOut, checkOutMin } = this.state;
        return (
            <section className="booking-form-hotizontal container d-none d-sm-block">
                <div className="container-fluid">
                    <div className="booking-form-inner">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <div className="dates-group">
                                    <DatePickerComponent
                                        id={"date-picker-inline"}
                                        value={checkIn}
                                        placeholder={constants?.site_content?.home_page?.booking_form?.check_in[activeLang]}
                                        open={openCheckIn}
                                        onOpen={() => {
                                            this.setState({
                                                openCheckIn: true,
                                            })
                                        }}
                                        onClose={() => {
                                            this.setState({
                                                openCheckIn: false
                                            })
                                        }}
                                        minDate={new Date().toISOString().split('T')[0]}
                                        onChange={(date => this.dateChange(date))}
                                    />
                                    <DatePickerComponent
                                        id={"date-picker-inline-1"}
                                        value={checkOut}
                                        placeholder={constants?.site_content?.home_page?.booking_form?.check_out[activeLang]}
                                        disablePast={true}
                                        open={openCheckOut}
                                        minDate={checkOutMin}
                                        dateRange={true}
                                        startDate={checkIn}
                                        onOpen={() => {
                                            this.setState({
                                                openCheckOut: true,
                                            });
                                        }}
                                        onClose={() => this.setState({
                                            openCheckOut: false
                                        })}
                                        onChange={(date => this.handleCheckOutChange(date))}
                                    />
                                    {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
                                    {/*<KeyboardDatePicker*/}
                                    {/*    disableToolbar*/}
                                    {/*    variant="inline"*/}
                                    {/*    format="MM-dd-yyyy"*/}
                                    {/*    margin="none"*/}
                                    {/*    id="date-picker-inline"*/}
                                    {/*    value={this.state.checkIn}*/}
                                    {/*    className="form-control"*/}
                                    {/*    placeholder="Check In"*/}
                                    {/*    minDate={new Date().toISOString().split('T')[0]}*/}
                                    {/*    onChange={(date => this.dateChange(date))}*/}
                                    {/*    allowKeyboardControl={true}*/}
                                    {/*    autoOk={true}*/}
                                    {/*/>*/}
                                    {/* <span className="d-none d-sm-block">-</span> */}
                                    {/*<KeyboardDatePicker*/}
                                    {/*    // autoOk={true}*/}
                                    {/*    disableToolbar*/}
                                    {/*    variant="inline"*/}
                                    {/*    format="MM-dd-yyyy"*/}
                                    {/*    margin="none"*/}
                                    {/*    disablePast={true}*/}
                                    {/*    id="date-picker-inline-1"*/}
                                    {/*    value={this.state.checkOut}*/}
                                    {/*    onOpen={() => this.setState({*/}
                                    {/*        openCheckOut: true*/}
                                    {/*    })}*/}
                                    {/*    onClose={() => this.setState({*/}
                                    {/*        openCheckOut: false*/}
                                    {/*    })}*/}
                                    {/*    className="form-control"*/}
                                    {/*    placeholder="Check Out"*/}
                                    {/*    minDate={this.state.checkOutMin}*/}
                                    {/*    onChange={(date => this.handleCheckOutChange(date))}*/}
                                    {/*    open={this.state.openCheckOut}*/}
                                    {/*/>*/}
                                    {/*</MuiPickersUtilsProvider>*/}



                                    {/* <input onChange={this.dateChange} type="date" value={this.state.checkIn} className="form-control" placeholder="Check In" min={new Date().toISOString().split('T')[0]}></input> */}
                                    {/* <span className="d-none d-sm-block">-</span> */}
                                    {/* <input onChange={this.handleCheckOutChange} type="date"  min={this.state.checkOutMin} className="form-control" placeholder="Check Out" ></input> */}
                                </div>
                            </div>
                            <div className="col-12 col-md-4">
                                <div className="room-details" ref={this.wrapperRef} onClick={() => this.setState({
                                    showCountPopup: !showCountPopup,
                                    showPromoPopup: false
                                })}>
                                    <div className="count-group">
                                        <p>{`${rooms} ${constants?.site_content?.home_page?.booking_form?.room[activeLang]}${rooms > 1 ? 's' : ''}`}</p>
                                        <p>{`${adults} ${constants?.site_content?.home_page?.booking_form?.adult[activeLang]}${adults > 1 ? 's' : ''}`}</p>
                                        <p>{`${childs} ${constants?.site_content?.home_page?.booking_form?.child[activeLang]}${childs > 1 ? 's' : ''}`}</p>
                                    </div>
                                    {
                                        showCountPopup ?
                                            <div onClick={(e) => e.stopPropagation()} className="room-details-popup"
                                                style={{ display: showCountPopup ? 'block' : 'none' }}>
                                                <div className="room_item_box quantity">
                                                    <label>{constants?.site_content?.home_page?.booking_form?.rooms[activeLang]}</label>
                                                    <div className="quantity-box">
                                                        <div className="quantity-button quantity-down minus empty"
                                                            onClick={() => this.setState({ rooms: rooms - 1 < 1 ? 1 : rooms - 1 })}>-
                                                        </div>
                                                        <input id="Room" type="text" min="1" className="form-control"
                                                            defaultValue={rooms} value={rooms} name="Rooms"
                                                            placeholder="" required="" data-rel="rooms" />
                                                        <div className="quantity-button quantity-up plus"
                                                            onClick={() => this.setState({ rooms: rooms + 1 })}>+
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="room_item_box quantity">
                                                    <label>{constants?.site_content?.home_page?.booking_form?.adults[activeLang]}</label>
                                                    <div className="quantity-box">
                                                        <div className="quantity-button quantity-down minus empty"
                                                            onClick={() => this.setState({ adults: adults - 1 < 1 ? 1 : adults - 1 })}>-
                                                        </div>
                                                        <input id="Adult" type="text" min="1" className="form-control"
                                                            defaultValue={adults} value={adults} name="Adult"
                                                            placeholder="" required="" data-rel="adults" />
                                                        <div className="quantity-button quantity-up plus"
                                                            onClick={() => this.setState({ adults: adults + 1 })}>+
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="room_item_box quantity">
                                                    <label>{constants?.site_content?.home_page?.booking_form?.children[activeLang]}</label>
                                                    <div className="quantity-box">
                                                        <div className="quantity-button quantity-down minus empty"
                                                            onClick={() => this.setState({ childs: childs - 1 < 1 ? 1 : childs - 1 })}>-
                                                        </div>
                                                        <input id="Child" type="text" min="0" className="form-control"
                                                            defaultValue={childs} value={childs} name="Child"
                                                            placeholder="" required="" />
                                                        <div className="quantity-button quantity-up plus"
                                                            onClick={() => this.setState({ childs: childs + 1 })}>+
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                            <div className="col-12 col-md-2">
                                <div className="promo-codes-wrapper" ref={this.propmoWrapperRef}
                                    onClick={() => this.setState({
                                        showPromoPopup: !showPromoPopup,
                                        showCountPopup: false
                                    })}>
                                    <div className="promo-codes">
                                        <p>
                                            {constants?.site_content?.home_page?.booking_form?.promo_code[activeLang]}
                                        </p>
                                    </div>
                                    <div className="promo-popup" onClick={(e) => e.stopPropagation()}
                                        style={{ display: showPromoPopup ? 'flex' : 'none' }}>
                                        <div className="code-item">
                                            <label>
                                                {constants?.site_content?.home_page?.booking_form?.group_code[activeLang]}
                                            </label>
                                            <input type="text" onChange={(e) => this.setState({ promo: e.target.value })}
                                                className="form-control" />
                                        </div>
                                        <div className="code-item">
                                            <label>
                                                {constants?.site_content?.home_page?.booking_form?.ind_id[activeLang]}
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-2">
                                {
                                    activeLang === "en" ?
                                        <button type="button" value={this.state.promo} onClick={this.handleSubmit}
                                            className="main-btn btn-eden">
                                            Book Now
                                            {/* {constants?.site_content?.home_page?.banner?.btn4[activeLang]} */}
                                        </button>
                                        : activeLang === "fr" ?
                                            <button type="button" value={this.state.promo} onClick={this.handleSubmit}
                                                className="main-btn btn-eden"
                                                style={{ lineHeight: "normal" }}
                                            >
                                                <p>
                                                    Reserve
                                                </p>
                                                <p>
                                                    maintenant
                                                </p>
                                            </button>
                                            : activeLang === "de" ?
                                                <button type="button" value={this.state.promo} onClick={this.handleSubmit}
                                                    className="main-btn btn-eden"
                                                    style={{ lineHeight: "normal" }}
                                                >
                                                    <p>
                                                        buchen
                                                    </p>
                                                    <p>
                                                        Sie jetzt
                                                    </p>
                                                </button> :
                                                <button type="button" value={this.state.promo} onClick={this.handleSubmit}
                                                    className="main-btn btn-eden">
                                                    Book Now
                                                </button>
                                }
                            </div>
                        </div>
                    </div>
                    {/* <button className="main-btn w-100 btn-eden d-block my-5 d-sm-none">Book Now</button> */}

                </div>
            </section >

        );
    }
}

export default Bookingform;