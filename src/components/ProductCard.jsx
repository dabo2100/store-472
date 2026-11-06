export default function ProductCard({theData , bgColor}) {
  return (
    <div className={"card  shadow-sm "  + bgColor}>
      <figure className="w-full py-4 bg-white border">
        <img src={theData.imgSrc} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{theData.name}</h2>
        <p>Price : {theData.price} USD</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
