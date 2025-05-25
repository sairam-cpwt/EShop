import { admin_login } from "../../store/reducer/auth.reducer";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { DevTool } from "@hookform/devtools";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../../components/Form/Input";
import type { LoginData } from "../../types/Login";

const AdminLogin = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { control, ...rest } = useForm<LoginData>({
    defaultValues: {
      email: "test@test.com",
      password: "testing",
    },
  });

  const handdleSubmit = async (e: LoginData) => {
    console.log(e);
    dispatch(admin_login(e));
  };

  return (
    <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
      <div className="w-[400px] text-[#fff] p-2">
        <div className="bg-[#6f68d1] p-4 rounded-md">
          <div className="h-[70px] flex justify-center items-center">
            <div className="w-[180px] h-[50px]">
              <img
                src="/public/images/logo.png"
                alt="logo.png"
                className="w-full h-full"
              />
            </div>
          </div>

          <FormProvider control={control} {...rest}>
            <form onSubmit={rest.handleSubmit(handdleSubmit)}>
              <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Enter user email"
              />

              <Input
                label="Password"
                name="password"
                type="password"
                placeholder="Enter User Password"
              />

              <button className=" bg-slate-800 w-full cursor-pointer hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-3 mb-3">
                Login
              </button>
            </form>
            <DevTool control={control} />
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
