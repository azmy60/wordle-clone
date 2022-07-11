function Tile({ letter }: { letter: string }) {
  return (
    <div className="grid place-content-center w-16 h-16 leading-none font-bold text-3xl border-2 dark:border-zinc-700">
      {letter}
    </div>
  );
}

function Board({ matrix }: { matrix: string[][] }) {
  const rows = matrix.map((row) => (
    <div className="flex gap-1.5">
      {row.map((cell) => (
        <Tile letter={cell} />
      ))}
    </div>
  ));

  return <div className="flex flex-col w-min gap-1.5">{rows}</div>;
}

export default Board;
