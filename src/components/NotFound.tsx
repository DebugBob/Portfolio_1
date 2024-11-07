import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
        <div className="p-4">404 Not Found</div>
        <button className="bg-accent1 hover:bg-accent2 text-white font-bold py-2 px-4 rounded-full">
          <Link to={'/'}>Click to go Home</Link>
        </button>
    </div>
  )
}

export default NotFound