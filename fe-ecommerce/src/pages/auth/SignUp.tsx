import { Link } from "react-router";
import { AtSign, FacebookIcon } from "lucide-react";

export default function SignUp() {
  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[400px] text-[#fff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome to Ecommerce</h2>
          <p className="text-sm mb-3 font-medium">
            Please register your account
          </p>

          <form>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                id="name"
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
              />
            </div>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Email</label>
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                id="email"
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
              />
            </div>

            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                id="password"
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
              />
            </div>

            <div className="flex flex-row w-full gap-1 mb-3 items-center">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="checkbox">
                I Agress to privacy policy & terms and conditions
              </label>
            </div>

            <button className=" bg-slate-800 w-full cursor-pointer hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-3 mb-3">
              Sign up
            </button>

            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-bold transition-all translate-1/2 hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>

            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1 ">Or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>

            <div className="flex justify-center items-center gap-3">
              <div className="w-[135px] h-[35px] flex rounded-md bg-orange-500 shadow-lg hover:shadow-orange-500/50 justify-center cursor-pointer items-center gap-2">
                <AtSign /> Google
              </div>

              <div className="w-[135px] h-[35px] flex rounded-md bg-blue-600 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center gap-2 bg-blue">
                <FacebookIcon /> Google
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
