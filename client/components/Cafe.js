import React from 'react';
import PropTypes from 'prop-types';

// declare proptypes use isRequired

const Cafe = ({
  shopId,
  shopName,
  shopImg,
  shopAddress,
  shopZip,
  shopCity,
  shopPhone,
}) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <div className="cafe" key={shopId}>
    <img className="photo" src={shopImg} alt={shopName} />
    <p>
shopName:
      {shopName}
    </p>
    <p>
shopAddress:
      {shopAddress}
    </p>
    <p>
shopZip:
      {shopZip}
    </p>
    <p>
shopCity:
      {shopCity}
    </p>
    <p>
shopPhone:
      {shopPhone}
    </p>
  </div>
);

Cafe.propTypes = {
  shopId: PropTypes.string.isRequired,
  shopName: PropTypes.string.isRequired,
  shopImg: PropTypes.string.isRequired,
  shopAddress: PropTypes.string.isRequired,
  shopZip: PropTypes.string.isRequired,
  shopCity: PropTypes.string.isRequired,
  shopPhone: PropTypes.string.isRequired,
};

export default Cafe;
