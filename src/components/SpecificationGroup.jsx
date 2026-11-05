export default function SpecificationGroup({ title, icon, rows }) {
  return (
    <div>
      
      <div className="flex items-center gap-2">
        <img src={icon} alt="" className="size-5 shrink-0" />
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      </div>

      {/* Rows */}
      <div className="mt-5 flex flex-col">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between gap-4 border-b border-gray-200 py-3.5 last:border-0"
          >
            <span className="text-sm text-gray-500">{row.label}</span>
            <span className="text-right text-sm font-semibold text-gray-900">
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
