import React from "react";
import Image from "next/image";

type Props = { hit: any };

const Hit = ({ hit }: Props) => {
  return (
    <div className="max-w-sm bg-white ">
      <div className="block w-full px-2 py-4 bg-white rounded-lg ">
        <Image
          src={hit.imageSrc}
          layout="responsive"
          width={16}
          height={9}
          objectFit="contain"
          alt={hit.name}
        />
      </div>
      <div className="p-2 border-t border-gray-100">
        <p className="truncate ">{hit.name}</p>
        <p className="block text-sm font-medium text-gray-500">
          {hit.category}
        </p>
      </div>
    </div>
  );
};

export default Hit;
