import React from "react";
import Image from "next/image";

type Props = { hit: any };

const Hit = ({ hit }: Props) => {
  return (
    <div className="bg-white">
      <Image src={hit.imageSrc} width={16} height={9} alt={hit.name} />
      <div className="p-2 border-t border-gray-100">
        <p className="block text-lg text-gray-900 truncate">{hit.name}</p>
        <p className="block text-sm font-medium text-gray-500">
          {hit.category}
        </p>
        <p>{hit.price}</p>
      </div>
    </div>
  );
};

export default Hit;
