'use client'

import styles from "./header.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Header() {
  const users = [
    { id: 0, name: "Azuley", story: true },
    { id: 1, name: "Marlin", story: true },
    { id: 3, name: "Bus", story: true },
    { id: 4, name: "Miguel", story: true },
    { id: 5, name: "Rondom", story: false },
    { id: 6, name: "Random1", story: false },
    { id: 7, name: "Random3", story: true },
    { id: 8, name: "Random4", story: false },
    { id: 9, name: "Random5", story: true },
  ];

  return (
    <section className={styles.storyContainer}>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={15}
        modules={[Navigation]}
        navigation={true}
        className={styles.meuSlide}
      >
        {users.map((user) => (
          <SwiperSlide key={user.id} className={styles.slideCustom}>
            <div className={styles.storyItem}>
              <div className={user.story ? styles.storyCircl : styles.noStory}>
                <div className={styles.imgs}>
                  <img
                    src={`https://i.pravatar.cc/150?u=${user.id}`}
                    className={styles.usuarioImg}
                    alt={user.name}
                  />
                </div>
              </div>
              <span className={styles.username}>{user.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}