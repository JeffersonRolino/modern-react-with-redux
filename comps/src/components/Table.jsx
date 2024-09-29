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
          return (
            <tr className="border-b" key={fruit.name}>
              <td className="p-3">{config[0].render(fruit)}</td>
              <td className="p-3">
                <div className={`p-3 m-2 ${config[1].render(fruit)}`}></div>
              </td>
              <td className="p-3">{config[2].render(fruit)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
