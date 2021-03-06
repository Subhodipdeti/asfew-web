import '../styles/global.css';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';
import SEO from '../next-seo.config';

function App({ Component, pageProps }) {

  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SEO} />
        <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
