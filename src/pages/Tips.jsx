import Pet from '../components/Pet'
import TabLayout from '../layouts/tabs'

export default function TipsPage() {
  return (
    <TabLayout>
      <div className='my-5 text-2xl font-semibold'>
        <h1 className='dark:text-white'>Tips</h1>
      </div>

      <Pet />
    </TabLayout>
  )
}
