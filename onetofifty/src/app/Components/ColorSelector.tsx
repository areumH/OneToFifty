'use client';

type ColorProps = {
  container: string;
  cell: string;
};

const ColorSelector: React.FC<ColorProps> = ({ container, cell }) => {
  const colors = {
    bg: container,
    item: cell,
  };

  return (
    <div className="flex w-72 h-36 items-center px-7 border-2 border-gray-400 rounded-xl hover:shadow-md transition duration-200 ease-in-out">
      <div className={`w-20 h-20 border-8 ${container} rounded-2xl ${cell}`}></div>
    </div>
  );
};

export default ColorSelector;
