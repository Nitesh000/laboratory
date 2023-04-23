import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const User = () => {
  const { userID } = useParams();
  console.log(userID);
  return (
    <Fragment>
      <Header location="user" />
      <div>
        <h1 className="text-4xl text-center text-darkGreen font-bold py-10">
          User Page
        </h1>
        {/* creating a form of user info */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col w-3/5 bg-pale items-center rounded-md">
            <label className="text-xl text-darkGreen font-bold py-3 tracking-[6px] underlin">
              User Info
            </label>
            <div className="grid grid-cols-2 w-3/5">
              <label className="text-lg text-darkGreen font-bold py-6 tracking-[6px]">
                Name:
              </label>
              <input
                placeholder="name of the user"
                className="px-3 py-4 h-5 my-auto rounded-xl border-none bg-pale placeholder:text-darkGreen text-darkGreen focus:outline-none"
              />
              <label className="text-lg text-darkGreen font-bold py-6 tracking-[6px]">
                Email:
              </label>
              <input
                placeholder="email of the user"
                className="px-3 py-4 h-5 my-auto rounded-xl border-none bg-pale placeholder:text-darkGreen text-darkGreen focus:outline-none"
              />
              <label className="text-lg text-darkGreen font-bold py-6 tracking-[6px]">
                Phone:
              </label>
              <input
                placeholder="phone number of the user"
                className="px-3 py-4 h-5 my-auto rounded-xl border-none bg-pale placeholder:text-darkGreen text-darkGreen focus:outline-none"
              />
              <label className="text-lg text-darkGreen font-bold py-6 tracking-[6px]">
                Address:
              </label>
              <input
                placeholder="phone number of the user"
                className="px-3 py-4 h-5 my-auto rounded-xl border-none bg-pale placeholder:text-darkGreen text-darkGreen focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default User;
