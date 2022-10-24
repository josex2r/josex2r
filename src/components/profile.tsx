import React, { FC } from 'react';

export const ProfileCard: FC<{
  avatar: string;
  name: string;
  bio: string;
}> = ({ avatar, name, bio }) => (
  <div className="flex flex-col justify-center">
    <div className="flex justify-center">
      <img
        className="w-52 h-52 rounded-full border-4 border-slate-50 object-cover"
        src={avatar}
        alt="avatar"
      />
    </div>
    <div className="text-center px-3 pb-6 pt-2">
      <h2 className="text-slate-100 text-xl bold font-sans">{name}</h2>
      <p className="text-slate-300 mt-2 font-sans font-light">{bio}</p>
    </div>
  </div>
);
