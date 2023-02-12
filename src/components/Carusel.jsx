import mock1 from "../images/photo_2023-01-04_20-47-55.jpg";
import mock2 from "../images/photo_2023-01-04_20-48-02.jpg";
import mock3 from "../images/photo_2022-04-15_00-36-08.jpg";
import mock4 from "../images/photo_2022-06-18_23-00-52.jpg";
import mock5 from "../images/photo_2022-07-03_23-08-43.jpg";
import mock6 from "../images/photo_2022-07-31_23-57-35.jpg";
import mock7 from "../images/photo_2022-09-22_13-42-51.jpg";
import mock8 from "../images/photo_2022-11-20_00-45-03.jpg";
import mock9 from "../images/photo_2023-01-04_20-47-50.jpg";
import mock10 from "../images/photo_2023-01-04_20-47-58.jpg";

import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: mock10,
    altText: "Моя любимая Асенька",
    caption: "",
  },
  {
    src: mock3,
    altText: "",
    caption:
      "Я надеюсь, что это сообщение ты прочитаешь в хорошем настроении. Я пишу, чтобы выразить свою глубокую любовь и привязанность к тебе. Я благодарен судьбе, что ты есть в моей жизни, и я всегда буду благодарен тебе за счастье и радость, которые ты приносишь в мой мир каждый день.",
  },
  {
    src: mock2,
    altText: "",
    caption:
      "Я думал о нашем совместном будущем и готов сделать следующий шаг. Я хотел бы просить твоей руки и провести остаток своей жизни рядом с тобой.",
  },
  {
    src: mock1,
    altText: "",
    caption:
      "Я надеюсь, что это сообщение ты прочитаешь в хорошем настроении. Я пишу, чтобы выразить свою глубокую любовь и привязанность к тебе. Я благодарен судьбе, что ты есть в моей жизни, и я всегда буду благодарен тебе за счастье и радость, которые ты приносишь в мой мир каждый день.",
  },
  {
    src: mock6,
    altText: "Итак, дорогая моя Ася, ты выйдешь за меня замуж?",
    caption: "",
  },
  {
    src: mock8,
    altText: "Твой всегда и на всю жизнь,",
    caption: "",
  },
  {
    src: mock9,
    altText: "Деня",
    caption: "",
  },
];

export const Carusel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={item.src}
            alt={item.altText}
            style={{
              height: "100vh",
              width: "50vw",
              objectFit: "cover",
            }}
          />
        </div>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.altText}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      style={{
        backgroundColor: "#232323",
        overflow: "hidden",
      }}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};
