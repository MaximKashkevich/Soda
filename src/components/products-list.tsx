import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../stores/products/productsSlice";
import { RootState, AppDispatch } from "../stores/products/store"; // Импортируйте AppDispatch
import { useEffect } from "react";
import { Product } from "./Product"; // Убедитесь, что вы импортируете компонент Product

export const ProductsList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch(); // Типизируйте dispatch
  const { items, loading, errors } = useSelector(
    (state: RootState) => state.products // Убедитесь, что используете правильный путь к состоянию
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {loading && <div>Loading...</div>} {/* Индикатор загрузки */}
      {errors && <div className="text-red-500">{errors}</div>}{" "}
      {/* Отображение ошибок */}
      {items.map((item) => (
        <Product key={item.id} {...item} />
      ))}
    </div>
  );
};
function defineProps<T>() {
  throw new Error("Function not implemented.");
}
