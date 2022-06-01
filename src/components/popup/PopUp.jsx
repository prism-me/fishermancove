import React, { useEffect } from "react";
import { Modal, Button, Row, Col, Form, Container } from "react-bootstrap";
// import { MdClose } from "react-icons/md";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CancelIcon from '@material-ui/icons/Cancel';
import popupimg from "../../assets/img/FCR-June-Seychelles-1080x1080-Pop-Up.jpg";

const PopUp = (props) => {


    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="Documents"
            style={{ paddingLeft: "0px" }}
        >
            <span className={"modalIcon"} onClick={props.onHide}>

                <CancelIcon class="icon" />
            </span>
            <Container>
                <div>

                    <Modal.Body>
                        <a href="https://fishermanscove-resort.com/offer/10-percentage-off-dinner-for-two" >
                            <img
                                src={popupimg}
                                alt="popup fishermans cove resort"
                                className="img-fluid"
                                style={{
                                    width: "100%",
                                    maxWidth: "600px",
                                    height: "auto"
                                }}
                            />
                        </a>
                    </Modal.Body>
                </div>
            </Container>
        </Modal>
    );
};



export default PopUp;