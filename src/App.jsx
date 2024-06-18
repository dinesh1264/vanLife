import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Van } from "./components/Van";
import { Footer } from "./components/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex-row">
        <header className="flex-none">
          <Header />
        </header>

        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/van" element={<Van />} />
          </Routes>
        </main>
        <footer className="flex-none">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
