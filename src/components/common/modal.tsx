'use client';
import React from 'react';
interface IModalProps {
  children?: JSX.Element;
}
export const Modal: React.FC<IModalProps> = ({children}) => {
  return(
      <div className="absolute w-[100dvw] h-[100dvh] top-0 left-0 bg-amber-300">
        {children}
      </div>
  )
}