import SharedContext from '../context';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <SharedContext>
      <Component {...pageProps} />
    </SharedContext>
    )
}

export default MyApp
