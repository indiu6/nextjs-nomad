import Layout from '../components/Layout';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      {/* <style jsx global>{`
        a {
          color: white;
        }
      `}</style> */}
    </Layout>
  );
}

export default App;
