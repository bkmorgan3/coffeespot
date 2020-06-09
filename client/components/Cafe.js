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
  deleteCafe
}) => {
    return (<div className="cafe" key={shopId}>

      <div className="photo-container">
        <img className="photo" src={shopImg} alt={shopName} />
      </div>
      <div className="content">
        <p>
          {shopName}
        </p>
        <p>
          {shopAddress}
        </p>
        <p>
          {shopZip}
        </p>
        <p>
          {shopCity}
        </p>
        <p>
          {shopPhone}
        </p>
        <button onClick={() => deleteCafe()} className="delete">Remove Cafe</button>
      </div>
    </div>);
  };

Cafe.propTypes = {
  shopId: PropTypes.string.isRequired,
  shopName: PropTypes.string.isRequired,
  shopImg: PropTypes.string.isRequired,
  shopAddress: PropTypes.string.isRequired,
  shopZip: PropTypes.string.isRequired,
  shopCity: PropTypes.string.isRequired,
  shopPhone: PropTypes.string.isRequired,
  deleteCafe: PropTypes.func.isRequired
};

export default Cafe;
