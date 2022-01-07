import Card from '@components/Card';
import Container from '@components/Container';

import components from '@data/Components';

export default function Home() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center py-2'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 auto-rows-auto'>
          {components.map((component, index) => (
            <Card
              key={index}
              tailwindCode={component.tailwindCode}
              unstyledCode={component.unstyledCode}
              editLink={component.editLink}
              props={component.JSX.props}>
              {component.JSX}
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}
