
export default function Avatar({ imageUrl, altText, size = 80 }) {

  const style = {
    width: size,
    height: size,
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #e9ecef'
  };

  return <img src={imageUrl} alt={altText} style={style} />;
  
}