import Image from 'next/image';
import React from 'react';

interface NFTCardProps {
  title: string;
  username?: string;
  image?: string;
  pfp?: string;
  timeLeft?: string;
  price?: number;
}

const NFTCard: React.FC<NFTCardProps> = ({
  title,
  username,
  image,
  pfp,
  timeLeft,
  price,
}) => {
  return (
    <div className='bg-gray-200 dark:bg-gray-900 p-6 rounded-xl flex flex-col space-y-6'>
      <div className='group relative'>
        <Image
          src={image}
          alt='NFT'
          width={325}
          height={325}
          className='rounded-lg'
        />
        <button className='flex space-x-2 items-center invisible group-hover:visible transition duration-200 transform absolute top-1/2 left-1/2 px-4 py-2 fifty bg-gray-900 bg-opacity-70 cursor-pointer rounded-lg'>
          {/* .fifty {
            transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
          } */}
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M9 0L11.4308 6.56918L18 9L11.4308 11.4308L9 18L6.56918 11.4308L0 9L6.56918 6.56918L9 0Z'
              fill='#DAC50B'
            />
          </svg>
          <p>Place a bid</p>
        </button>
      </div>
      <div className='flex items-center space-x-4'>
        <Image
          src={pfp}
          alt='Profile Picture'
          width={50}
          height={50}
          className='rounded-full'
        />

        <div className='flex flex-col'>
          <p className='font-bold'>{title}</p>
          <p className='text-xs text-gray-500'>@{username}</p>
        </div>
      </div>
      <div className='px-4 py-4 rounded-lg dark:bg-black bg-white flex justify-between items-center'>
        <div className='flex space-x-2 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            aria-hidden='true'
            role='img'
            width='1em'
            height='1em'
            preserveAspectRatio='xMidYMid meet'
            viewBox='0 0 24 24'
          >
            <path
              d='M12 1.75l-6.25 10.5L12 16l6.25-3.75L12 1.75M5.75 13.5L12 22.25l6.25-8.75L12 17.25L5.75 13.5z'
              fill='currentColor'
            />
          </svg>
          <p className='font-semibold'>{price} ETH</p>
        </div>

        <p>{timeLeft}</p>
      </div>
    </div>
  );
};

export default NFTCard;
