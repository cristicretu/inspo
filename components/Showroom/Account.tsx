import Image from 'next/image';
import React from 'react';

interface AccountProps {
  username: string;
  pfp: string;
  description: string;
}

const Account: React.FC<AccountProps> = ({ username, pfp, description }) => {
  return (
    <div className='rounded-lg px-3 py-6 flex items-center space-x-4  bg-gray-200 dark:bg-gray-900'>
      {pfp && (
        <Image
          src={pfp}
          alt='Profile Picture'
          width={100}
          height={100}
          className='rounded-full'
        />
      )}
      <div>
        <h1 className='font-bold text-lg grad'>@{username}</h1>
        <p className='truncate font-semibold'>{description}</p>
      </div>
    </div>
  );
};

export default Account;
