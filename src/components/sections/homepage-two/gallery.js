import React from "react";
import { Gallery as GridGallery } from "react-grid-gallery";
import "../../../assets/scss/gallery.scss";
import { constants } from "../../../utils/constants";
import { useSelector } from "react-redux";

function Gallery(props) {
  const galleryData = useSelector(
    (state) => state.allSections.sections?.imageGallery
  );
  console.log("🚀 ~ file: gallery.js:11 ~ Gallery ~ galleryData", galleryData);

  let images = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 600,
      height: 212,
      alt: "After Rain (Jeshu John - designerspics.com)",
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>
            {
              constants?.site_content?.home_page?.Gallery?.caption1[
                props?.activeLang
              ]
            }
          </div>
        </div>
      ),
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      alt: "Boats (Jeshu John - designerspics.com)",
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>
            {
              constants?.site_content?.home_page?.Gallery?.caption2[
                props?.activeLang
              ]
            }
          </div>
        </div>
      ),
    },

    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
      alt: "king (Jeshu John - designerspics.com)",
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>
            {
              constants?.site_content?.home_page?.Gallery?.caption3[
                props?.activeLang
              ]
            }
          </div>
        </div>
      ),
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 212,
      alt: "After Rain (Jeshu John - designerspics.com)",
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>
            {
              constants?.site_content?.home_page?.Gallery?.caption4[
                props?.activeLang
              ]
            }
          </div>
        </div>
      ),
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      alt: "Boats (Jeshu John - designerspics.com)",
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>
            {
              constants?.site_content?.home_page?.Gallery?.caption5[
                props?.activeLang
              ]
            }
          </div>
        </div>
      ),
    },

    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
      alt: "king (Jeshu John - designerspics.com)",
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>
            {
              constants?.site_content?.home_page?.Gallery?.caption6[
                props?.activeLang
              ]
            }
          </div>
        </div>
      ),
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
      alt: "king (Jeshu John - designerspics.com)",
      customOverlay: (
        <div className="custom-overlay__caption">
          <div>
            {
              constants?.site_content?.home_page?.Gallery?.caption7[
                props?.activeLang
              ]
            }
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="gallery_section">
      <section className="container">
        <h3>
          {
            constants?.site_content?.home_page?.Gallery?.title[
              props?.activeLang
            ]
          }
        </h3>
        <GridGallery images={images} enableImageSelection={false} margin={10} />
      </section>
    </div>
  );
}

export default Gallery;
