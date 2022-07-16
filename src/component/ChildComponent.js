export const ChildComponent = (props) => {
  return (
    <div>
      <button onClick={()=>props.greet("!I am jahid")}>Greet</button>
    </div>
  );
};
