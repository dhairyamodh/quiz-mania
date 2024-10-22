import Navbar from "./components/Navbar";
import Quiz from "./pages/quiz";

function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <div className="flex justify-center py-2 md:py-10 min-h-screen">
        <Quiz />
      </div>
    </div>
  );
}

export default App;
