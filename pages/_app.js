import variables from '../styles/main.scss';
import Nav from "../components/navbar"
import { Bitter } from '@next/font/google'
import Head from 'next/head';
import { DEFAULT_SEO } from '../config';
const bitter = Bitter({ 
  
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'] })

export default function App({ Component, pageProps }) {

  return(
  <main className={bitter.className}>
     <Head>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

 
        <title key="title">{DEFAULT_SEO.title}</title>
        <meta
                  key="description"
                  name="description"
                  content={DEFAULT_SEO.description}
                />
        <meta key="viewport" name="viewport" content="initial-scale=1.0, width=device-width" />
                  
             
            
                <meta
                  key="og:url"
                  property="og:url"
                  content={DEFAULT_SEO.openGraph.url}
                />
                <meta
                  key="og:type"
                  property="og:type"
                  content={DEFAULT_SEO.openGraph.type}
                />
                <meta
                  key="og:title"
                  property="og:title"
                  content={DEFAULT_SEO.openGraph.title}
                />
                <meta
                  key="og:description"
                  property="og:description"
                  content={DEFAULT_SEO.openGraph.description}
                />
                <meta
                  key="og:image"
                  property="og:image"
                  content={DEFAULT_SEO.openGraph.image}
                />
                <meta
                  key="og:image:width"
                  property="og:image:width"
                  content={DEFAULT_SEO.openGraph.imageWidth}
                />
                <meta
                  key="og:image:height"
                  property="og:image:height"
                  content={DEFAULT_SEO.openGraph.imageHeight}
                />
                <meta
                  key="og:locale"
                  property="og:locale"
                  content={DEFAULT_SEO.openGraph.locale}
                />
   <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png"/>
                <link rel="icon" type="image/png" sizes="192x192"  href="/favicons/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="512x512"  href="/favicons/android-icon-512x512.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="msapplication-TileColor" content="#ffffff"/>
                <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png"/>
                <meta name="theme-color" content="#ffffff"/>


<meta name="msapplication-TileColor" content="#ffffff"/>
<meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png"/>
<meta name="theme-color" content="#ffffff"/>
            
        </Head>
    <Nav />
    <Component {...pageProps} />
  </main>)
  
}
