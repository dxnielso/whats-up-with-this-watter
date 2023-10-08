import Pet from '../components/Pet';
import TabLayout from '../layouts/tabs';

export default function PetPage() {
  return (
    <TabLayout>
      <div>
        <Pet />
      </div>
    </TabLayout>
  )
}