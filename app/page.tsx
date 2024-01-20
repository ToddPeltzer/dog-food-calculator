import Link from "next/link";

export default function Home() {
  return (
    <main className="mt-4 ml-4 mr-4 mb-4">
      <Link href="/calculator">Click here to calculate your dogs daily intake</Link>
    </main>
  );
}
