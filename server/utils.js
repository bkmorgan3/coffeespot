const getLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude } = position;
    const { longitude } = position;

    return {
      latitude,
      longitude,
    };
  });
};

module.exports = {
  getLocation,
};
