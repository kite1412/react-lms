function Schedules() {
  return (
    <div className="shadow-[0px_0px_5px_rgba(0,0,0,0.3)] rounded-md px-2 py-3 max-sm:text-xs">
      <table className="rounded-sm">
        <thead>
          <tr className="border-b-1 border-gray-400">
            <th className="text-start py-2 ">Mata Pelajaran</th>
            <th className="text-start py-2 px-10">Guru</th>
            <th className="text-start py-2 ">Jam</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-start py-2 ">Kimia</td>
            <td className="text-start py-2 px-10">Ratna Dewi, S.Pd.</td>
            <td className="text-start py-2 ">07.30 - 09.00</td>
          </tr>
          <tr>
            <td className="text-start py-2 ">Olahraga</td>
            <td className="text-start py-2 px-10">Teguh Dwianto, S.Pd.</td>
            <td className="text-start py-2 ">10.30 - 12.00</td>
          </tr>
          <tr>
            <td className="text-start py-2 ">Bahasa Inggris</td>
            <td className="text-start py-2 px-10">Mr. Smile</td>
            <td className="text-start py-2 ">13.00 - 14.00</td>
          </tr>
          <tr>
            <td className="text-start py-2 ">Matematika Peminatan</td>
            <td className="text-start py-2 px-10">Firman Tri, S.Pd., M.Pd.</td>
            <td className="text-start py-2 ">14.00 - 15.30</td>
          </tr>
        </tbody>
      </table>
      <div className="h-5 w-full bg-[#FDBA02]"></div>
    </div>
  );
}

export default Schedules;
