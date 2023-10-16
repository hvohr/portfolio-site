import '../Components/App/App.css';
import { useState } from 'react'

function Projects() {
  const [showBareMin, setShowBareMin] = useState(false)
  const [showClear, setShowClear] = useState(false)
  const [showKnit, setShowKnit] = useState(false)
  const [disableView, setDisableView] = useState(false)

  function handleClose() {
    setShowBareMin(false)
    setDisableView(false)
    setShowClear(false)
    setShowKnit(false)
  }

  function handleOpen(project) {
    if (project === 'Clear') {
      setShowClear(true)
      setDisableView(true)
    } else if (project === 'BareMin') {
      setShowBareMin(true)
      setDisableView(true)
    } else if (project === 'Knit') {
      setShowKnit(true)
      setDisableView(true)
    }
  }

  return (
    <section>
      <section style={{ filter: (showClear || showBareMin || showKnit) ? "blur(8px)" : "blur(0px)" }}>
        <section className='project-container'>
        <div className='knit-container'>
            <h3 className='project-title'>The Knit Nest</h3>
            <img className='project-image' src={require('../Components/images/Untitled design (63).png')}></img>
            <div>
              {!disableView && <button className='view-more' onClick={() => handleOpen('Knit')}>Learn More</button>}
            </div>
          </div>
          <div className='bare-minimum-container'>
            <h3 className='project-title'>Bare Minimum</h3>
            <img className='project-image' src={require('../Components/images/Untitled design (4).png')}></img>
            <div>
              {!disableView && <button className='view-more' onClick={() => handleOpen('BareMin')}>Learn More</button>}
            </div>
          </div>
          <div className='clear-skies-container'>
            <h3 className='project-title'>ClearSkies</h3>
            <img className='project-image' src={require('../Components/images/2.png')}></img>
            <div>
              {!disableView && <button className='view-more' onClick={() => handleOpen('Clear')}>Learn More</button>}
            </div>
          </div>
        </section>
      </section>
      {showKnit && <section className='modal-container'>
        <button className='view-more-close' onClick={() => handleClose()}><img className='exit' src={require('../Components/images/close.png')} /></button>
        <img className='project-image2' src={require('../Components/images/Screenshot 2023-10-15 at 6.44.45 PM.png')} />
        <p className='project-description'>Welcome to The Knit Nest! A full-stack e-commerce application that lets allows yarn and craft lovers to peruse a website that contains all the items they could desire! Login in not required for the site, but to save your cart and information, one has to ability to log in or create an account if they are a new user. A user can look through our products that include yarn, books, and crafting tools. A user can also search through our full inventory or sort/refine by various categories. We hope you enjoy The Knit Nest and all that it has to offer!.</p>
        <p className='tech-used'>Technologies Used: Javascript, ReactJS, HTML/CSS, ExpressJS, CORS, NodeJS, Webpack</p>
        <a className='about-greeting-source' href="https://github.com/hvohr/the-knit-nest" target="_blank" rel="noopener noreferrer">View Source Code</a>
        <a className='about-greeting-source' href="https://the-knit-nest.vercel.app/" target="_blank" rel="noopener noreferrer">View Deployed Link</a>
      </section>}
      {showBareMin && <section className='modal-container'>
        <button className='view-more-close' onClick={() => handleClose()}><img className='exit' src={require('../Components/images/close.png')} /></button>
        <img className='project-image2' src={require('../Components/images/bareminimum.png')} />
        <p className='project-description'>Welcome to Bare Minimum! Feeling discouraged about completing large scale tasks and projects? Well, our application is the one for you! Bare Minimum is your go to organization website that breaks down tasks into small simple ones. A user can choose from any of the categories and be presented with a task that is smaller and more easily manageable! If the user feels like the task is something they can accomplish, we have the option to save this task to a personal list. This way, a user can view all their saved tasks and mark them when they are complete! A user can also decide to delete a task from that list when they no longer wish to complete it. Our app is fully functioning on both your computer or your phone, making it easy to complete these tasks on the go! We hope you enjoy Bare Minimum!</p>
        <p className='tech-used'>Technologies Used: ExpressJS, Javascript, ReactJS, HTML/CSS, Cypress, Webpack, RESTful API's, Knex, CORS</p>
        <a className='about-greeting-source' href="https://github.com/hvohr/bare-minimum" target="_blank" rel="noopener noreferrer"> View Source Code</a>
        <a className='about-greeting-source' href="https://bare-minimum.vercel.app/" target="_blank" rel="noopener noreferrer">View Deployed Link</a>
      </section>}
      {showClear && <section className='modal-container'>
        <button className='view-more-close' onClick={() => handleClose()}><img className='exit' src={require('../Components/images/close.png')} /></button>
        <img className='project-image2' src={require('../Components/images/clearskies.png')} />
        <p className='project-description'>Welcome to ClearSkies! A weather application that lets a user know a cities current and daily weather. This app also lets you search cities and view real time weather information! It is only available to people in the US and to get the full experience, make sure you have location services turned on - this allows ClearSkies to obtain your current weather right outside your front door. I hope you enjoy ClearSkies.</p>
        <p className='tech-used'>
        Technologies Used: Javascript, ReactJS, HTML/CSS, Cypress, Webpack, FETCH API's</p>
        <a className='about-greeting-source' href="https://github.com/hvohr/clearskies" target="_blank" rel="noopener noreferrer">View Source Code</a>
        <a className='about-greeting-source' href="https://clearskies.vercel.app/" target="_blank" rel="noopener noreferrer">View Deployed Link</a>
      </section>}
    </section>
  )
}

export default Projects