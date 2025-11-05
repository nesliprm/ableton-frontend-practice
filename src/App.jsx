import { NavBar } from "./components/NavBar";
import { Hero } from "./components/Hero";
import { TextBlock } from "./components/TextBlock";
import { MediaBlock } from "./components/MediaBlock";
import { Footer } from "./components/Footer";
import textBlockData from "./data/text-block-data.json";
// import mediaBlockData from "./data/media-block-data.json";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      {textBlockData.slice(0, 1).map((text) => (
        <TextBlock key={text.id} heading={text.heading} body={text.body} />
      ))}

      <MediaBlock />

      <Footer />
    </>
  );
}

export default App;
