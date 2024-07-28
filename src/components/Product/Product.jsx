import PropTypes from 'prop-types';

const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "gray",
  color: "white",
};

export default function Product({
  name,
  imgUrl = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
  price
}) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width="640" />
      <p>Price: {price} credits</p>
      <p style={alertStyles}>Payment received, thank you for your purchase!</p>
    </div>
  );
}

  // Опис типів пропсів компонента 
  Product.propTypes = {
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string,
    price: PropTypes.number.isRequired,
  };
