import {
  DollarSignIcon,
  PackageCheckIcon,
  ShoppingBasketIcon,
  Users2Icon,
} from "lucide-react";
import { forwardRef, type WheelEvent } from "react";
import {
  FixedSizeList as List,
  type ListChildComponentProps,
} from "react-window";
import BoardCard from "~/components/BoardCard";

const handleOnWheel = (e: WheelEvent<HTMLDivElement>) => {
  console.log(e.deltaY);
};

const outerElementType = forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

export default function Payments() {
  const Row = ({ index, style }: ListChildComponentProps) => {
    return (
      <div style={style} className="flex text-sm text-white font-medium">
        <div className="w-[25%] p-2 whitespace-nowrap">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-nowrap">$3434</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <span className="py-[1px] px-[5px] bg-slate-300 text-blue-500 rounded-md text-sm">
            Pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap"> 25 Dec 2023 </div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <button className="bg-indigo-500 shadow-lg hover:shadow-indigo-500/50 px-3 py-[2px cursor-pointer text-white rounded-sm text-sm]">
            Confirm
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-7">
        <BoardCard
          title="#234234"
          subTitle="Total Sales"
          className="bg-[#fae8e8]"
          icon={
            <div className="w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl">
              <DollarSignIcon />
            </div>
          }
        />

        <BoardCard
          title="50"
          subTitle="Products"
          className="bg-[#fae8e8]"
          icon={
            <div className="w-[40px] h-[47px] rounded-full bg-[#760077] flex justify-center items-center text-xl">
              <PackageCheckIcon className="text-[#fae8e8]" />
            </div>
          }
        />

        <BoardCard
          title="50"
          subTitle="Products"
          className="bg-[#e9feea]"
          icon={
            <div className="w-[40px] h-[47px] rounded-full bg-[#038000] flex justify-center items-center text-xl">
              <Users2Icon className="text-[#fae8e8]" />
            </div>
          }
        />

        <BoardCard
          title="50"
          subTitle="Products"
          className="bg-[#ecebff]"
          icon={
            <div className="w-[40px] h-[47px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl">
              <ShoppingBasketIcon className="text-[#fae8e8]" />
            </div>
          }
        />
      </div>

      <div className="w-full mt-7 gap-5 grid grid-cols-1 md:grid-cols-2 pb-4">
        <div className="p-4 bg-[#6a5fdf] rounded-md">
          <h2 className="text-xl font-medium pb-5 text-[#d0d2d6]">
            Recent Request
          </h2>
          <div className="w-full">
            <div className="w-full overflow-x-auto">
              <div className="flex bg-[#a7a3de] uppercase text-xs font-bold min-w-[340px] rounded-md">
                <div className="w-[25%] p-2"> SI </div>
                <div className="w-[25%] p-2"> Amount </div>
                <div className="w-[25%] p-2"> Status </div>
                <div className="w-[25%] p-2"> Date </div>
                <div className="w-[25%] p-2"> Action </div>
              </div>

              {
                <List
                  style={{ minWidth: "340px" }}
                  className="List"
                  height={350}
                  itemCount={1000}
                  itemSize={35}
                  outerElementType={outerElementType}
                  width={"100%"}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>

        <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
          <h2 className="font-semibold text-lg text-[#d0d2d6] mb-3">
            Success Requests
          </h2>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-[#d0d2d6] uppercase border-b border-slate-700">
                <tr>
                  <th scope="col" className="py-3 px-3">
                    Order ID
                  </th>

                  <th scope="col" className="py-3 px-3">
                    Price
                  </th>

                  <th scope="col" className="py-3 px-3">
                    Payment Status
                  </th>

                  <th scope="col" className="py-3 px-3">
                    Order Status
                  </th>

                  <th scope="col" className="py-3 px-3">
                    Active
                  </th>
                </tr>
              </thead>

              <tbody className="text-[#d0d2d6]">
                {[1, 2, 3, 4, 5].map((_, i) => {
                  return (
                    <tr key={i}>
                      <td
                        scope="row"
                        className="py-3 px-4 font-medium whitespace-nowrap"
                      >
                        #23243434
                      </td>
                      <td
                        scope="row"
                        className="py-3 px-4 font-medium whitespace-nowrap"
                      >
                        $23
                      </td>
                      <td
                        scope="row"
                        className="py-3 px-4 font-medium whitespace-nowrap"
                      >
                        Pending
                      </td>
                      <td
                        scope="row"
                        className="py-3 px-4 font-medium whitespace-nowrap"
                      >
                        Pending
                      </td>
                      <td
                        scope="row"
                        className="py-3 px-4 font-medium whitespace-nowrap"
                      >
                        View
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
