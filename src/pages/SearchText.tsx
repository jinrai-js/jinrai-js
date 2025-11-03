import { useQuery, useSearchValue } from "mark-api-react"
import type { FC } from "react"

interface Headers {
    Accept: string
    "Accept-Encoding": string
    "Accept-Language": string
    "Content-Length": string
    "Content-Type": string
    Dnt: string
    Host: string
    Origin: string
    Priority: string
    Referer: string
    "Sec-Ch-Ua": string
    "Sec-Ch-Ua-Mobile": string
    "Sec-Ch-Ua-Platform": string
    "Sec-Fetch-Dest": string
    "Sec-Fetch-Mode": string
    "Sec-Fetch-Site": string
    "User-Agent": string
    "X-Amzn-Trace-Id": string
}

interface SearchTextProps {}

const SearchText: FC<SearchTextProps> = () => {
    const [search, setSearch] = useSearchValue("search", "")

    console.log({ search })

    const [[data], { loading }] = useQuery<{ search: string }, { headers: Headers }>(
        "POST",
        "https://httpbin.org/post",
        { search },
        { deps: [search], notUseOnSSR: true, dataKey: false },
    )

    return (
        <div className="flex flex-col gap-6">
            <input
                className="border p-1 px-2 outline-none"
                placeholder="search"
                value={search}
                onInput={e => setSearch(e.currentTarget.value)}
            />
            <hr />[{search}]
            <>
                <div>{loading ? "loading..." : <pre>{JSON.stringify(data, null, 2)}</pre>}</div>
            </>
        </div>
    )
}

export default SearchText
