export const scrollTo = (id: string): void => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export const hexAlpha = (hex: string, alpha: string): string =>
  `${hex}${alpha}`;
