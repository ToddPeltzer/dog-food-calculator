import { getXataClient } from "@/src/xata"

export default async function Admin() {

    const xataClient = getXataClient();
    const profiles = await xataClient.db.Profile.getMany();

  return (
    <main>
        <h1>Admin Page</h1>
        {profiles.map((profile) => <p key={profile.firstname}>{profile.firstname}</p>)}
    </main>
  )
}
