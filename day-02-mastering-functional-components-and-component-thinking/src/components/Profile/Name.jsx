
export default function Name({ firstName, lastName, title }) {

  const fullName = `${firstName} ${lastName}`;

  return (
    <div style={{ textAlign: 'center' }}>
      <h2 style={{ marginBottom: '4px' }}>{fullName}</h2>
      {title && <p style={{ color: '#6c757d', marginTop: 0 }}>{title}</p>}
    </div>
  );
  
}