function Table({ data, config }) {
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          {config.map((column) => {
            return <th key={column.label}>{column.label}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((fruit) => {
          const renderedCells = config.map((column) => {
            return (
              <td className="p-2" key={column.label}>
                {column.render(fruit)}
              </td>
            );
          });

          return (
            <tr className="border-b" key={fruit.name}>
              {renderedCells}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
