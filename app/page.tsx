import HomePage from "./home/page";
import Navbar from "./navbar/page";
import Projects from "./projects/page";
import Works from "./works/page";

export default function Home() {
  return (
    <div className="bg-custom-gray">
        <HomePage />
        <Projects />
        <Works />
      </div>
  );
}
