
import Button from './components/Button'
import Avatar from './components/Avatar'
import Badge from './components/Badge'
import Card from './components/Card'
import Header from './components/Header'

function App() {

  const handleClick = () => alert('Button clicked!');

  return (
    <div style = {{ maxWidth : '600px', margin : '0 auto' }}>
      <Header
        title = 'React Foundations'
        rightElement = {<Badge text = "Day 01" color = "#17a2b8"/>}
      />
      <Card title = "Profile Card">
        <div style = {{display : 'flex', alignItems : 'center', gap : '50px'}}>

          <Avatar 
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="User Avatar"
          size = {84}
          />

          <div>
            <p><strong>Christian Bale</strong></p>
            <Badge text="Pro member" color="#047017" />
          </div>
        </div>

        <Button text="Edit Profile" onClick={handleClick} variant = "primary" />
      </Card>

      
    </div>
    
  )
}

export default App;
