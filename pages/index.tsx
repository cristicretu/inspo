import Container from 'components/Container';

export default function Home() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center py-2'>
        <div className='flex flex-col items-center'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            nisi urna, pulvinar a quam vitae, molestie aliquam felis. Cras
            pulvinar eros non sapien aliquet sagittis. Nulla et sapien enim.
            Vivamus blandit nibh id elit sollicitudin rhoncus. Etiam rutrum
            tristique ornare. Nullam ullamcorper sed orci eget pretium. Nullam
            vitae dui urna. Proin nec urna et felis laoreet accumsan fringilla
            et diam. Praesent eget odio sed justo ultrices dapibus sit amet vel
            odio. Proin ut quam sed justo lobortis mattis. Nulla non facilisis
            dolor. Mauris lorem orci, venenatis quis ex eu, ultrices dapibus
            ligula. Suspendisse porttitor ex a est pulvinar interdum. Aliquam
            laoreet lacinia ipsum, at fringilla massa sagittis eu. Curabitur
            venenatis et massa id malesuada. Phasellus aliquam malesuada leo,
            vitae fermentum felis semper at. Sed auctor magna massa, faucibus
            blandit mi ullamcorper ac. Pellentesque scelerisque nunc sed
            accumsan pharetra. Aenean quis lacus sit amet magna facilisis mattis
            ut luctus neque. Proin feugiat, ligula at mollis pulvinar, justo
            orci pulvinar dolor, in mattis lacus arcu sed elit. Nam interdum
            mauris sit amet felis mollis efficitur. Maecenas quam orci,
            consequat et dui eu, fermentum placerat massa. Quisque nec
            scelerisque ligula. Duis at ultrices leo, vehicula viverra nibh.
            Phasellus dignissim nulla nulla, ac sollicitudin augue tincidunt ut.
            Duis maximus condimentum nunc vitae cursus. Aliquam euismod et leo
            eget fermentum. Nullam id est lacus. Aliquam rutrum metus mi, sit
            amet posuere arcu feugiat sed. Etiam nec dolor ligula. Aliquam
            tincidunt augue in metus pulvinar, vitae vehicula nisi posuere.
            Vivamus ipsum turpis, semper sed blandit eget, congue vitae sapien.
            Morbi magna quam, ullamcorper ut dapibus in, rutrum ullamcorper
            tortor. Ut eget diam id turpis scelerisque finibus non a erat.
            Praesent ultricies augue ac leo luctus, iaculis consequat purus
            euismod. Phasellus commodo ut libero quis mollis. Sed dignissim
            sagittis mauris, a pulvinar risus mollis a. Suspendisse potenti.
            Praesent accumsan quis ligula ac tristique. Ut augue enim, luctus in
            arcu at, blandit congue sem. Quisque vel sodales mi, sodales mattis
            tortor. Nulla enim mi, tempor quis cursus sit amet, fringilla id
            dolor. Phasellus pulvinar felis ac ipsum facilisis blandit. Sed
            porta condimentum purus, non rhoncus urna consequat nec. Praesent
            magna tellus, suscipit non est ut, gravida eleifend velit.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Sed euismod enim turpis, et molestie urna
            aliquam eget. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Aliquam placerat luctus turpis.
            In non tortor at orci cursus tristique sit amet ac magna. Ut dapibus
            at magna sed vulputate. Phasellus finibus hendrerit scelerisque.
            Curabitur hendrerit vestibulum justo. Morbi elementum malesuada
            ultricies. Vestibulum sed mi metus.
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 auto-rows-auto'>
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
