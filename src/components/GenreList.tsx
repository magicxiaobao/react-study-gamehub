import useGenres from "../hooks/UseGenres.ts";

export const GenreList = () => {
  const { data: genres } = useGenres();
  return (
    <>
      <ul>
        {genres.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
};
