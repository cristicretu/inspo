import Image from 'next/image';
import React from 'react';

interface AccountProps {
  username: string;
  profilePicture: string;
  description: string;
}
export default function Account({
  username,
  profilePicture,
  description
}: AccountProps): JSX.Element {
  return (
    <div className='flex items-center px-3 py-6 space-x-4 bg-gray-200 rounded-lg dark:bg-gray-900'>
      {profilePicture && (
        <div className='relative w-12 h-12'>
          <Image
            src={profilePicture}
            alt='Profile Picture'
            layout='fill'
            className='rounded-full'
            objectFit='cover'
          />
        </div>
      )}
      <div>
        <h1 className='text-lg font-bold grad'>@{username}</h1>
        {/* 
        .grad {
        background: black; 
        background: -webkit-linear-gradient(
          left,
          orange,
          yellow,
          green,
          cyan,
          blue,
          violet
        ); 
        background: -o-linear-gradient(
          right,
          green,
          orange,
          red,
          purple,
          blue
        ); 
        background: -moz-linear-gradient(
          right,
          green,
          orange,
          red,
          purple,
          blue
        ); 
        background: linear-gradient(
          to right,
          green,
          orange,
          red,
          purple,
          blue
        ); 

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
        */}
        <p className='font-semibold truncate'>{description}</p>
      </div>
    </div>
  );
}
