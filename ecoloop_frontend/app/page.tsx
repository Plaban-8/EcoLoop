import Link from "next/link";
import "./home.css";
import { Header } from "./header";

export default async function Home() {
  return (
    <>
      <Header />
      <main className="homepage-grid">
        <section className="card eco-tips">
          <h2>Eco Tips</h2>
          <ul>
            <li>🌱 Use reusable bags.</li>
            <li>💧 Save water while brushing.</li>
            <li>♻️ Recycle electronics responsibly.</li>
            <li>🚲 Bike more, drive less.</li>
            <li>🛍️ Support local eco-friendly brands.</li>
          </ul>
        </section>

        <section className="card welcome">
          <h1>Welcome to EcoLoop!</h1>
          <p>
            Empowering communities through sustainable actions and meaningful
            donations.
          </p>
        </section>

        <section className="card make-donations">
          <h2>Make Donations</h2>
          <div className="donation-actions">
            <Link href="/donate">
              <button>Donate Items</button>
            </Link>
            <Link href="/food">
              <button>Serve Food</button>
            </Link>
            <Link href="/feed">
              <button>Community Help</button>
            </Link>
          </div>
        </section>
      </main>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>What is EcoLoop?</h3>
          <p>
            EcoLoop is a platform dedicated to promoting sustainability through
            community-driven actions, donations, and eco-friendly practices.
          </p>
        </div>
        <div className="faq-item">
          <h3>How can I donate items?</h3>
          <p>
            You can donate items by clicking the "Post Item" button in the
            Donations section and filling out the necessary details about the
            item.
          </p>
        </div>
        <div className="faq-item">
          <h3>Are my donations tax-deductible?</h3>
          <p>
            Donations made through EcoLoop may be tax-deductible depending on
            your local regulations. Please consult with a tax professional for
            advice.
          </p>
        </div>
        <div className="faq-item">
          <h3>How can I contribute to the community?</h3>
          <p>
            You can contribute by donating items, sharing eco-tips,
            participating in the community feed, or requesting help for
            sustainable projects.
          </p>
        </div>
      </section>
    </>
  );
}
