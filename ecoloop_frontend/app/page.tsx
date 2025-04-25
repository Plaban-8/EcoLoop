export default async function Home() {
  const res = await fetch("http://localhost:4000/auth/message");
  const data = await res.json();

  return (
    <div>
      <h1>Fetched Message (Server-side):</h1>
      <p>{data.text}</p>
    </div>
  );
}
