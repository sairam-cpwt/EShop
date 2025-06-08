import { DollarSign, PackageCheck, Users2 } from "lucide-react";
import Chart from "react-apexcharts";
import { Link } from "react-router";

export default function AdminDashboard() {
  const state = {
    series: [
      {
        name: "Orders",
        data: [23, 34, 45, 56, 76, 34, 23, 76, 86, 78, 34, 80],
      },
      {
        name: "Revenue",
        data: [15, 85, 54, 124, 68, 47, 23, 25, 69, 77, 98, 85],
      },
      {
        name: "Sellers",
        data: [15, 85, 23, 34, 55, 68, 47, 23, 25, 69, 69, 57],
      },
    ],

    options: {
      colors: ["#4ade80", "#60a5fa", "#facc15"], // green, blue, yellow

      chart: {
        background: "transparent",
        foreColor: "#d0d2d6",
      },

      dataLabels: {
        enabled: false,
      },

      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: ["#fff"],
        width: 2,
        dashArray: 0,
      },

      legend: {
        position: "top",
        labels: {
          colors: "#ffffff",
        },
      },

      xaxis: {
        categories: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
      },

      responsive: [
        {
          breakpoint: 565,
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: 550,
            },
          },
        },
      ],
    },
  };

  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-7">
        <div className="flex justify-between items-center p-5 bg-[#fae8e8] rounded-md gap-8">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">$24343</h2>
            <span className="text-md font-medium">Total Sales</span>
          </div>

          <div className="w-[40px] h-[47px] rounded-full bg-[#fa0305] flex justify-center items-center text-xl">
            <DollarSign className="text-[#fae8e8]" />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-[#fde2ff] rounded-md gap-8">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">50</h2>
            <span className="text-md font-medium">Products</span>
          </div>

          <div className="w-[40px] h-[47px] rounded-full bg-[#760077] flex justify-center items-center text-xl">
            <PackageCheck className="text-[#fae8e8]" />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-[#e9feea] rounded-md gap-8">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">10</h2>
            <span className="text-md font-medium">Sellers</span>
          </div>

          <div className="w-[40px] h-[47px] rounded-full bg-[#038000] flex justify-center items-center text-xl">
            <Users2 className="text-[#fae8e8]" />
          </div>
        </div>

        <div className="flex justify-between items-center p-5 bg-[#ecebff] rounded-md gap-8">
          <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
            <h2 className="text-3xl font-bold">900</h2>
            <span className="text-md font-medium">Orders</span>
          </div>

          <div className="w-[40px] h-[47px] rounded-full bg-[#0200f8] flex justify-center items-center text-xl">
            <DollarSign className="text-[#fae8e8]" />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap mt-7">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full bg-[#6a5fdf] p-4 rounded-md">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              height={345}
            />
          </div>
        </div>

        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className="w-full bg-[#6a5fdf] p-4 rounded-md text-[#d0d2d6] ">
            <div className="flex items-center justify-between pb-3">
              <h2 className="font-semibold text-lg text-[#d0d2d6]">
                Recent Seller Message
              </h2>

              <Link className="font-semibold text-sm text-[#d0d2d6]" to={"#"}>
                View All
              </Link>
            </div>

            <div className="flex flex-col gap-2 pt-6 text-[#d0d2d6]">
              <ol className="relative">
                <li className="mb-2 flex items-center gap-2">
                  <div className="flex  shadow-lg justify-center items-center p-[2px] bg-[#4c76f2] rounded-full z-10 w-8 h-8 self-start">
                    <img
                      src={"/images/admin.png"}
                      alt="Admin Image"
                      className="w-full rounded-full h-full shadow-lg"
                    />
                  </div>

                  <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm w-full flex-11/12">
                    <div className="flex justify-between items-center mb-1">
                      <Link className="text-md font-normal" to={"/"}>
                        Admin
                      </Link>
                      <time className="text-sm font-normal sm:order-last sm:mb-0">
                        2 Days Ago
                      </time>
                    </div>

                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
                      How are you?
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-4 mt-6 bg-[#6a5fdf] rounded-md">
        <div className="flex justify-between items-center pb-3">
          <h2 className="font-semibold text-lg text-[#d0d2d6]">
            Recent Orders
          </h2>

          <Link className="font-semibold text-sm text-[#d0d2d6]" to={"#"}>
            View All
          </Link>
        </div>
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
  );
}
