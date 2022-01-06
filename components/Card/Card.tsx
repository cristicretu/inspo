import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';

import React, { ReactNode, useState } from 'react';
import { SiGithub, SiTailwindcss } from 'react-icons/si';

import { HiOutlineCode } from 'react-icons/hi';
import cx from 'classnames';

interface ICardProps {
  editLink: string;
  tailwindCode: string;
  unstyledCode: string;
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
  unstyledCode
}: ICardProps): JSX.Element {
  return <div></div>;
}
