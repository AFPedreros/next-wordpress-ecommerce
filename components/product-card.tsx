import Image from "next/image"

import { Product } from "@/types/product"
import { cn } from "@/lib/utils"

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: Product
  aspectRatio?: "portrait" | "square"
  width?: number
  height?: number
}

export default function ProductCard({
  product: { name, description, price, url },
  aspectRatio,
  width,
  height,
  className,
  ...props
}: ProductCardProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <Image
          src={url}
          alt=""
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-contain transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{name}</h3>
        {description}
        <p className="font-medium leading-none">${price}</p>
      </div>
    </div>
  )
}
