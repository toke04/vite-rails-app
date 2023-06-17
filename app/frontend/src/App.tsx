import './App.css'
import paginatedItems from "./PaginatedItems.tsx";
import PaginatedItems from "./PaginatedItems.tsx";

type Props = {
  message?: string;
}

function App(props: Props) {
  return (
    <div className="App">
      <h1>{props.message}</h1>
      <h1>{props.message?.toUpperCase()}</h1>
      <PaginatedItems itemsPerPage={4} />
    </div>
  )
}

export default App