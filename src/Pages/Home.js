import './pages.css'
import '../Components/App/App.css';

function Home() {
  return (
    <section className='home-container'>
      <section className="main">
        <div className='name-container'>
          <div className="name">Hol</div><div>lis&nbsp;</div><div className='first-last'>Vo</div><div>hr</div>
        </div>
        <div className='title-container'>
          <div className="title">Frontend&nbsp;</div>
          <div className='title-last'>Developer</div>
        </div>
      </section>
      <img class="swingimage" src={require('../Components/images/Contemporary-Hanging-Lamp-PNG-Image.png')}/>
    </section>
  )
}

export default Home