import React from "react";
import { Gallery as GridGallery } from "react-grid-gallery";
import "../../../assets/scss/gallery.scss";
const images = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 212,
    alt: "After Rain (Jeshu John - designerspics.com)",
    customOverlay: (
      <div className="custom-overlay__caption">
        <div>Boats (Jeshu John - designerspics.com)</div>
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
        <div>Boats (Jeshu John - designerspics.com)</div>
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
        <div>Boats (Jeshu John - designerspics.com)</div>
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
        <div>Boats (Jeshu John - designerspics.com)</div>
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
        <div>Boats (Jeshu John - designerspics.com)</div>
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
        <div>Boats (Jeshu John - designerspics.com)</div>
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
        <div>Boats (Jeshu John - designerspics.com)</div>
      </div>
    ),
  },
];
function Gallery() {
  return (
    <>
      <GridGallery images={images} />
    </>
  );
}

export default Gallery;
