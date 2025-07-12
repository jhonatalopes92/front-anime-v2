import "@/styles/globals.css";
import Script from "next/script";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return <>
    <Script
    id="clarity-script"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "sdunxr52mj");`
    }}
    />
    <ToastContainer
      position="top-right"
      autoClose={3000}
      theme="colored"
      draggable={"touch"}
    />
    <Component {...pageProps} />
  </>
}
