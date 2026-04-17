import Avatar from './Avatar';
import Name from './Name';
import Bio from './Bio';
import SocialLinks from './SocialLinks';

export default function ProfileCard({ user }) {

  const cardStyle = {
    maxWidth: '450px',
    margin: '40px auto',
    padding: '30px 20px',
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
    border: '1px solid #f1f3f5',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  };

  return (

    <div style={cardStyle}>

      <Avatar 
        imageUrl={user.avatarUrl} 
        altText={`${user.firstName} ${user.lastName}`} 
        size={120} 
      />

      <Name 
        firstName={user.firstName} 
        lastName={user.lastName} 
        title={user.title} 
      />

      <Bio text={user.bio} />

      <SocialLinks links={user.socialLinks} />
      
    </div>

  );
}