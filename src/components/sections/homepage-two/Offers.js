import React from "react";
import { constants } from "../../../utils/constants";
import "../../../assets/scss/Offers.scss";
function Offers(props) {
  return (
    <section className="Offers-section">
      <div className="service-tabs-wrapper">
        <h2 className="text-center section-heading  ">
          {constants?.site_content?.home_page?.Offers?.title[props?.activeLang]}
        </h2>
        <div class="container">
          <div class="card borderRadius-card">
            <figure class="card__thumb">
              <img
                src="https://source.unsplash.com/75S9fpDJVdo/300x510"
                alt="Picture by Kyle Cottrell"
                class="card__image borderRadius-card"
              />
              <figcaption class="card__caption_offers">
                <h2 class="card__title">
                  {
                    constants?.site_content?.home_page?.Offers?.Card_text1
                      .title[props?.activeLang]
                  }
                </h2>
                <p class="card__snippet">
                  NASA released a list of 219 new “planet candidates” discovered
                  by the Kepler space telescope, 10 of which are similar to
                  Earth’s size and may be habitable by other life forms.
                </p>
              </figcaption>
            </figure>
          </div>

          <div class="card borderRadius-card">
            <figure class="card__thumb">
              <img
                src="https://source.unsplash.com/71u2fOofI-U/300x510"
                alt="Picture by Nathan Dumlao"
                class="card__image borderRadius-card"
              />
              <figcaption class="card__caption_offers">
                <h2 class="card__title">
                  {
                    constants?.site_content?.home_page?.Offers?.Card_text2
                      .title[props?.activeLang]
                  }
                </h2>
                <p class="card__snippet">
                  Drinking more caffeine during the coronavirus lockdown? Here's
                  how it can affect you over time and advice on making it better
                  for you.
                </p>
              </figcaption>
            </figure>
          </div>

          <div class="card borderRadius-card">
            <figure class="card__thumb">
              <img
                src="https://source.unsplash.com/qXMpNtNp1uE/300x510"
                alt="Picture by Daniel Lincoln"
                class="card__image borderRadius-card"
              />
              <figcaption class="card__caption_offers">
                <h2 class="card__title">
                  {
                    constants?.site_content?.home_page?.Offers?.Card_text3
                      .title[props?.activeLang]
                  }
                </h2>
                <p class="card__snippet">
                  On Friday, offices around the country celebrated the 15th
                  annual Take Your Dog to Work Day. Though the event's primary
                  goal is to raise awareness for pet adoption, the unanticipated
                  impact may be a slightly more relaxing work environment for
                  any office choosing to participate.
                </p>
              </figcaption>
            </figure>
          </div>
          <div class="card borderRadius-card">
            <figure class="card__thumb">
              <img
                src="https://source.unsplash.com/75S9fpDJVdo/300x510"
                alt="Picture by Kyle Cottrell"
                class="card__image borderRadius-card"
              />
              <figcaption class="card__caption_offers">
                <h2 class="card__title">
                  {
                    constants?.site_content?.home_page?.Offers?.Card_text4
                      .title[props?.activeLang]
                  }
                </h2>
                <p class="card__snippet">
                  NASA released a list of 219 new “planet candidates” discovered
                  by the Kepler space telescope, 10 of which are similar to
                  Earth’s size and may be habitable by other life forms.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
