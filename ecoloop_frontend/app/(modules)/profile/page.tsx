import "./profile.css";
import { cookies } from "next/headers";
import { getProfile } from "./service";
import { ProfileView } from "./view";

export default async function ProfilePage() {
  const cookieStore = cookies();
  const { user, activity } = await getProfile(cookieStore.get("token")!.value);
  return (
    <ProfileView
      impactScore={user.impact}
      mobile={user.phone}
      name={user.name}
      email={user.email}
<<<<<<< HEAD
      activity={activity}
      
=======
      dates={[
  activity[0]?.createdAt, 
  activity[1]?.date, 
  activity[2]?.createdAt
]}

>>>>>>> 3a01f92b1bf1a5ea60d7e467bf5edc271cea09da
    />
  );
}
