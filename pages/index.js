import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import variables from '../styles/sub.module.scss';
import Portada from '../components/Carrousel';
import Bannernormal from "../components/banner2"

const inter = Inter({ subsets: ['latin'] })

import dynamic from 'next/dynamic'

const Banner2 = dynamic(() => import('../components/banner2'), {
  loading: () => 'Loading...',
})
const Banner3 = dynamic(() => import('../components/banner3'), {
  loading: () => 'Loading...',
})
const Products = dynamic(() => import('../components/products'), {
  loading: () => 'Loading...',
})
const Imageimpact = dynamic(() => import('../components/imagenImpact'), {
  loading: () => 'Loading...',
})
const Articulos = dynamic(() => import('../components/Articulos'), {
  loading: () => 'Loading...',
})
const Footer = dynamic(() => import('../components/footer'), {
  loading: () => 'Loading...',
})
export default function Home() {
  return (
   <div className='scroller'>

  <Portada/>
  <Banner2/>
  <Products/>
  <Banner3/>
  <Imageimpact/>
  <Articulos/>
  <Footer/>
   </div>
  )
}
