import { getFeeds } from "./service";
import { FeedView } from "./view";

export default async function Feed() {
  const { posts } = await getFeeds();

  return <FeedView feeds={posts} />
}