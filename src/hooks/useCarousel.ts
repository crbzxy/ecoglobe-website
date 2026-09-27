import { useState } from "react";

export function useCarousel(length: number) {
  const [index, setIndex] = useState(0);

  function goTo(nextIndex: number) {
    setIndex((nextIndex + length) % length);
  }

  return {
    index,
    goTo,
    goNext: () => goTo(index + 1),
    goPrev: () => goTo(index - 1)
  };
}
