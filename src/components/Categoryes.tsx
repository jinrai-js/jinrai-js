import type { FC } from "react"

export interface Category {
    id: number
    name: string
    color: string
    icon: string
    link?: string
}

interface CategoryesProps {
    category: Category[]
    onClick: (cat: string) => void
}

const CategoryChips: FC<CategoryesProps> = ({ category, onClick }) => {
    return (
        <div className="flex gap-3">
            {category.map(cat => {
                return (
                    <div
                        role="link"
                        key={cat.id}
                        onClick={() => onClick(cat.link ?? "")}
                        style={{ color: cat.color }}
                        className="bg-zinc-900 px-3 rounded-xl text-[14px] cursor-pointer select-none"
                    >
                        {cat.icon} {cat.name}
                    </div>
                )
            })}
        </div>
    )
}

export default CategoryChips
