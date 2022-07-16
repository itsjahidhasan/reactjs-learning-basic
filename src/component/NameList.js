export const NameList = () => {
  const names = ['Jahid', 'Rokib', 'Rehana', 'Jamat'];
  return (
    <div>
      {names.map((name) => {
        return <h1 key={name}>{name}</h1>;
      })}
    </div>
  );
};
