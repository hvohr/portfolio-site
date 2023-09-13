import '../Components/App/App.css';

function Projects() {
  return (
    <section>
      <div className='bare-minimum-container'>
        <h3>Bare Minimum</h3>
        <button>View More</button>
        <section className='modal-container'>
          <p className='project-description'>Welcome to Bare Minimum! Feeling discouraged about completing large scale tasks and projects? Well, our application is the one for you! Bare Minimum is your go to organization website that breaks down tasks into small simple ones. A user can choose from any of the categories and be presented with a task that is smaller and more easily manageable! If the user feels like the task is something they can accomplish, we have the option to save this task to a personal list. This way, a user can view all their saved tasks and mark them when they are complete! A user can also decide to delete a task from that list when they no longer wish to complete it. Our app is fully functioning on both your computer or your phone, making it easy to complete these tasks on the go! We hope you enjoy Bare Minimum!</p>
          <p>Technologies Used: ExpressJS, Javascript, ReactJS, HTML/CSS, Cypress, Webpack, FETCH API's, Knex, CORS</p>
          <a className='bare-mimimum-source' href="https://github.com/hvohr/bare-minimum" target="_blank" rel="noopener noreferrer"> View Source Code</a>
        </section>
      </div>
      <div className='clear-skies-container'>
        <h3>Clear Skies</h3>
        <button>View More</button>

        <a className='clear-skies-source' href="https://www.buymeacoffee.com/hollisvohr" target="_blank" rel="noopener noreferrer">View Source Code</a>
      </div>
      <div className='clear-skies-container'>
        <h3>Portfolio</h3>
        <button>View More</button>

        <a className='porfolio-source' href="https://www.buymeacoffee.com/hollisvohr" target="_blank" rel="noopener noreferrer">View Source Code</a>
      </div>
    </section>
  )
}

export default Projects