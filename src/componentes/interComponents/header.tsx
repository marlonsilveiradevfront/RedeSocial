
'use client'


import styles from "./header.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

export default function Header() {
  const users = [
    {
      id: 0,
      name: "Azuley",
      story: true,
    },
    {
      id: 1,
      name: "Marlin",
      story: true,
    },
    {
      id: 3,
      name: "Bus",
      story: false,
    },
    {
      id: 4,
      name: "Miguel",
      story: true,
    },
    {
      id: 5,
      name: "Seila",
      story: false,
    },
  ];

  return (
    <section className={styles.storyContainer}>
      <Swiper
        slidesPerView={"auto"} // Importante: permite que os slides tenham largura dinâmica
        spaceBetween={15}      // Espaço entre os círculos
        freeMode={true}        // Permite deslizar livremente (estilo Instagram)
        modules={[FreeMode]}
        className={styles.mySwiper}
      >
        {users.map((user) => (
          <SwiperSlide key={user.id} className={styles.swiperCustom}>
            <div className={styles.storyItem}>
              <div className={user.story ? styles.storyRing : styles.noStory}>
                <div className={styles.imgSpace}>
                  <img
                    src={`https://i.pravatar.cc/150?u=${user.id}`}
                    className={styles.userImage}
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
