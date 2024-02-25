"use client";

import React, { useState } from "react";
import { GalleryButton } from "@/components/buttons";
import styles from "@/styles/Home.module.css";

const albums = [
  {
    id: 1,
    name: "Cocoa Manufacturer",
    images: Array.from({ length: 5 }, (_, i) => `Album 1 Image ${i + 1}`),
  },
  {
    id: 2,
    name: "Coffee Manufacturer",
    images: Array.from({ length: 5 }, (_, i) => `Album 2 Image ${i + 1}`),
  },
  {
    id: 3,
    name: "Export Shipment",
    images: Array.from({ length: 14 }, (_, i) => `Album 3 Image ${i + 1}`),
  },
  {
    id: 4,
    name: "Cocoa Farmers",
    images: Array.from({ length: 3 }, (_, i) => `Album 4 Image ${i + 1}`),
  },
  {
    id: 5,
    name: "Coffee Farmers",
    images: Array.from({ length: 10 }, (_, i) => `Album 5 Image ${i + 1}`),
  },
];

export function Gallery({ sectionId }) {
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0]);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  return (
    <section
      id={sectionId}
      section-view-id={sectionId}
      className={styles.certifications}
    >
      <div className={styles.facilityHeading}>
        <h1 className={styles.factoryTitle}>Our Gallery</h1>
        <p className={styles.featureContentDesc}>
          We offer you high quality cocoa powder produced from organic, fine,
          and fermented Indonesian cocoa beans. we accept customized cocoa
          powder as your needs and request, such like product color and chemical
          properties (pH value).
        </p>
      </div>
      <div className={styles.galleryBody}>
        <div className={styles.galleryTab}>
          {albums.map((album) => (
            <GalleryButton
              key={album.id}
              buttonText={album.name}
              onClick={() => handleAlbumClick(album)}
              isActive={selectedAlbum.id === album.id}
            />
          ))}
        </div>
        <div className={styles.galleryList}>
          {selectedAlbum.images.map((image, index) => (
            <div className={styles.galleryImageWrap} key={index}>
              <img
                className={styles.galleryImage}
                src={`/img/albums/${image}.webp`}
                alt={image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
