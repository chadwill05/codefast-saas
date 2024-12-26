import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Collect customer feedback to build better products</h1>
      <h2>Hey</h2>
      <div>
        Create a feedback board in minutes, priotize features, and 
        build products your customers will love.
      </div>
      <Link href="/dashboard">Dashboard</Link>
    </main>
  );
}
