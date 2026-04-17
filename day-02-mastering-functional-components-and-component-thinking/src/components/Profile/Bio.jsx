export default function Bio({ text }) {

  return (
    <p style={{ 
      textAlign: 'center', 
      color: '#495057', 
      lineHeight: '1.6',
      maxWidth: '400px',
      margin: '16px auto'
    }}>

      {text}
      
    </p>
  );

}