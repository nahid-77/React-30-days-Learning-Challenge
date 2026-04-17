export default function ProductPrice({ price, currency = '$' }) {

  return(
  <p style={{ fontSize: '1.5rem', fontWeight: 'bold', margin: '8px 0' }}>
    {currency}{price.toFixed(2)}
  </p>
  );
}