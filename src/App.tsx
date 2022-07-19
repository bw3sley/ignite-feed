import { Post } from "./components/Post"; 
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";

import sytles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={sytles.wrapper}>
        <aside>
          <Sidebar />
        </aside>

        <main>
          <Post />

          <Post />
        </main>
      </div>
    </div>
  )
}
