export default function ProductOptions({
  finishes,
  capacities,
  activeFinish,
  setActiveFinish,
  activeCapacity,
  setActiveCapacity
}) {
  return (
    <>
      <div className="mt-7">
        <p className="text-xs font-bold tracking-wider text-gray-500 uppercase">
          Finish —{" "}
          <span className="text-gray-900">
            {finishes[activeFinish].name}
          </span>
        </p>

        <div className="mt-3 flex items-center gap-3">
          {finishes.map((finish, index) => {
            const isActive = index === activeFinish;

            return (
              <button
                key={finish.name}
                type="button"
                aria-label={finish.name}
                onClick={() => setActiveFinish(index)}
                className={`size-9 rounded-full transition ${
                  isActive
                    ? "ring-2 ring-[#7C5CFC] ring-offset-2"
                    : "ring-1 ring-gray-200 hover:ring-gray-300"
                }`}
                style={{ backgroundColor: finish.color }}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-7">
        <p className="text-xs font-bold tracking-wider text-gray-500 uppercase">
          Storage — Choose Capacity
        </p>

        <div className="mt-3 grid grid-cols-3 gap-3">
          {capacities.map((capacity, index) => {
            const isActive = index === activeCapacity;

            return (
              <button
                key={capacity.label}
                type="button"
                onClick={() => setActiveCapacity(index)}
                className={`flex flex-col items-center rounded-xl border px-2 py-3 transition ${
                  isActive
                    ? "border-[#7C5CFC] bg-[#F5F3FF]"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <span className="text-sm font-semibold text-gray-900">
                  {capacity.label}
                </span>

                <span className="mt-0.5 text-[10px] font-medium tracking-wide text-gray-400">
                  {capacity.note}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}