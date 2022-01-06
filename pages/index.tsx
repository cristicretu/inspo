import Account from '@components/Account';
import Container from '@components/Container';
import NFTCard from '@components/NFTCard';

export default function Home() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center py-2'>
        <div className='flex flex-col items-center'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 auto-rows-auto'>
            <div className='flex flex-col space-y-4'>
              <NFTCard
                username='cristicretu'
                title='Origin and Evolution#4471'
                image='/static/images/NFT.png'
                pfp='/static/images/Pfp.png'
                timeLeft='4d 16h 32m 10s'
                price={0.74}
              />
              <div className='w-48 bg-blue-500 rounded-lg md:w-80 h-96'></div>
              <div className='w-48 bg-green-500 rounded-lg md:w-80 h-96'></div>
            </div>

            <div className='flex flex-col space-y-4'>
              <Account
                description='Designer and Developer'
                username='cristicretu'
                pfp='/static/images/Pfp.png'
              />
              <div className='w-48 bg-yellow-500 rounded-lg md:w-80 h-96'></div>
              <div className='w-48 bg-red-500 rounded-lg md:w-80 h-96'></div>
            </div>

            <div className='flex flex-col space-y-4'>
              <div className='w-48 bg-green-500 rounded-lg md:w-80 h-96'></div>
              <div className='w-48 bg-yellow-500 rounded-lg md:w-80 h-96'></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
