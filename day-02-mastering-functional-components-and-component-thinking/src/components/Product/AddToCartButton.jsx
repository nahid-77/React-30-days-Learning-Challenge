export default function AddToCartButton({ onClick, disabled = false }) {

  return (

    <button 
      onClick={onClick} 
      disabled={disabled}
      style={{
        backgroundColor: disabled ? '#ccc' : '#0d6efd',
        color: 'white',
        border: 'none',
        padding: '12px 24px',
        borderRadius: '8px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        width: '100%',
        fontWeight: 'bold'
      }}
    >

      {disabled ? 'Out of Stock' : 'Add to Cart'}
      
    </button>

  );
}