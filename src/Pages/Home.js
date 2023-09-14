import './pages.css'
import '../Components/App/App.css';

function Home() {
  return (
    <section className='home-container'>
      <section className="main">
        <div className='name-container'>
          <div className="name">Hol</div><div className='title'>lis&nbsp;</div><div className='first-last'>Vo</div><div className='title'>hr</div>
        </div>
        <div className='title-container'>
          <div className="title-original">Frontend&nbsp;</div>
          <div className='title-last'>Developer</div>
        </div>
      </section>
      <section className='light-section'>
          <div className="wire"></div>
          <div className="fixture">
            <div className="strip"></div>
            <div className="strip"></div>
            <div className="strip"></div>
          </div>
          <div className="home-bulb">
            <div className="bracket"></div>
            <div className="bracket"></div>
            <div className="bracket"></div>
          </div>
      </section>
    </section>
  )
}

export default Home