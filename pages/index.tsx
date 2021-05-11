import Header from '../components/Header'
import About from '../sections/index/About'
import Navbar from '../components/Navbar';
import Projects from '../sections/index/Projects';

export interface HomeProps {

}

const Home: React.FC<HomeProps> = ({ }): JSX.Element => {
  return (
    <>
      <Navbar brandName="Kritibytes" />
      <Header
        htext="Kritibytes"
        description="We are creating tech stuff for helping community!"
      />
      <About />
      <Projects />
    </>
  )
}

export default Home