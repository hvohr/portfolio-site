import '../Components/App/App.css';

function About() {
  return (
    <section className='about-me-container'>
      <p className='about-me'>
        Welcome to my corner of the internet! I'm Hollis, a passionate Frontend Developer from Denver, Colorado.
        My coding journey is fueled by a passion for creating visually captivating, seamlessly functioning, and user-friendly web experiences. With expertise in HTML/CSS, JavaScript, React and various frontend frameworks, I specialize in turning ideas into interactive digital realities. User experience is at the core of my work.
      </p>
      <p className='about-me'>
        As a lifelong learner, I'm committed to staying at the forefront of web development trends and best practices. The ever-evolving nature of the digital world is an exhilarating challenge, and I am stoked at the opportunity to continuously expand my skill set. Working closely with designers, back-end developers, and clients, I aspire to transform concepts into responsive, pixel-perfect web solutions that leave a lasting impression.
      </p>
      <p className='about-me'>
        When I'm not immersed in code, you might be find me hiking, crocheting, or finding a new fun puzzle.
      </p>
      <a className='about-greeting-resume' href="https://docs.google.com/document/d/1YUktJ-xHPeqUAHHXysLYoIe6Oc7_0_wwhb_tTCGcAhM/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
    </section>
  )
}

export default About