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
      activity={activity}
      
    />
  );
}
