import Image from 'next/image';
import React from 'react';

interface AccountProps {
  username: string;
  pfp: string;
  description: string;
}

const Account: React.FC<AccountProps> = ({ username, pfp, description }) => {
  return (
    <div className='rounded-lg px-6 py-8 flex flex-col space-y-4 items-center bg-gray-200 dark:bg-gray-900'>
      <Image
        src={pfp}
        alt='NFT'
        width={100}
        height={100}
        className='rounded-full -mt-4'
      />
      <h1>@{username}</h1>
      <p className='truncate'>{description}</p>
    </div>
  );
};

export default Account;
