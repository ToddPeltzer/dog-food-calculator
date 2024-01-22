import { getXataClient } from '@/src/xata';
import useDogsQuery from '@/app/components/useDogsQuery';
import { Identifiable } from '@xata.io/client';
import { useRouter } from 'next/navigation'

interface NewUserProps {
    updateUser: boolean;
    formData: {
      firstname: string;
      lastname: string;
      dogname: string;
      dogbreed: string;
      dogweight: string;
      dogage: string;
    };
    selectedBreed: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    id?: any;
  }

export default function NewUser({ updateUser, formData, selectedBreed, handleChange, id }: NewUserProps) {
  
  const router = useRouter()
  
  const xata = getXataClient();

  const { data } = useDogsQuery();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic form validation
    if (!formData.firstname || !formData.lastname || !formData.dogname || !selectedBreed || !formData.dogweight || !formData.dogage) {
      console.error('Please fill in all required fields.');
      return;
    }

    try {
      // Create a new user record in the database
      console.log({...formData,
        dogbreed: selectedBreed,})
      const record = updateUser && id ? await xata.db.Profile.update(id,{
        ...formData,
        dogbreed: selectedBreed,
      })
      : await xata.db.Profile.create({
        ...formData,
        dogbreed: selectedBreed,
      })} catch (error) {
      console.error('Error creating user:', error);
    }
    router.push('/admin')
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='mt-5 mb-5'>
        <div className='blk'>
          <div className='input-cntnr'>
              <label htmlFor='firstname'>First Name:</label>
              <input
                  type='text'
                  id='firstname'
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  />
          </div>
          <div className='input-cntnr'>
              <label htmlFor='lastname'>Last Name:</label>
              <input
                  type='text'
                  id='lastname'
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  />
          </div>
          <div className='input-cntnr'>
              <label htmlFor='dogname'>Dog Name:</label>
              <input
                  type='text'
                  id='dogname'
                  name='dogname'
                  value={formData.dogname}
                  onChange={handleChange}
                  />
          </div>
          <div className='input-cntnr'>
            <label htmlFor='dogbreed'>Dog Breed:</label>
            <select
              id='dogbreed'
              name='dogbreed'
              value={formData.dogbreed}
              onChange={handleChange}
            >
              {data?.message && Object.keys(data.message).map((messages) => (
                <option key={messages} value={messages}>
                  {messages}
                </option>
              ))}
            </select>
          </div>
          <div className='input-cntnr'>
              <label htmlFor='dogweight'>Dog Weight (lbs):</label>
              <input
                  type='text'
                  id='dogweight'
                  name='dogweight'
                  value={formData.dogweight}
                  onChange={handleChange}
              />
          </div>
          <div className='input-cntnr'>
              <label htmlFor='dogage'>Dog Age:</label>
              <input
                  type='text'
                  id='dogage'
                  name='dogage'
                  value={formData.dogage}
                  onChange={handleChange}
              />
          </div>
        </div>
        <div className='mt-5 mb-5 flx btn-cntnr'>
          <button type="submit">{
            !updateUser ? "Create User" : "Update User"
          }</button>
        </div>
      </form>
    </div>
  );
}
