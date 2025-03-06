function AssignmentList() {
  return (
    <div className="shadow-[0px_0px_5px_rgba(0,0,0,0.3)] rounded-md px-2 py-3 max-sm:text-xs">
      <table>
        <thead>
          <tr className="border-b-1 border-gray-400">
            <th className="text-start py-2 pr-5">Tugas</th>
            <th className="text-start py-2">Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-start py-2 pr-5">
              Ikatan Kimia dan Bentuk Molekul
            </td>
            <td className="text-start py-2">09 Juni 2025, 20.00 WIB</td>
          </tr>
          <tr>
            <td className="text-start py-2 pr-5">Descriptive Text</td>
            <td className="text-start py-2">12 Juni 2025, 10.00 WIB</td>
          </tr>
          <tr>
            <td className="text-start py-2 pr-5">Kalkulus Dasar</td>
            <td className="text-start py-2">12 Juni 2025, 23.59 WIB</td>
          </tr>
          <tr>
            <td className="text-start py-2 pr-5">
              Struktur dan Fungsi Jaringan{" "}
            </td>
            <td className="text-start py-2">10 Juni 2025, 23.59 WIB</td>
          </tr>
        </tbody>
      </table>
      <div className="h-5 w-full bg-[#FDBA02]"></div>
    </div>
  );
}

export default AssignmentList;
