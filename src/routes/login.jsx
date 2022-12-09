import { Button } from "../components";
import { Layout } from "../layouts";

export function Login() {
  return (
    <Layout>
      <div className="flex justify-center">
        <div className="lg:w-1/4 md:w-2/5 w-3/4 py-20 h-full">
          <form>
            <div className="mb-6">
              <input
                type="number"
                className="form-control block w-full px-4 py-2 font-normal text-gray-700 bg-white border border-solid border-gray-300 rounded
                duration-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="No Phone"
              />
            </div>

            <Button
              children="Sign in"
              className="px-7 w-full uppercase text-sm"
            />

            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center font-medium mx-4 mb-0">OR</p>
            </div>

            <a
              className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
              href="#!"
            >
              Continue with Google
            </a>
            <a
              className="px-7 py-3 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center"
              href="#!"
            >
              Continue with Facebook
            </a>
          </form>
        </div>
      </div>
    </Layout>
  );
}
