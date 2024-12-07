interface ProductProps {
  price: number;
  imageUrl: string;
  title: string;
}

export const Product: React.FC<ProductProps> = ({ price, imageUrl, title }) => {
  return (
    <div className="bg-white max-w-sm mx-auto p-4 shadow-lg rounded-lg hover:shadow-2xl transition hover:translate-y-1">
      <img
        src="/assets/falseFavorite.svg"
        alt="Favorite"
        className="w-6 h-6 mb-2 cursor-pointer"
      />
      <img
        className="w-full h-auto rounded-lg"
        width={200}
        height={200}
        src={imageUrl}
        alt="product"
      />
      <h2 className="text-[24px] font-semibold mt-2">{title}</h2>
      <div className="mt-2 flex justify-between items-center">
        <div>
          <p className="text-gray-600">Цена:</p>
          <span className="text-xl font-bold text-green-500">{price}$</span>
        </div>
        <div>
          <img
            width={30}
            height={30}
            className="cursor-pointer"
            src="/assets/delete.png"
            alt="deleteProduct"
          />
        </div>
      </div>
    </div>
  );
};
