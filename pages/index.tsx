import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Button from '../components/Button';
import Header from '../components/Header'
import About from '../sections/index/About'
import { useState } from 'react';
import Navbar from '../components/Navbar';

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
    </>
  )
}

export default Home