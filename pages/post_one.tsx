import  Header  from "./components/header/header";
import  PostRead from "./components/posts/ready_post";
import  Sidebar  from "./components/sidebar/sidebar";

export default function PostOne() {
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
            <PostRead/>
          </main>
        </div>
      </>
    )
  }
  