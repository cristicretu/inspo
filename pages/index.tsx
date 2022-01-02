import Container from 'components/Container';

export default function Home() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center py-2'>
        <div className='text-2xl md:text-4xl font-extrabold tracking-tight flex flex-col items-center'>
          <span className='text-gray-800'>Hello</span>
        </div>
      </div>
    </Container>
  );
}
