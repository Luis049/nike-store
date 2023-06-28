import { Cart, Footer, Hero, Sales, Stories } from "./components";
import FlexContent from "./components/FlexContent";
import Navbar from "./components/Navbar";
import {
  heroapi,
  popularsales,
  toprateslaes,
  highlight,
  sneaker,
  story,
  footerAPI,
} from "./data/data";

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifExists />
        <FlexContent endpoint={highlight} ifExists />
        <Sales endpoint={toprateslaes} />
        <FlexContent endpoint={sneaker} />
        <Stories title={story.title} news={story.news} />
      </main>
      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
