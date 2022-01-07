import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

import React, { Children, ReactNode, useState } from 'react';
import { SiGithub, SiTailwindcss } from 'react-icons/si';
import useKeypress from 'react-use-keypress';

import {
  HiOutlineCode,
  HiDotsHorizontal,
  HiArrowNarrowRight
} from 'react-icons/hi';
import cx from 'classnames';
import { createToast } from 'vercel-toast';

interface ICardProps {
  editLink: string;
  tailwindCode: string;
  unstyledCode: string;
  children: JSX.Element;
  props?: Record<string, unknown>;
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
    shortcut: 'C'
  }
  // {
  //   label: 'Copy Unstyled Code',
  //   icon: <HiOutlineCode className='w-3.5 h-3.5 mr-2' />,
  //   shortcut: '⌘+U'
  // }
];

const githubMenuItems: RadixMenuItem[] = [
  {
    label: 'GitHub',
    icon: <SiGithub className='w-3.5 h-3.5 mr-2' />,
    shortcut: 'G'
  }
];

export default function Card({
  editLink,
  tailwindCode,
  unstyledCode,
  children,
  props
}: ICardProps): JSX.Element {
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);

  const saveCode = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);

      createToast('Copied component to clipboard', { timeout: 3000 });
    } catch {
      createToast('Failed to component to clipboard', {
        timeout: 3000
      });
    }
  };

  const visitGithub = () => {
    window.open(editLink, '_blank');
  };

  useKeypress(
    'c',
    () => {
      if (isContextMenuOpen) {
        saveCode(tailwindCode);
        setIsContextMenuOpen(false);
      }
    },
    [isContextMenuOpen]
  );

  useKeypress(
    'g',
    () => {
      if (isContextMenuOpen) {
        visitGithub();
        setIsContextMenuOpen(false);
      }
    },
    [isContextMenuOpen]
  );

  return (
    <div>
      <ContextMenuPrimitive.Root
        onOpenChange={(open) => setIsContextMenuOpen(open)}>
        <ContextMenuPrimitive.Trigger className='crosshair'>
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
              onSelect={() => saveCode(tailwindCode)}
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
              onSelect={visitGithub}
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

          <ContextMenuPrimitive.Root>
            <ContextMenuPrimitive.TriggerItem
              className={cx(
                'flex items-center w-full px-2 py-2 text-xs rounded-md outline-none cursor-default select-none',
                'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900'
              )}>
              <HiDotsHorizontal className='w-3.5 h-3.5 mr-2' />
              <span className='flex-grow text-gray-700 dark:text-gray-300'>
                Props
              </span>
              <HiArrowNarrowRight className='w-3.5 h-3.5' />
            </ContextMenuPrimitive.TriggerItem>
            <ContextMenuPrimitive.Content
              className={cx(
                'radix-side-right:animate-scale-in origin-radix-dropdown-menu',
                'px-1 py-1 w-full text-xs rounded-md shadow-md',
                'bg-white dark:bg-gray-800'
              )}>
              {props &&
                Object.keys(props).map((prop, i) => (
                  <ContextMenuPrimitive.Item
                    key={`${prop}-${i}`}
                    className={cx(
                      'flex items-center px-2 py-2 text-xs rounded-md outline-none cursor-default select-none w-28 md:w-32',
                      'text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900'
                    )}>
                    <span className='flex-grow text-gray-700 dark:text-gray-300'>
                      {prop}
                    </span>
                  </ContextMenuPrimitive.Item>
                ))}
            </ContextMenuPrimitive.Content>
          </ContextMenuPrimitive.Root>
        </ContextMenuPrimitive.Content>
      </ContextMenuPrimitive.Root>
    </div>
  );
}
