import "./admin.css";
export default function AdminPage() {
  return (
    <>
      <nav class="admin-navbar">
        <h1>♻️ EcoLoop Admin Panel</h1>
      </nav>

      <div class="admin-container">
        <div class="admin-section">
          <h2>Food Donations</h2>
          <div class="scroll-box">
            <div class="post-card">
              <div>
                <strong>Rafiq (01711111111)</strong>
                <p>Cooked rice & chicken - Dhaka</p>
              </div>
              <button class="delete-btn">Delete</button>
            </div>

            <div class="post-card">
              <div>
                <strong>Sadia (01899999999)</strong>
                <p>Packaged fruits - Chittagong</p>
              </div>
              <button class="delete-btn">Delete</button>
            </div>

            <div class="post-card">
              <div>
                <strong>Farhan (01912345678)</strong>
                <p>Vegetables from farm - Bogura</p>
              </div>
              <button class="delete-btn">Delete</button>
            </div>

            <div class="post-card">
              <div>
                <strong>Nusrat (01698765432)</strong>
                <p>Bread and pastries - Khulna</p>
              </div>
              <button class="delete-btn">Delete</button>
            </div>

            <div class="post-card">
              <div>
                <strong>Kamal (01511223344)</strong>
                <p>Home cooked biryani - Comilla</p>
              </div>
              <button class="delete-btn">Delete</button>
            </div>

            <div class="post-card">
              <div>
                <strong>Anika (01755667788)</strong>
                <p>Canned goods - Barisal</p>
              </div>
              <button class="delete-btn">Delete</button>
            </div>
          </div>
        </div>

        <div class="admin-section">
          <h2>Donations</h2>
          <div class="scroll-box">
            <div class="post-card">
              <div>
                <strong>Hasan (01655555555)</strong>
                <p>Winter Jackets - Sylhet</p>
              </div>
              <button class="delete-btn">Delete</button>
            </div>

            <div class="post-card">
              <div>
                <strong>Tamim (01777777777)</strong>
                <p>Used phone - Rajshahi</p>
              </div>
              <button class="delete-btn">Delete</button>
            </div>

            <div class="post-card">
              <div>
                <strong>Rina (01823456789)</strong>
                <p>Books and stationery - Rangpur</p>
              </div>
              <button class="delete-btn">Delete</button>
            </div>

            <div class="post-card">
              <div>
                <strong>Arif (01987654321)</strong>
                <p>Furniture - Mymensingh</p>
              </div>
              <button class="delete-btn">Delete</button>
            </div>

            <div class="post-card">
              <div>
                <strong>Sharmin (01611223344)</strong>
                <p>Children's toys - Jessore</p>
              </div>
              <button class="delete-btn">Delete</button>
            </div>

            <div class="post-card">
              <div>
                <strong>Bappy (01733445566)</strong>
                <p>Medical supplies - Cox's Bazar</p>
              </div>
              <button class="delete-btn">Delete</button>
            </div>
          </div>
        </div>

        <div class="admin-section">
          <h2>Community Feed</h2>
          <div class="scroll-box">
            <div class="post-card">
              <div>
                <strong>Nadia (01888888888)</strong>
                <p>Let's organize a cleanup near the lake!</p>
              </div>
              <button class="delete-btn">Delete</button>
            </div>

            <div class="post-card">
              <div>
                <strong>Imran (01566666666)</strong>
                <p>Shared tips on plastic reuse 💡</p>
              </div>
              <button class="delete-btn">Delete</button>
            </div>

            <div class="post-card">
              <div>
                <strong>Tania (01911223344)</strong>
                <p>Upcoming recycling workshop in Dhaka</p>
              </div>
              <button class="delete-btn">Delete</button>
            </div>

            <div class="post-card">
              <div>
                <strong>Rahim (01799887766)</strong>
                <p>Looking for volunteers for tree plantation</p>
              </div>
              <button class="delete-btn">Delete</button>
            </div>

            <div class="post-card">
              <div>
                <strong>Faria (01655443322)</strong>
                <p>Success story: How we reduced waste in our community</p>
              </div>
              <button class="delete-btn">Delete</button>
            </div>

            <div class="post-card">
              <div>
                <strong>Sohel (01598765432)</strong>
                <p>Eco-friendly business ideas discussion</p>
              </div>
              <button class="delete-btn">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
