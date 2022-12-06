import React, { useEffect, useState } from "react";
import RoomGridItem from "./gallery-grid-item";
import Lightbox from "react-image-lightbox";
import FsLightbox from "fslightbox-react";

const GalleryGrid = (props) => {
  const [mainSrc, setMainSrc] = useState(props.data?.[0]);
  const [showLightBox, setShowLightBox] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [mediaCat, setMediaCat] = useState();
  const [allGalleryData, setGalleryData] = useState();
  const [selectedItem, setSelectedItem] = useState("all");
  const [toggler, setToggler] = useState(false);
  const [popup, setPopup] = useState();
  const [galleryIndex, setGalleryIndex] = useState(0);
  const manipulation = () => {
    let mediaCategory = [...props?.category];
    mediaCategory.unshift({ _id: "all", name: "All", route: "all" });
    setMediaCat(mediaCategory);

    let allMediaPosts = [];
    let mediaPost = props?.gallery?.map((m) =>
      allMediaPosts.push(JSON.parse(m.category_list))
    );
    setGalleryData(allMediaPosts.flat(Infinity));

    let imagesList = [];
    console.log("setTogglerHandler", allGalleryData);
    let d = allGalleryData?.map((i) => imagesList.push(i.avatar));

    // console.log("imagesList", imagesList[0]);
    setPopup(imagesList);
  };

  useEffect(() => {
    manipulation();
  }, [props]);

  const filterData = (cat_id) => {
    let data = props?.gallery?.filter((m) => m?.category_id === cat_id)[0]
      ?.category_list;
    if (data !== undefined) {
      data = JSON.parse(data);
    } else {
      data = [];
    }
    return data;
  };

  const handleOnChangeCategory = (category_id, route) => {
    setSelectedItem(route);
    let selector = document.getElementById(`category_${category_id}`);
    let selectorRemoveClass = document.querySelectorAll(".tab-pane");
    selectorRemoveClass.forEach((item) => {
      item.classList.remove("active");
      item.classList.remove("show");
    });
    selector.classList.add("show");
    selector.classList.add("active");
  };

  const setTogglerHandler = (index) => {
    let imagesList = [];
    console.log("setTogglerHandler", allGalleryData);
    let d = allGalleryData?.map((i) => imagesList.push(i.avatar));

    // console.log("imagesList", imagesList[0]);
    setPopup(imagesList);
    setToggler(!toggler);
    setGalleryIndex(index);
  };
  return (
    <div className="container">
      {props.title && <h1 className="gallery-grid-title">{props.title}</h1>}
      <div className="gallery-grid-wrapper">
        <section id="medialist_area">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 col-sm-9 col-xs-12">
                <div className="tabs_center_button">
                  <ul className="nav nav-tabs">
                    {mediaCat &&
                      mediaCat?.map((c, index) => (
                        <li key={index}>
                          <span
                            data-toggle="tab"
                            className={
                              selectedItem === c?.route ? "active" : " "
                            }
                            onClick={() =>
                              handleOnChangeCategory(c?._id, c?.route)
                            }
                          >
                            {c?.name}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-12 col-sm-12 col-xs-12">
                <div className="tabs_el_wrapper">
                  <div className="tab-content">
                    {mediaCat &&
                      mediaCat?.map((cat, index) => (
                        <div
                          key={index}
                          id={`category_${cat?._id}`}
                          className={`tab-pane fade ${
                            index === 0 ? "show in active" : ""
                          }`}
                        >
                          <div className="row">
                            {cat?._id === "all"
                              ? allGalleryData?.map((x, i) => (
                                  <RoomGridItem
                                    index={i}
                                    toggleLightBox={(index) => {
                                      setShowLightBox(!showLightBox);
                                      setPhotoIndex(i);
                                      setMainSrc(props?.gallery?.[i]);
                                    }}
                                    title={x?.url}
                                    image={x?.avatar}
                                    link={x?.avatar}
                                    linkText={x?.avatar}
                                    description={x?.url}
                                  />
                                  // <img
                                  //   src={data?.avatar}
                                  //   alt={data?.alt_tag}
                                  //   className="img-gallery"
                                  //   toggleLightBox={(index) => {
                                  //     setShowLightBox(!showLightBox);
                                  //     setPhotoIndex(index);
                                  //     setMainSrc(allGalleryData?.[index]);
                                  //   }}
                                  // />
                                ))
                              : filterData(cat?._id)?.map((x, i) => (
                                  <RoomGridItem
                                    index={i}
                                    toggleLightBox={(index) => {
                                      setShowLightBox(!showLightBox);
                                      setPhotoIndex(index);
                                      setMainSrc(popup?.[index]);
                                    }}
                                    title={x?.url}
                                    image={x?.avatar}
                                    link={x?.avatar}
                                    linkText={x?.avatar}
                                    description={x?.url}
                                  />
                                  // <img
                                  //   src={data?.avatar}
                                  //   alt={data?.alt_tag}
                                  //   className="img-gallery"
                                  //   toggleLightBox={(index) => {
                                  //     setShowLightBox(!showLightBox);
                                  //     setPhotoIndex(index);
                                  //     setMainSrc(allGalleryData?.[index]);
                                  //   }}
                                  // />
                                ))}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <FsLightbox toggler={toggler} sources={popup} key={galleryIndex} /> */}
        {/* {
          Object.values(props?.data)?.map((x, i) => (
            <RoomGridItem index={i} toggleLightBox={(index) => { setShowLightBox(!showLightBox); setPhotoIndex(index); setMainSrc(props.data?.[index]) }} title={x?.title} image={x?.avatar} link={x?.link} linkText={x?.linkText} description={x?.description} />
          ))
        } */}
      </div>
      {showLightBox && (
        <Lightbox
          mainSrc={mainSrc?.avatar}
          onCloseRequest={() => setShowLightBox(false)}
          nextSrc={popup[(photoIndex + 1) % popup.length]?.avatar}
          prevSrc={
            popup[(photoIndex + popup.length - 1) % popup.length]?.avatar
          }
          onMovePrevRequest={() => {
            setPhotoIndex((photoIndex + popup.length - 1) % popup.length);
            setMainSrc(popup[(photoIndex + popup.length - 1) % popup.length]);
          }}
          onMoveNextRequest={() => {
            setPhotoIndex((photoIndex + 1) % popup.length);
            setMainSrc(popup[(photoIndex + 1) % popup.length]);
          }}
        />
      )}
    </div>
  );
};

export default GalleryGrid;
