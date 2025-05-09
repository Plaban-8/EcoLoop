import "./donation.css";
import { Header } from "../../header";
import { getDonations } from "./service";
import DonationView from "./view";
import { cookies } from "next/headers";
import { DonationFetch } from "./model";

export const dynamic = "force-dynamic";

export default async function DonationPage() {
  const donations: DonationFetch[] = await getDonations();
  return <DonationView donations={donations} />;
}
