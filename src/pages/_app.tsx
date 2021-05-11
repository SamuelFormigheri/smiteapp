import SharedContext from '../context';
import Shared from './_shared';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <SharedContext>
      <Shared>
        <Component {...pageProps} />
      </Shared>
    </SharedContext>
    )
}

export default MyApp
