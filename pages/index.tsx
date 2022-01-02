import Container from 'components/Container';

export default function Home() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center py-2'>
        <div className='flex flex-col items-center'>
          <div className='mb-4'>
            <h1 className='text-5xl 4xl:text-7xl text-center font-bold tracking-tight mb-2'>
              Inspo.
            </h1>
            <p>Get inspiration for your React Components.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className='w-96 bg-red-500 h-96'></div>
            <div className='w-96 bg-blue-500 h-96'></div>
            <div className='w-96 bg-green-500 h-96'></div>
            <div className='w-96 bg-yellow-500 h-96'></div>
            <div className='w-96 bg-red-500 h-96'></div>
            <div className='w-96 bg-blue-500 h-96'></div>
            <div className='w-96 bg-green-500 h-96'></div>
            <div className='w-96 bg-yellow-500 h-96'></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
