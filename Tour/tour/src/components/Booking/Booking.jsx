import React from "react";
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";
const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;
  const handleChange = (e) => {};
  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          {" "}
          TL{price} <span> /kişi başı/</span>{" "}
        </h3>
        <span className="tour__rating d-flex align-items-center gap-1">
          <i class="ri-star-s-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length}) )}
        </span>
      </div>
      <div className="booking__from">
        <h5>Bilgiler</h5>
        <Form className="booking__info-form">
          <FormGroup>
            <input
              type="text"
              placeholder="Adınız"
              id="fullName"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              placeholder="Telefon"
              id="phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="date"
              placeholder=""
              id="bookAt"
              required
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder=""
              id="guestSize"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              TL {price} <i class="ri-close-line"></i> 1 kişi
            </h5>
            <span> TL {price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Servis ücreti</h5>
            <span> TL 10 {price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Toplam Fiyat</h5>
            <span> TL 109</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4"> Seç </Button>
      </div>
    </div>
  );
};

export default Booking;
