import '../Components/App/App.css';

function About() {
  return (
    <section className='about-me-container'>
      <section className='about-container'>
        <p className='about-me'>
          Welcome! My name is Hollis and I live in Denver, Colorado.
          My coding journey began with the desire to create beautiful, seamlessly functioning, user-friendly web experiences. I have expertise in HTML/CSS, JavaScript, React and other frontend frameworks and user experience is at the core of my work.
        </p>
        <p className='about-me'>
          As a lifelong learner, I'm committed to staying at the forefront of development trends and best practices. The digital world is constantly changing, and I am stoked at the opportunity to continuously expand my skill set. Working closely with designers and back-end developers, I work to transform concepts into responsive, pixel-perfect web solutions that leave a lasting impression.
        </p>
        <p className='about-me'>
          With my background in sustainability and green tech, I hope to write code for a better future; I want to contribute to a path towards a cleaner, healthier planet. When I'm not immersed in code, you might find me hiking, crocheting, or doing a new fun puzzle.
        </p>
      </section>
      <a className='about-greeting-resume' href="https://docs.google.com/document/d/1YUktJ-xHPeqUAHHXysLYoIe6Oc7_0_wwhb_tTCGcAhM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
    </section>
  )
}

export default About