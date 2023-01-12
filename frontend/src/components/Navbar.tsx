import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <div className="w-full h-6 bg-slate-900 flex justify-center items-center p-4 border-b border-b-slate-800">
                <div className="flex justify-between w-full max-w-[70%] items-center">
                    <div>
                        <Link className="text-lg uppercase" to="/">Blog</Link>
                    </div>

                    <div className="space-x-2">
                        <Link className="text-sm bg-slate-700 hover:bg-slate-600 px-2 p-0.5 rounded-md" to="/login">Log
                            in</Link>
                        <Link className="text-sm bg-slate-700 hover:bg-slate-600 px-2 p-0.5 rounded-md" to="/register">Sign
                            up</Link>
                    </div>
                </div>
            </div>

            <div className="w-full h-12 bg-slate-900 flex justify-center items-center p-4">
                <div className="flex justify-between w-full max-w-[70%] items-center">
                    <Link to="/">Home</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/posts">Posts</Link>
                </div>
            </div>
        </div>
    )
}