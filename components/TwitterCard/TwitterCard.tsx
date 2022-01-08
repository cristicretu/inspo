import Image from 'next/image';
import React from 'react';

interface ITwitterCardProps {
  name: string;
  username: string;
  profilePicture: string;
  tweet: string;
  tweetDate: string;
  replyCount: number;
  retweetCount: number;
  likeCount: number;
}

export default function TwitterCard({
  name,
  username,
  profilePicture,
  tweet,
  tweetDate,
  replyCount,
  retweetCount,
  likeCount
}: ITwitterCardProps): JSX.Element {
  return (
    <div className='flex max-w-md p-4 space-x-2 bg-gray-200 rounded-lg dark:bg-gray-900'>
      <div className='relative w-12 h-12'>
        <Image
          src={profilePicture}
          alt='Profile Picture'
          layout='fill'
          className='rounded-full'
          objectFit='cover'
        />
      </div>

      <div className='flex flex-col space-y-2'>
        <div className='flex justify-between space-x-4'>
          <div className='flex items-center space-x-2'>
            <p className='font-semibold'>{name}</p>
            <p className='text-gray-500'>@{username}</p>
            <span className='text-[4px] text-gray-500'>●</span>
            <p className='text-gray-500'>{tweetDate}</p>
          </div>
          <span className='text-gray-500'>…</span>
        </div>
        <div>
          The worst assumption a user interface can make is pre-selecting the
          language based on location.
        </div>
        <div>likes</div>
      </div>
    </div>
  );
}
