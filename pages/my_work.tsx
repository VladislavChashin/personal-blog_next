import  Header  from "./components/header/header";
import  Work  from "./components/posts/work";
import  Sidebar  from "./components/sidebar/sidebar";

export default function MyWork() {
    return (
      <> 
        <aside>
          <Sidebar/>
        </aside>
        <div className="content_wrap">
          <header>
            <Header/>
          </header>
          <main>
            <h1>Мои работы</h1>
            <Work/>
            <Work/>
            <Work/>
          </main>
        </div>
      </>
    )
  }