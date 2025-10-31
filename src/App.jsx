import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { TextBlock } from "./components/TextBlock";
import { MediaBlock } from "./components/MediaBlock";
import { Footer } from "./components/Footer";
import textBlockData from "./data/text-block-data.json";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <TextBlock
        heading={textBlockData[0].heading}
        body={textBlockData[0].body}
      />
      <MediaBlock />
      <Footer />
    </>
  );
}

export default App;
