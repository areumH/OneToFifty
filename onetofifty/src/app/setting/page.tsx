'use client';

import ColorSelector from "../Components/ColorSelector";

export default function Setting() {
  return (
    <div className="flex w-10/12 h-svh justify-center relative py-10">
      <div className="flex flex-col items-center gap-7">
        <div className="text-xl font-bold">COLOR</div>
        <div className="flex flex-col gap-5">
          <ColorSelector />
          <ColorSelector />
          <ColorSelector />
        </div>
      </div>
    </div>
  );
}
