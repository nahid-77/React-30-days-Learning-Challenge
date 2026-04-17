import ProfileCard from './components/Profile/ProfileCard';
import ProductCard from './components/Product/ProductCard';

function App() {
  
  const sampleUser = {
    firstName: 'Ada',
    lastName: 'Lovelace',
    title: 'First Computer Programmer',
    avatarUrl: 'https://i.pravatar.cc/300?img=7',
    bio: 'Mathematician and writer, chiefly known for her work on Charles Babbage\'s proposed mechanical general-purpose computer, the Analytical Engine.',
    socialLinks: [
      { platform: 'Twitter', url: '#' },
      { platform: 'GitHub', url: '#' },
      { platform: 'LinkedIn', url: '#' }
    ]
  };


  const sampleProduct = {
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
    title: 'Minimalist Watch',
    price: 129.99,
    rating: 4.8,
    inStock: true
  };

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '30px',
    padding: '40px 20px',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  return (
    <div style={containerStyle}>
      <ProfileCard user={sampleUser} />
      <ProductCard product={sampleProduct} />
    </div>
  );
}

export default App;