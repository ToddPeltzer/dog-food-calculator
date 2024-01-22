import { getXataClient } from "@/src/xata";
import Link from "next/link";

export default async function Admin() {
  const xataClient = getXataClient();
  const profiles = await xataClient.db.Profile.getMany();

  return (
    <main>
      <h1>Admin Page</h1>
      <div>
        <Link href="/admin/profile/new-user">New User</Link>
      </div>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            <Link href={`/admin/profile/${profile.id}`}>
              {profile.firstname}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
