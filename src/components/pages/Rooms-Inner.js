import React, { Component } from "react";
import OtherRecommendations from "../sections/rooms-inner/dining-inner-grid-item";
import RoomsInnerTitleBlock from "../sections/rooms-inner/main-text-block";
import RoomAmenities from "../sections/rooms-inner/room-amentities";
import RoomVR360 from "../sections/rooms-inner/room-360";
import BookingFormVertical from "../sections/rooms-inner/BookingFormVertical";
import API from "../../utils/http";
import PageLayout from "../layouts/PageLayout";
import SEOTags from "../sections/common/SEOTags";
import FAQInnerSection from "../sections/common/FAQInnerSection";
import { constants } from "../../utils/constants";


const faqList = [
  {
    question: "What is the difference between a deluxe and a superior room?",
    answer: `There is not much of a difference in terms of area. However, the difference is in the availability of amenities. deluxe rooms are equipped with more amenities and usually are placed on higher floors with better views and surroundings.`,
    category: "dining",
    // id: 1,
    route: "superior-rooms"
  },
  {
    question: "How do I choose the best hotel superior rooms in Seychelles?",
    answer: `The choices for rooms and suites in Seychelles are endless and sometimes it gets hard to choose which one is the best. The key is to know that the difference is almost always in amenities and views. Try to gather information about which ones have more to offer in terms of amenities and always go for the ones with a better view.`,
    category: "policy",
    route: "superior-rooms"
  },

  {
    question: "Do the hotels have the facility to organize Couple Weddings? ",
    answer: `Yes, hotels and resorts in Seychelles have the facility to organize couple weddings and the prices start from 850 Euros depending on the venue.`,
    category: "policy",
    route: "family-suite-garden"
  },
  {
    question: "What does a two-bedroom suite mean?",
    answer: `Contrary to the popular belief, A two bedroom suite generally means one bedroom and a living room. It does not mean two full bedrooms as some people might think. `,
    category: "policy",
    route: "executive-suite-ocean-front",
    id: 21,
  },
  {
    question: "Which hotels in Seychelles have suites with a private balcony?",
    answer: `There are many Seychelles Resorts and Hotels providing suites with private balconies. Fishermans Cove Resort and STORY Seychelles Resort are two of the best options to choose from. Both the resorts provide private balconies with great views of the Indian Ocean.
    `,
    category: "policy",
    route: "executive-suite-ocean-front",
    id: 21,
  },
  {
    question: "What is the difference between a room and a suite?",
    answer: `A room in a hotel is one single room with all the necessary amenities in it and an attached bathroom. However, a suite has a larger area with a small living room and sometimes along with a dining area as well.`,
    category: "policy",
    route: "executive-suite-ocean-front",
    id: 21,
  },
  {
    question: "Do the hotels have the facility to organize Couple Weddings?",
    answer: `Yes, hotels and resorts in Seychelles have the facility to organize couple weddings and the prices start from 850 Euros depending on the venue.`,
    category: "policy",
    route: "executive-suite-partial-ocean-view",
    id: 20,
  },
  {
    question: "Which hotels in Seychelles have suites with a private balcony?",
    answer: `There are many Seychelles Resorts and Hotels providing suites with private balconies. Some of the options are listed here. Fishermans Cove Resort has the finest rooms with a private balcony which provides thrilling views of the Indian Ocean. The balcony is the perfect place to just sit and chill for a while away from the hustle and bustle of the city.`,
    category: "policy",
    route: "executive-suite-partial-ocean-view",
    id: 20,
  },
  {
    question: "What is the difference between a room and a suite?",
    answer: `A room in a hotel is one single room with all the necessary amenities in it and an attached bathroom. However, a suite has a larger area with a small living room and sometimes along with a dining area as well.`,
    category: "policy",
    route: "executive-suite-partial-ocean-view",
    id: 20,
  },

  {
    question: "What is a junior suite room? ",
    answer: `Junior suites are usually smaller than the regular suites with no solid separation between the room and the living area. Moreover, the living area is an extension of the room so it's not that big.`,
    category: "policy",
    route: "junior-suite-ocean-view",
    id: 2,
  },
  {
    question: "Whats the difference between a suite and a junior suite? ",
    answer: `Junior suites are usually smaller than the regular suites with no solid separation between the room and the living area. Moreover, the living area is an extension of the room so there is less space.`,
    category: "policy",
    route: "junior-suite-ocean-view",
    id: 2,
  },
  {
    question:
      "Which are the hotels with the best rooms and suites in Seychelles?",
    answer: `The choices for rooms and suites in Seychelles hotels are endless and the quality varies as well so you will easily be able to find the ones for your liking. Some of the resorts with the best rooms and suites in Seychelles STORY Seychelles Resort and Fisherman’s Cove Resort `,
    category: "policy",
    route: "junior-suite-ocean-view",
    id: 2,
  },
  {
    question: "Which hotels in Seychelles have the best suites?",
    answer: `There are a number of options to choose from because Seychelles has some of the best resorts and hotels. Fishermans Cove Resort and STORY Seychelles Resort are two of the many options you can choose from. Both of these resorts in Seychelles have unmatched service and amenities.`,
    category: "policy",
    id: 19,
    route: "hilltop-executive-suite",
  },
  {
    question: "Which hotels in Seychelles have suites with a private balcony?",
    answer: `There are many Seychelles Resorts and Hotels providing suites with private balconies. Some of the options are listed here. Fishermans Cove Resort and STORY Seychelles Resort also have private balconies with unmatched views of the beach.`,
    category: "policy",
    id: 19,
    route: "hilltop-executive-suite",
  },
  {
    question: "Which family resorts in Seychelles are romantic?",
    answer: `There is a huge list of romantic family resorts in Seychelles. However, fishermans Cove Resort tops the list because of its location and the mesmerizing views it provides. The resort provides every all the necessary amenities with unmatched vervice.
    `,
    category: "policy",
    id: 3,
    route: "family-suite-garden"
  },
  {
    question: "What is the difference between a room and a suite?",
    answer: `A room in a hotel is one single room with all the necessary amenities in it and an attached bathroom. However, a suite has a larger area with a small living room and sometimes along with a dining area as well.`,
    category: "policy",
    // id: 3,
    route: "family-suite-garden"
  },
  {
    question: "Which hotels in Seychelles have suites with a private balcony? ",
    answer: `There are many Seychelles Resorts and Hotels providing suites with private balconies. Fishermans Cove Resort has many rooms and suites with private balconies for you to enjoy amazing views of the Indian Ocean. `,
    category: "policy",
    // id: 3,
    route: "family-suite-garden"
  },
  {
    question: "Are there private pools with hotel rooms in Seychelles?",
    answer: `Yes, some of the Seychelles hotels and resorts have private pools with rooms but you might not find this facility in every hotel. However, the choices are unlimited and there are a number of hotels and resorts in Seychelles providing the private pool facility.`,
    category: "policy",
    route: "deluxe-ocean-view-rooms"
  },
  {
    question: "Can you order food to your room at Fishermans Cove Resort?",
    answer: `Yes, you can order food directly to your room and we have a great menu with numerous options to choose from.`,
    category: "policy",
    route: "deluxe-ocean-view-rooms"
  },
  {
    question:
      "What is the difference between an Oceanview room and an oceanfront room?",
    answer: `An ocean view room means that you will be able to see the ocean from the window or the balcony. However, an oceanfront room means that your room will directly be facing the ocean. Oceanfront rooms generally provide the best views.`,
    category: "policy",
    route: "deluxe-ocean-view-rooms"
    // id: 7,
  },
];

