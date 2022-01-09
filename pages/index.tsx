import Card from '@components/Card';
import Container from '@components/Container';
import HelpCard from '@components/HelpCard';
import TwitterCard from '@components/TwitterCard';
import components from '@data/Components';

export default function Home() {
  const length = components.length;
  const rest = length % 3;
  const firstChild = components.slice(0, length / 3 + rest - 1);
  const secondChild = components.slice(
    length / 3 + rest - 1,
    (length / 3) * 2 + rest - 1
  );
  const thirdChild = components.slice((length / 3) * 2 + rest - 1, length);

  return (
    <Container>
      <div className='flex flex-col items-center justify-center py-2'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 auto-rows-auto'>
          {firstChild && (
            <div className='flex flex-col space-y-4'>
              {firstChild.map((component, index) => (
                <Card
                  key={index}
                  tailwindCode={component.tailwindCode}
                  unstyledCode={component.unstyledCode}
                  editLink={component.editLink}
                  props={component.JSX.props}>
                  {component.JSX}
                </Card>
              ))}
              <TwitterCard
                likeCount={1.4}
                name='Rauno Freiberg'
                profilePicture='/static/images/Pfp.png'
                replyCount={2.3}
                retweetCount={1.0}
                tweet='Assuming language based on location is the worst developer choice ever.'
                tweetDate='Jan 7'
                username='raunofreiberg'
              />
            </div>
          )}
          {secondChild && (
            <div className='flex flex-col space-y-4'>
              {secondChild.map((component, index) => (
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
          )}
          {thirdChild && (
            <div className='flex flex-col space-y-4'>
              {thirdChild.map((component, index) => (
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
          )}
        </div>
      </div>
    </Container>
  );
}
