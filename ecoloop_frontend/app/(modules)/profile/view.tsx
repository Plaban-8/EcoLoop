"use client";

import { Header } from "@/app/header";
import Cookies from "js-cookie";

interface Props {
  name: string;
  email: string;
  mobile: string;
  impactScore: number;
  activity: any;
}

export const ProfileView = (props: Props) => {
  const onS1 = async (e: any) => {
    e.preventDefault();
    const data = {
      name: (e.target as any).name.value,
      email: (e.target as any).email.value,
      phone: (e.target as any).phone.value,
    };
    try {
      await fetch("http://localhost:4000/user/settings/cred", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(data),
      });
      alert("Profile updated successfully");
    } catch (error) {
      alert("Error updating profile");
    }
  };

  const onS2 = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = {
      currPass: (event.target as any).currentPassword.value,
      newPass: (event.target as any).newPassword.value,
      confirmPass: (event.target as any).confirmNewPassword.value,
    };
    try {
      const res = await fetch("http://localhost:4000/user/settings/passChange", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(data),
      });
      if (res.status != 200) {
        throw new Error();
      }
      alert("Password updated successfully");
    } catch (error) {
      alert("Error updating password");
    }
  };

  return (
    <>
      <Header />
      <main className="profile-main">
        <h2>User Profile</h2>

        <div className="dashboard-grid">
          <div className="left-panel">
            <div className="impact-box">
              <h3>Impact Score</h3>
              <p className="impact-value">{props.impactScore}</p>
            </div>
          </div>

          <div className="right-panel">
            <div className="user-info-box">
              <h3>Profile Details</h3>
              <p>
                <strong>Name:</strong> {props.name}
              </p>
              <p>
                <strong>Email:</strong> {props.email}
              </p>
              <p>
                <strong>Mobile:</strong> {props.mobile}
              </p>
            </div>

            <div className="edit-profile-box">
              <h3>Edit Profile</h3>
              <form className="edit-form" onSubmit={onS1}>
                <input type="text" name="name" placeholder="Change Name" />
                <input type="email" name="email" placeholder="Change Email" />
                <input
                  type="text"
                  name="phone"
                  placeholder="Change Mobile Number"
                />
                <button type="submit" className="save-btn">
                  Save Changes
                </button>
              </form>
            </div>

            <div className="edit-password-box" onSubmit={onS2}>
              <h3>Change Password</h3>
              <form className="edit-form">
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="Current Password"
                  required
                />
                <input
                  type="password"
                  placeholder="New Password"
                  name="newPassword"
                  required
                />
                <input
                  type="password"
                  name="confirmNewPassword"
                  placeholder="Confirm New Password"
                  required
                />
                <button type="submit" className="save-btn">
                  Update Password
                </button>
              </form>
            </div>

            <div className="activity-box">
              <h3>Recent Activity</h3>
              <ul>
                {props.activity.donation && (
                  <li>
                    You posted a donation listing —
                    <span>{props.activity.donation.createdAt}</span>
                  </li>
                )}
                {props.activity.food && (
                  <li>
                    You donated food — <span>{props.activity.food.date}</span>
                  </li>
                )}
                {props.activity.feed && (
                  <li>
                    You made a post in the community feed —
                    <span>{props.activity.feed.createdAt}</span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
