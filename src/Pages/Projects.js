import '../Components/App/App.css';
import { useState } from 'react'

function Projects() {
  const [showBareMin, setShowBareMin] = useState(false)
  const [showClear, setShowClear] = useState(false)
  const [showPort, setShowPort] = useState(false)


  function handleClose() {
    setShowBareMin(false)
    setShowClear(false)
    setShowPort(false)
  }

  function handleOpen(project) {
    if (project === 'Clear') {
      setShowClear(true)
    } else if (project === 'BareMin') {
      setShowBareMin(true)
    } else if (project === 'Port') {
      setShowPort(true)
    }
  }

  return (
    <section className='project-container'>
      <div className='bare-minimum-container'>
        <h3 className='project-title'>Bare Minimum</h3>
        <img className='project-image' src={require('../Components/images/Untitled design (4).png')}></img>
        <div>
          <button className='view-more' onClick={() => handleOpen('BareMin')}>View More</button>
        </div>
        {showBareMin && <section className='modal-container'>
          <p className='project-description'>Welcome to Bare Minimum! Feeling discouraged about completing large scale tasks and projects? Well, our application is the one for you! Bare Minimum is your go to organization website that breaks down tasks into small simple ones. A user can choose from any of the categories and be presented with a task that is smaller and more easily manageable! If the user feels like the task is something they can accomplish, we have the option to save this task to a personal list. This way, a user can view all their saved tasks and mark them when they are complete! A user can also decide to delete a task from that list when they no longer wish to complete it. Our app is fully functioning on both your computer or your phone, making it easy to complete these tasks on the go! We hope you enjoy Bare Minimum!</p>
          <p className='tech-used'>Technologies Used: ExpressJS, Javascript, ReactJS, HTML/CSS, Cypress, Webpack, FETCH API's, Knex, CORS</p>
          <a className='bare-mimimum-source' href="https://github.com/hvohr/bare-minimum" target="_blank" rel="noopener noreferrer"> View Source Code</a>
          <a className='clear-skies-source' href="https://bare-minimum.vercel.app/" target="_blank" rel="noopener noreferrer">View Deployed Link</a>
          <button className='view-more' onClick={() => handleClose()}>Close</button>
        </section>}
      </div>
      <div className='clear-skies-container'>
        <h3 className='project-title'>ClearSkies</h3>
        <img className='project-image' src={require('../Components/images/2.png')}></img>
        <div>
          <button className='view-more' onClick={() => handleOpen('Clear')}>View More</button>
        </div>
        {showClear && <section className='modal-container'>
          <p className='project-description'>Welcome to ClearSkies! A weather application that lets a user know a cities current and daily weather. This app also lets you search cities and view real time weather information! It is only available to people in the US and to get the full experience, make sure you have location services turned on - this allows ClearSkies to obtain your current weather right outside your front door. I hope you enjoy ClearSkies.</p>
          <p className='tech-used'>Technologies Used: Javascript, ReactJS, HTML/CSS, Cypress, Webpack, FETCH API's</p>
          <a className='clear-skies-source' href="https://github.com/hvohr/clearskies" target="_blank" rel="noopener noreferrer">View Source Code</a>
          <a className='clear-skies-source' href="https://clearskies.vercel.app/" target="_blank" rel="noopener noreferrer">View Deployed Link</a>
          <button className='view-more' onClick={() => handleClose()}>Close</button>
        </section>}
      </div>
      <div className='porfolio-container'>
        <h3 className='project-title'>Portfolio</h3>
        <img className='project-image' src={require('../Components/images/3.png')}></img>
        <div>
          <button className='view-more' onClick={() => handleOpen('Port')}>View More</button>
        </div>
        {showPort && <section className='modal-container'>
          <p className='project-description'>Welcome to my personal porfolio. You are currently viewing the deployed product, so enjoy and don't hesitate to reach out(include link to contact lmao) to me!</p>
          <p className='tech-used'>Technologies Used: React, Javascript, ReactJS, HTML/CSS</p>
          <a className='porfolio-source' href="https://github.com/hvohr/portfolio-site" target="_blank" rel="noopener noreferrer">View Source Code</a>
          <button className='view-more' onClick={() => handleClose()}>Close</button>
        </section>}
      </div>
    </section>
  )
}

export default Projects