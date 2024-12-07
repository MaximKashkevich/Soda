import { PackagePlus, Heart, Search } from "lucide-react";

export const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md rounded-2xl mt-2">
      <nav className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            className="cursor-pointer"
            src="/assets/headerLogo.png"
            alt="Logo"
            width={60}
            height={60}
          />
          <div>
            <h1 className="font-bold text-[24px]">REACT SODA</h1>
            <p className="font-medium text-gray-400">
              Магазин газированных напитков
            </p>
          </div>
        </div>
        <div className="relative flex items-center">
          <Search className="absolute text-gray-500 ml-4 opacity-50" />
          <input
            className="flex-1 px-14 py-2 outline-none border-2 border-y-gray-200 rounded"
            type="text"
            placeholder="Поиск..."
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <PackagePlus className="text-green-400 cursor-pointer" />
            <p className="font-medium text-gray-400 pl-1 cursor-pointer">
              Добавить свой продукт
            </p>
          </div>
          <div className="flex items-center">
            <Heart className="text-red-500 cursor-pointer" />
            <p className="font-medium text-gray-400 pl-1 cursor-pointer">
              Избранные
            </p>
          </div>
        </div>
      </nav>
    </header>
  );
};
