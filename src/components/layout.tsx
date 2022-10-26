import React, { FC, PropsWithChildren } from 'react';

export const Layout: FC<PropsWithChildren> = ({ children }) => (
  <div className="mx-auto w-screen">{children}</div>
);

export const Header: FC<PropsWithChildren> = ({ children }) => (
  <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
    <div className="w-[108rem] flex-none flex justify-end">{children}</div>
  </div>
);

export const Footer: FC<PropsWithChildren> = ({ children }) => (
  <footer className="mt-auto p-24">{children}</footer>
);
