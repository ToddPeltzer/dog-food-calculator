import { getXataClient } from "@/src/xata";
import UpdateUser from "@/app/components/UpdateUser";

export default async function ExistingProfile({ params }: { params: { id: string } }) {
  
  const xata = getXataClient();
  
  const record = await xata.db.Profile.read(params.id);

  return (
    <main>
        <UpdateUser
          record={record}
        />
    </main>
  )
}