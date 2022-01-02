import Container from 'components/Container';
import NFTCard from 'components/Showroom/NFTCard';

export default function Home() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center py-2'>
        <div className='flex flex-col items-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-auto'>
            <NFTCard
              username='cristicretu'
              title='Origin and Evolution#4471'
              image='/static/images/NFTCard/NFT.jpeg'
              pfp='/static/images/NFTCard/pfp.jpg'
              timeLeft='4d 16h 32m 10s'
              price={0.74}
            ></NFTCard>
            {/* <div className='w-96 bg-red-500 h-96'></div>
            <div className='w-96 bg-blue-500 h-96'></div>
            <div className='w-96 bg-green-500 h-96'></div>
            <div className='w-96 bg-yellow-500 h-96'></div>
            <div className='w-96 bg-red-500 h-96'></div>
            <div className='w-96 bg-blue-500 h-96'></div>
            <div className='w-96 bg-green-500 h-96'></div>
            <div className='w-96 bg-yellow-500 h-96'></div> */}
          </div>
        </div>
      </div>
    </Container>
  );
}
