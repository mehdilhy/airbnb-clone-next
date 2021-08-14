import { ChakraProvider } from '@chakra-ui/react'
import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router';
const progress = new ProgressBar({
  size:8,
  color:"black",
  className:"z-50",
  delay:100,
});
Router.events.on('routeChangeStart',progress.start);
Router.events.on('routeChangeComplete',progress.finish);
Router.events.on('routeChangeError',progress.finish);


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
  <Component {...pageProps} />
  </ChakraProvider>)
}

export default MyApp
