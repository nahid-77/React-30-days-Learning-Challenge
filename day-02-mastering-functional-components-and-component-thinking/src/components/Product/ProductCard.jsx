import ProductImage from './ProductImage';
import ProductTitle from './ProductTitle';
import ProductPrice from './ProductPrice';
import ProductRating from './ProductRating';
import AddToCartButton from './AddToCartButton';

export default function ProductCard({ product }) {

  const handleAddToCart = () => {
    alert(`Added ${product.title} to cart!`);
  };

  return (

    <div style={{ 
      maxWidth: '300px', 
      border: '1px solid #eee', 
      borderRadius: '16px', 
      padding: '16px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
    }}>

      <ProductImage src={product.imageUrl} alt={product.title} />
      <ProductTitle title={product.title} />
      <ProductRating rating={product.rating} />
      <ProductPrice price={product.price} />
      <AddToCartButton onClick={handleAddToCart} disabled={!product.inStock} />
    </div>

  );
}