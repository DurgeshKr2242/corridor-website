import Header from "/components/Header";
import "/styles/globals.css";
import { AuthProvider } from "/context/AuthContext";

export default function App({ Component, pageProps }) {
  return (
    <div id="appId">
      <AuthProvider>
        <Header />
        <Component {...pageProps} />
      </AuthProvider>
    </div>
  );
}
