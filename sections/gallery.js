"use client";

import React, { useState } from "react";
import { albums } from "@/utils/data";
import { GalleryButton } from "@/components/buttons";
import styles from "@/styles/Home.module.css";

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
        {/* <p className={styles.aboutDesc}>
          We offer you high quality cocoa powder produced from organic, fine,
          and fermented Indonesian cocoa beans. we accept customized cocoa
          powder as your needs and request, such like product color and chemical
          properties (pH value).
        </p> */}
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
