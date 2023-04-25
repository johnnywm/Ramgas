/** @type {import('next').NextConfig} */

const withPlugins = require('next-compose-plugins');
const withWorkbox = require("next-with-workbox");

module.exports = withPlugins(
  [
  
 
     [withWorkbox,  { /* plugin config here ... */ }],
 //[withSass,  { /* plugin config here ... */ }],
   ],
   {
 
     reactStrictMode: true,
    
 
 
    
   },
 );