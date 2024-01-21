import { getXataClient } from "@/src/xata"

export default async function Admin() {

    const xataClient = getXataClient();
    const profiles = await xataClient.db.Profile.getMany();

  return (
    <main>
        <h1>Admin Page</h1>
        <ul>
          {profiles.map((profile) => 
            <li key={profile.id}>
              <a href={profile.id}>{profile.firstname}</a>
            </li>
          )}
        </ul>
    </main>
  )
}
