import Header from "/components/Header";
import "/styles/globals.css";
import { AuthProvider } from "/context/AuthContext";
import "draft-js/dist/Draft.css";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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
