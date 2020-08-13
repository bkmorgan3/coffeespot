import React from 'react';
import PropTypes from 'prop-types';
import Cafe from './Cafe';


const CafeScreen = ({
  cafes,
  deleteCafe,
}) => (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="container">
      <h1>Welcome to the Cafe Screen</h1>
      <div className="cafe-layout">
        {
          cafes.map(({
            shopId,
            shopName,
            shopImg,
            shopAddress,
            shopZip,
            shopCity,
            shopPhone,
          }) => (
              <Cafe
                key={shopId}
                shopId={shopId}
                shopName={shopName}
                shopImg={shopImg}
                shopAddress={shopAddress}
                shopZip={shopZip}
                shopCity={shopCity}
                shopPhone={shopPhone}
                deleteCafe={deleteCafe}
              />
            ))
        }
      </div>
    </div>
  );

CafeScreen.propTypes = {
  cafes: PropTypes.arrayOf(
    PropTypes.shape({
      shopId: PropTypes.string.isRequired,
      shopName: PropTypes.string.isRequired,
      shopImg: PropTypes.string.isRequired,
      shopAddress: PropTypes.string.isRequired,
      shopZip: PropTypes.string.isRequired,
      shopCity: PropTypes.string.isRequired,
      shopPhone: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteCafe: PropTypes.func.isRequired
};

export default CafeScreen;
