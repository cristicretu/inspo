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
      <Image
        src={image}
        alt='NFT'
        width={400}
        height={400}
        className='rounded-lg'
      />
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
