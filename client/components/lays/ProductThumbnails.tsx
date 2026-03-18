interface Product {
  id: string;
  fullTitle: string;
  thumbImage: string;
}

interface ProductThumbnailsProps {
  products: Product[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function ProductThumbnails({ products, activeIndex, onSelect }: ProductThumbnailsProps) {
  return (
    <div className="flex flex-col gap-3 xl:gap-4">
      {products.map((product, i) => (
        <button
          key={product.id}
          onClick={() => onSelect(i)}
          aria-label={`Select ${product.fullTitle}`}
          className="focus:outline-none"
          style={{
            transition: "transform 0.3s ease, opacity 0.3s ease",
            transform: i === activeIndex ? "rotate(0deg) scale(1.08)" : "rotate(-15deg) scale(1)",
            opacity: i === activeIndex ? 1 : 0.85,
          }}
        >
          <img
            src={product.thumbImage}
            alt={product.fullTitle}
            className="w-20 h-32 xl:w-24 xl:h-36 object-contain hover:opacity-100 transition-opacity"
          />
        </button>
      ))}
    </div>
  );
}
