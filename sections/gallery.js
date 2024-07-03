import React, { useState } from "react";
import { albums } from "@/utils/data";
import { Button } from "@ibrahimstudio/button";
import { GalleryButton } from "@/components/buttons";
import styles from "@/styles/Home.module.css";

export function Gallery({ sectionId }) {
  const [selectedAlbum, setSelectedAlbum] = useState(albums[0]);
  const [expanded, setExpanded] = useState(false);

  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  const toggleExpand = () => {
    setExpanded((prevExpand) => !prevExpand);
  };

  const displayLimit = expanded ? selectedAlbum.images.length : 8;

  return (
    <section
      id={sectionId}
      section-view-id={sectionId}
      className={styles.certifications}
    >
      <div className={styles.facilityHeading}>
        <h1 className={styles.factoryTitle}>Our Gallery</h1>
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
          {selectedAlbum.images.slice(0, displayLimit).map((image, index) => (
            <div className={styles.galleryImageWrap} key={index}>
              <img
                className={styles.galleryImage}
                src={`/img/albums/${image}.webp`}
                loading="lazy"
                alt={image}
              />
            </div>
          ))}
        </div>
        <div className={styles.galleryCta}>
          {selectedAlbum.images.length > 8 && (
            <Button
              id={expanded ? "less-gallery" : "expand-gallery"}
              buttonText={expanded ? "Show Less" : "Display All Photos"}
              radius="md"
              onClick={toggleExpand}
            />
          )}
        </div>
      </div>
    </section>
  );
}
