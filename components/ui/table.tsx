const Table = ({ data }) => {
  return (
    <table className="min-w-full border-collapse border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-2">ID</th>
          <th className="border border-gray-300 p-2">Name</th>
          <th className="border border-gray-300 p-2">Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id} className="border-b border-gray-300">
            <td className="p-2 text-center">{item.id}</td>
            <td className="p-2 text-center">{item.name}</td>
            <td className="p-2 text-center">{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { Table };