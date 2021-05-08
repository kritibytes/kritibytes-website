import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../components/Button';
import Header from '../components/Header'
import About from '../sections/index/About'
import { useState } from 'react';

type AppProps = {}

const Home: React.FunctionComponent<AppProps> = ({ }: AppProps): JSX.Element => {
  const [btnText, setBtnText] = useState("")

  return (
    <>
      <Header
        htext="Kritibytes"
        description="We are creating tech stuff for helping community!"
      />
      <About />
    </>
  )
}

export default Home