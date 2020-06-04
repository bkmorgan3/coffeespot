const getLocation = () => {
  console.log('getting location');
  navigator.geolocation.getCurrentPosition((position) => {
    console.log('pos', position.coords);
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log('l', latitude, 'la', longitude);

    return {
      latitude,
      longitude,
    };
  });
};


module.exports = {
  getLocation,
};
