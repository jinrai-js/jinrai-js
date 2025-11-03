import type { FC } from "react"

export interface PaginationProps {
    page: number
    total: number
    size: number
}

interface PaginationComponentProps {
    pagination: PaginationProps
    setPage: (page: string) => void
}

const Pagination: FC<PaginationComponentProps> = ({ pagination, setPage }) => {
    return (
        <div className="flex gap-2">
            {Array.from({ length: pagination.total }).map((_, index) => {
                return (
                    <div
                        key={index}
                        className={`bg-zinc-800 cursor-pointer px-2 rounded-md ${
                            index + 1 == pagination.page ? "bg-zinc-600!" : ""
                        }`}
                        onClick={() => setPage((index + 1).toString())}
                    >
                        {index + 1}
                    </div>
                )
            })}
        </div>
    )
}

export default Pagination
