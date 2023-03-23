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
          <Posts href = "/posts/img/Phone.png" date  = "11.02.2023" text = "Как писать код быстро и безболезненно?" txt = "Программировать быстро — это легко! Так считает инженер-программист компании Google, который все публикации в своем блоге подписывает лаконичным «Макс». Макс также работает главным архитектором, комьюнити-менеджером и релиз-менеджером в Bugzilla Project. Мы в Alconost впечатлились и перевели его советы о том, можно ли как научиться программировать с космической скоростью."/>
          <Posts href = "/posts/img/MacBook.png" date  = "23.02.2023" text = "Купил новый ноутбук за 150 000 руб" txt = ""/>
          <Posts href = "/posts/img/image-post.jpg" date  = "2.03.2023" text = "Как я сходил на FrontEnd Conf 2023" txt = "Не стану утверждать, что фронтенд важнее бэкенда, или поддерживать спорную концепцию, что «бэкенд в современном вебе не обязателен». Оставим холивары в стороне, просто признаем, что фронтенд-разработчик занимается собственно клиентской стороной веб-проектов, а значит его работа больше всего видна конечным пользователям, за которых идет борьба. То есть, не уделить фронтенду должного внимания, просто непозволительная роскошь."/>
          <Numberse/>
        </main>
      </div>
    </>
  )
}
