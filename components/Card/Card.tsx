import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

import React, { Children, ReactNode, useState } from 'react';
import { SiGithub, SiTailwindcss } from 'react-icons/si';

import { HiOutlineCode } from 'react-icons/hi';
import cx from 'classnames';

interface ICardProps {
  editLink: string;
  tailwindCode: string;
  unstyledCode: string;
  children: any;
}

interface RadixMenuItem {
  label: string;
  shortcut?: string;
  icon?: ReactNode;
}

const generalMenuItems: RadixMenuItem[] = [
  {
    label: 'Copy Tailwind Code',
    icon: <SiTailwindcss className='w-3.5 h-3.5 mr-2' />,
    shortcut: '⌘+C'
  },
  {
    label: 'Copy Unstyled Code',
    icon: <HiOutlineCode className='w-3.5 h-3.5 mr-2' />,
    shortcut: '⌘+U'
  }
];

const githubMenuItems: RadixMenuItem[] = [
  {
    label: 'GitHub',
    icon: <SiGithub className='w-3.5 h-3.5 mr-2' />,
    shortcut: '⌘+G'
  }
];

export default function Card({
  editLink,
  tailwindCode,
  unstyledCode,
  children
}: ICardProps): JSX.Element {
  return (
    <div>
      <ContextMenuPrimitive.Root>
        <ContextMenuPrimitive.Trigger>
          {/* <span className='text-sm font-medium text-gray-700 select-none dark:text-gray-100'>
            Right Click
          </span> */}
          {children}
        </ContextMenuPrimitive.Trigger>

        <ContextMenuPrimitive.Content
          className={cx(
            ' radix-side-bottom:animate-slide-down radix-side-top:animate-slide-up',
            'w-48 md:w-56 px-1.5 py-1 rounded-lg shadow-md',
            'bg-white dark:bg-gray-800'
          )}>
          {generalMenuItems.map(({ label, icon, shortcut }, i) => (
            <ContextMenuPrimitive.Item
              key={`${label}-${i}`}
              className={cx(
                'flex items-center px-2 py-2 text-xs rounded-md outline-none cursor-default select-none',
                'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900'
              )}>
              {icon}
              <span className='flex-grow text-gray-700 dark:text-gray-300'>
                {label}
              </span>
              {shortcut && <span className='text-xs'>{shortcut}</span>}
            </ContextMenuPrimitive.Item>
          ))}

          <ContextMenuPrimitive.Separator className='h-px my-1 bg-gray-200 dark:bg-gray-700' />

          {githubMenuItems.map(({ label, icon, shortcut }, i) => (
            <ContextMenuPrimitive.Item
              key={`${label}-${i}`}
              className={cx(
                'flex items-center px-2 py-2 text-xs rounded-md outline-none cursor-default select-none',
                'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900'
              )}>
              {icon}
              <span className='flex-grow text-gray-700 dark:text-gray-300'>
                {label}
              </span>
              {shortcut && <span className='text-xs'>{shortcut}</span>}
            </ContextMenuPrimitive.Item>
          ))}

          {/* <ContextMenuPrimitive.CheckboxItem
            checked={showGrid}
            onCheckedChange={setShowGrid}
            className={cx(
              'flex items-center w-full px-2 py-2 text-xs rounded-md outline-none cursor-default select-none',
              'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900'
            )}>
            {showGrid ? (
              <GridIcon className='w-4 h-4 mr-2' />
            ) : (
              <TransparencyGridIcon className='w-3.5 h-3.5 mr-2 text-gray-700 dark:text-gray-300' />
            )}
            <span className='flex-grow text-gray-700 dark:text-gray-300'>
              Show Grid
            </span>
            <ContextMenuPrimitive.ItemIndicator>
              <CheckIcon className='w-3.5 h-3.5' />
            </ContextMenuPrimitive.ItemIndicator>
          </ContextMenuPrimitive.CheckboxItem>

          <ContextMenuPrimitive.CheckboxItem
            checked={showUi}
            onCheckedChange={setShowUi}
            className={cx(
              'flex items-center w-full px-2 py-2 text-xs rounded-md outline-none cursor-default select-none',
              'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900'
            )}>
            {showUi ? (
              <EyeOpenIcon className='w-3.5 h-3.5 mr-2' />
            ) : (
              <EyeClosedIcon className='w-3.5 h-3.5 mr-2' />
            )}
            <span className='flex-grow text-gray-700 dark:text-gray-300'>
              Show UI
            </span>
            <ContextMenuPrimitive.ItemIndicator>
              <CheckIcon className='w-3.5 h-3.5' />
            </ContextMenuPrimitive.ItemIndicator>
          </ContextMenuPrimitive.CheckboxItem>

          <ContextMenuPrimitive.Separator className='h-px my-1 bg-gray-200 dark:bg-gray-700' />

          <ContextMenuPrimitive.Label className='px-2 py-2 text-xs text-gray-700 select-none dark:text-gray-200'>
            Region Tools
          </ContextMenuPrimitive.Label>

         

          <ContextMenuPrimitive.Separator className='h-px my-1 bg-gray-200 dark:bg-gray-700' />

          <ContextMenuPrimitive.Root>
            <ContextMenuPrimitive.TriggerItem
              className={cx(
                'flex items-center w-full px-2 py-2 text-xs rounded-md outline-none cursor-default select-none',
                'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900'
              )}>
              <Link2Icon className='w-3.5 h-3.5 mr-2' />
              <span className='flex-grow text-gray-700 dark:text-gray-300'>
                Share
              </span>
              <CaretRightIcon className='w-3.5 h-3.5' />
            </ContextMenuPrimitive.TriggerItem> */}
        </ContextMenuPrimitive.Content>
      </ContextMenuPrimitive.Root>
    </div>
  );
}
