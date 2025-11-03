import { BrowserRouter, Link } from "react-router-dom"
import Routes from "./Routes"
import { Adapter } from "mark-api-react/rrd6"

function App() {
    return (
        <div className="p-10">
            <BrowserRouter>
                <nav className="flex gap-8 text-[20px] mb-8">
                    <Link to="/render-test/">Home</Link>

                    <div className="flex flex-col gap-1">
                        <Link to="/render-test/todos">Todos</Link>
                        <Link to="/render-test/tasks">Tasks</Link>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Link to="/render-test/categoryes">Categoryes</Link>
                        <Link to="/render-test/categoryes/home">Home</Link>
                        <Link to="/render-test/categoryes/work">Work</Link>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Link to="/render-test/search/text?search=hello">Search text</Link>
                        <Link to="/render-test/search/types?types=work">Search types</Link>
                    </div>
                </nav>

                <div className="border-t py-10">
                    <Adapter>
                        <Routes />
                    </Adapter>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
