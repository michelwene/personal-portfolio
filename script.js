var slider = tns({
  container: ".my-slider",
  items: 1,
  speed: 600,
  autoplay: true,
  autoplayButtonOutput: false,
  controlsContainer: "#custom-control",
  mode: "gallery",
  responsive: {
    0: {
      nav: true,
      navPosition: "bottom",
      autoplay: false,
    },
    1024: {
      autoplay: true,
    },
  },
});


