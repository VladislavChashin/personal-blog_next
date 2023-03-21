import { Header } from "./components/header/header";
import { Numberse } from "./components/number/number";
import { Posts } from "./components/posts/posts";
import { Search } from "./components/search/search";
import { Sidebar } from "./components/sidebar/sidebar";
import { Store_Window } from "./components/stories/store_window";
import { Stories } from "./components/stories/stories";

export default function Home() {
  return (
    <> 
    <Store_Window/>
      <aside>
        <Sidebar/>
      </aside>
      <div className="content_wrap">
        <header>
          <Header/>
        </header>
        <main>
          <Stories/>
          <Search/>
          <Posts/>
          <Posts/>
          <Numberse/>
        </main>
      </div>
    </>
  )
}
