import FollowingBar from "@/components/FollowingBar";
import PostList from "@/components/PostList";
import Sidebar from "@/components/Sidebar";

export default function HomePage() {
  return (
    <main className="grid grid-cols-2">
      <section>
        <FollowingBar />
        <PostList />
      </section>
      <Sidebar />
    </main>
  );
}
