import { Header } from "@/app/header";
import "./awarness.css";

export default function Awarness() {
  return (
    <>
      <Header />
      <div className="container">
        <h1>Sustainability Guidelines</h1>
        <p className="subtitle">Simple Habits That Create Lasting Change 🌱</p>

        <div className="card">
          <h3>♻️ Reduce, Reuse, Recycle</h3>
          <ul>
            <li>Buy reusable water bottles and bags.</li>
            <li>Separate waste properly for recycling.</li>
            <li>Repair instead of discarding old items.</li>
          </ul>
        </div>

        <div className="card">
          <h3>💧 Save Water</h3>
          <ul>
            <li>Turn off taps while brushing.</li>
            <li>Fix leaks promptly.</li>
            <li>Collect rainwater for plants.</li>
          </ul>
        </div>

        <div className="card">
          <h3>🔌 Conserve Energy</h3>
          <ul>
            <li>Switch to LED bulbs.</li>
            <li>Unplug electronics when not in use.</li>
            <li>Use natural light when possible.</li>
          </ul>
        </div>

        <div className="card">
          <h3>🚲 Eco-Friendly Transport</h3>
          <ul>
            <li>Use bikes or walk for short distances.</li>
            <li>Use public transit.</li>
            <li>Support electric vehicle use.</li>
          </ul>
        </div>
      </div>
    </>
  );
}
