import Account from '@components/Account';
import NFTCard from '@components/NFTCard';

interface IComponent {
  JSX: JSX.Element;
  editLink?: string;
  tailwindCode?: string;
  unstyledCode?: string;
}

const components: IComponent[] = [
  {
    JSX: (
      <NFTCard
        username='cristicretu'
        title='Origin and Evolution#4471'
        image='/static/images/NFT.png'
        pfp='/static/images/Pfp.png'
        timeLeft='4d 16h 32m 10s'
        price={0.74}
      />
    ),
    editLink: '',
    tailwindCode: '',
    unstyledCode: ''
  },
  {
    JSX: (
      <Account
        description='Designer and Developer'
        username='cristicretu'
        pfp='/static/images/Pfp.png'
      />
    ),
    editLink: '',
    tailwindCode: '',
    unstyledCode: ''
  },
  {
    JSX: <div>alta frate</div>,
    editLink: '',
    tailwindCode: '',
    unstyledCode: ''
  }
];

export default components;
