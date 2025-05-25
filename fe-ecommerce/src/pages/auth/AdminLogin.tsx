import { useDispatch, useSelector } from "react-redux";
import { DevTool } from "@hookform/devtools";
import { FormProvider, useForm } from "react-hook-form";
import Input from "~/components/Form/Input";
import type { AppDispatch, RootState } from "~/store";
import type { LoginData } from "~/types/Login";
import { admin_login } from "~/store/reducer/auth.reducer";
import Button from "~/components/Button";

const AdminLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state: RootState) => state.auth);

  const { control, ...rest } = useForm<LoginData>({
    defaultValues: {
      email: "johndoe@gmail.com",
      password: "John@1234",
    },
  });

  const handdleSubmit = async (e: LoginData) => {
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

              <Button
                className=" bg-slate-800 w-full cursor-pointer hover:shadow-blue-300/ hover:shadow-lg text-white"
                disabled={state.loading}
                loading={state.loading}
              >
                {state.loading ? "Loading..." : "Login"}
              </Button>
            </form>
            <DevTool control={control} />
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
