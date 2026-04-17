export default function SocialLinks({ links }) {
  
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#0d6efd',
    fontWeight: '500'
  };

  return (
    <div style={containerStyle}>
        
      {links.map((link, index) => (
        <a key={index} href={link.url} style={linkStyle} target="_blank" rel="noopener noreferrer">
          {link.platform}
        </a>
      ))}

    </div>
  );
}