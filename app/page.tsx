import React from 'react'
import styles from './styles.css'
import { InstagramGallery } from "instagram-gallery"

const InstagramFeed = (props: any) => {
  ;

  return (
    <section className={styles.containerFeed}>
      <link rel="stylesheet" type="text/css" href="/files/instagram-feed.css" />
      <h2 className={styles.instagram_feedTitle}>Instagram</h2>
      <div id="instagram-feed1" className={styles.instagram_feed}></div>
      <InstagramGallery accessToken="" count={3} />
    </section>
  )
}


export default InstagramFeed
