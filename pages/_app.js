import "tailwindcss/tailwind.css";
import "../styles/style.css";
function MyApp({ Component, pageProps }) {
  return (
    <main
      data-scroll-container
      className="bg-gradient-to-r from-gray-900 to-indigo-900 relative"
      id="main-wrap"
    >
      <div className="font-mono min-h-screen">
        <Component {...pageProps} />
      </div>
    </main>
  );
}

export default MyApp;
