import Head from 'next/head';


import { NavBar } from '../componentes/NavBar';
import {Pomodoro} from '../componentes/pomodoro';

export default function Home() {
  return (

    <div>
        <NavBar />
        <Pomodoro />
    </div>
  )
}
