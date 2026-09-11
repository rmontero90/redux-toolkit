import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const {
    isLoading,
    pokemons = [],
    page,
  } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      {isLoading && <span>Loading...</span>}
      <ul>
        {pokemons.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>

      <button onClick={() => dispatch(getPokemons(page))}>Next</button>
    </>
  );
};
