export default function ProductGallery({ gallery }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        {gallery.map((image, index) => (
          <div
            key={index}
            className="size-16 shrink-0 overflow-hidden rounded-xl border bg-white p-1 sm:size-20"
          >
            <img
              src={image}
              alt=""
              className="size-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex min-h-80 flex-1 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 sm:min-h-[440px]">
        <img
          src={gallery[0]}
          alt="iPhone 15 Pro Max"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </div>
  );
}