let breadcrumbItems = [
  {
    text: "Fishermans Cove Resort",
    link: "/",
    isActive: false,
  },
  {
    text: "Rooms & Suites",
    link: "/room-suites",
    isActive: false,
  },
  {
    text: "",
    link: "/rooms-inner",
    isActive: true,
  },
];

class RoomsInner extends Component {
  state = {
    singleRoom: {},
    meta: {},
    othersData: [],
  };

  async componentDidMount() {
    let id = this.props.match.params.id;
    try {
      //getting single post data
      const response = await API.get("/rooms/" + id);
      //making breadcrumbs dynamic, appending into last item
      breadcrumbItems[breadcrumbItems.length - 1].text =
        response.data.post_name;
      breadcrumbItems[breadcrumbItems.length - 1].link =
        "/rooms-inner/" + response.data.id;

      let singleRoom = response.data;

      singleRoom.roomCode = singleRoom?.post_url?.split("room=")[1];

      //getting and appending images to single room data
      // const imagesResponse = await API.get('/post_uploads/' + id);
      // singleRoom.images = imagesResponse.data.filter(x => x["360_view"] == "");

      // singleRoom.images360 = imagesResponse.data.filter(x => x["360_view"] == "1");
      this.setState({ singleRoom });

      //fetching others room data for
      API.get("/rooms").then((othersResponse) => {
        // debugger;
        this.setState({
          othersData:
            othersResponse.data.filter(
              (x) => x.id !== this.state.singleRoom?.id
            ) || [],
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  async componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      let id = this.props.match.params.id;
      try {
        //getting single post data
        const response = await API.get("/rooms/" + id);
        //making breadcrumbs dynamic, appending into last item
        breadcrumbItems[breadcrumbItems.length - 1].text =
          response.data.post_name;
        breadcrumbItems[breadcrumbItems.length - 1].link =
          "/rooms-inner/" + response.data.id;

        let singleRoom = response.data;

        singleRoom.roomCode = singleRoom?.post_url?.split("room=")[1];

        //getting and appending images to single room data
        // const imagesResponse = await API.get('/post_uploads/' + id);
        // singleRoom.images = imagesResponse.data.filter(x => x["360_view"] == "");
        //getting and appending images to single room data
        // const imagesResponse = await API.get('/post_uploads/' + id);
        // singleRoom.images = imagesResponse.data.filter(x => x["360_view"] == "");
        //getting and appending images to single room data
        // const imagesResponse = await API.get('/post_uploads/' + id);
        // singleRoom.images = imagesResponse.data.filter(x => x["360_view"] == "");  //getting and appending images to single room data
        // const imagesResponse = await API.get('/post_uploads/' + id);
        // singleRoom.images = imagesResponse.data.filter(x => x["360_view"] == "");


        // singleRoom.images360 = imagesResponse.data.filter(x => x["360_view"] == "1");
        this.setState({ singleRoom });

        //fetching others room data for
        API.get("/rooms").then((othersResponse) => {
          this.setState({
            othersData:
              othersResponse.data.filter(
                (x) => x.id !== this.state.singleRoom?.id
              ) || [],
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const activeLang = localStorage.getItem('lang');
    return (
      <div className="bg-white rooms-inner-wrapper">
        <SEOTags meta={this.state.singleRoom?.post_metas?.[0]} />
        <PageLayout
          header={{ isMobile: this.props.isMobile, isTop: this.props.isTop }}
          banner={{
            title: this.state.singleRoom?.post_name,
            image: this.state.singleRoom?.banner_img,
          }}
          breadCrumb={{ items: breadcrumbItems }}
          hideBooking
          key={this.state.singleRoom?.post_name}
          activeLang={activeLang}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-8 left-image-section">
                {/*====== TITLE START ======*/}
                <RoomsInnerTitleBlock room={this.state.singleRoom} />
                {/*====== TITLE END ======*/}
                {/*====== ROOM GRID START ======*/}
                <RoomAmenities
                  activeLang={activeLang}
                />
                {/*====== ROOM GRID END ======*/}
                {/*====== ROOM 360 GRID START ======*/}
                <RoomVR360
                  image={this.state.singleRoom?.uploads?.find((x) => x["360_view"] === "1")?.avatar}
                  activeLang={activeLang}
                />
                {/*====== ROOM 360 GRID END ======*/}
              </div>
              <div className="col-md-4 right-booking-section">
                <BookingFormVertical
                  roomCode={this.state.singleRoom?.roomCode}
                />
              </div>
            </div>
            {/*====== OTHERS GRID START ======*/}
            <OtherRecommendations
              title={constants?.site_content?.roomsInner_page?.other_recom?.title[activeLang]}
              data={this.state.othersData}
              activeLang={activeLang}
            />
            {/*====== OTHERS GRID END ======*/}
          </div>
          <FAQInnerSection
            // faqList={faqList.filter((x) => x.route === this.state.singleRoom?.route)}
            faqList={faqList}
            activeLang={activeLang}
          />
        </PageLayout>
      </div>
    );
  }
}

export default RoomsInner;
