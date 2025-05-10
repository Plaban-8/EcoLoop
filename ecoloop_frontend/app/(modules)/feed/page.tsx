import { FeedFetch } from "./model";
import { getFeeds } from "./service";
import { FeedView } from "./view";


export default async function Feed() {
  const posts: FeedFetch[] = await getFeeds();
  return <FeedView feeds={posts} />
} 