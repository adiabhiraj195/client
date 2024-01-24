import Introduction from '../subSection/introduction';
import About from '../subSection/about';
import Projects from '../subSection/projects';
import Skills from '../subSection/skills';
import Contact from '../subSection/contact';

const Base = () => {

  return (
    <div className='w-full pt-10 h-screen overflow-y-scroll no-scrollbar p-6 scroll-smooth'>
      {/* Introduction section */}
      <Introduction />

      {/* About Section  */}
      <About />

      {/* Projects section  */}
      <Projects />

      {/* Skills Section  */}
      <Skills />

      {/* Contact Form  */}
      <Contact />

    </div>
  )
}
export default Base;