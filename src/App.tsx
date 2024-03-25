import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Diego-P-S.png",
      name: "Diego Pereira dos Santos",
      role: "Frontend Developer",
    },
    content: [
      { type: "paragraph", content: "Hello there 👋" },
      {
        type: "paragraph",
        content:
          "I just created my portfolio. I will keep you updated with my projects and studies 🚀",
      },
      { type: "link", content: "https://www.diegosantos.com.au" },
    ],
    publishedAt: new Date("2024-03-25 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}
