export const pokemonsColors = {
  bug: '#8CB230',
  dark: '#58575F',
  dragon: '#0F6AC0',
  electric: '#EED535',
  fairy: '#ED6EC7',
  fighting: "#D04164",
  fire:"#FD7D24",
  flying: "#748FC9",
  ghost: "#556AAE",
  grass: "#62B957",
  ground: "#DD7748",
  ice: "#61CEC0",
  normal: "#9DA0AA",
  poison: "#A552CC",
  psychic: "#EA5D60",
  rock: "#BAAB82",
  steel: "#417D9A",
  water: "#4A90DA",
}

export const backgroundColors = {
  grassbkg: '#8BD674',
  bkgdark: '#8BD674',
  bkgbug: '#8CB230',
  bkgdragon: '#7383B9',
  bkgelectric: '#F2CB55',
  bkgfairy: '#EBA8C3',
  bkgfighting: "#EB4971",
  bkgfire:"#FFA756",
  bkgflying: "#83A2E3",
  bkgghost: "#8571BE",
  bkgground: "#F78551",
  bkgice: "#91D8DF",
  bkgnormal: "#B5B9C4",
  bkgpoison: "#9F6E97",
  bkgpsychic: "#FF6568",
  bkgrock: "#D4C294",
  bkgsteel: "#4C91B2",
  waterbkg: "#58ABF6",
}

export default {
  colors: {
    ...pokemonsColors,
    ...backgroundColors,

    background: "#DEDEDE",

    textColor: "#2B2B2B",
  }
}