import { useQuery } from "mark-api-react"
import type { FC } from "react"

const query = () => useQuery("GET", "/api/get-array.json")

interface TestProps {}

const Test: FC<TestProps> = () => {
    const [[array]] = query()

    return <>{array}</>
}

export default Test
