import React from 'react';

export const ProfileCard = ({
  avatar,
  name,
  bio,
}) => (
  <div class="flex flex-col justify-center">
    <div class="flex justify-center">
      <img class="w-52 h-52 rounded-full border-4 border-slate-50 object-cover" src={avatar} alt="avatar" />
    </div>
    <div class="text-center px-3 pb-6 pt-2">
      <h2 class="text-slate-100 text-xl bold font-sans">{name}</h2>
      <p class="text-slate-300 mt-2 font-sans font-light">{bio}</p>
    </div>
  </div>
)
