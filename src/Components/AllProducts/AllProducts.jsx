import React, { useEffect, useState } from "react";
import useProducts from "../Hooks/useProducts";
import axios from "axios";
import useAxios, { AxiosSource } from "../Hooks/useAxios";

const AllProducts = () => {
  const [pages, setpages] = useState(0);
  const [buttons, setbuttons] = useState([]);
  const axiosLink = useAxios(AxiosSource);
  const [data] = useProducts(pages);
  // console.log(data);

  useEffect(() => {
    axiosLink
      .get("/allproduct")
      .then((res) => {
        const page = Math.round(res?.data.length / 4);

        const button = [...Array(page).keys()];
        setbuttons(button);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
       
      });
  }, []);

  const handlePage =(idx)=>{
    setpages(idx*4)
  }

  return (
    <section>
      <h1 className="text-3xl font-bold text-center">All Products</h1>

      <div className="flex justify-center flex-wrap gap-5 my-5">
        {data == "L"
          ? "loading"
          : data?.map((e, idx) => (
              <div
                key={idx}
                className="w-96 border-2 rounded-lg bg-gray-100 p-3"
              >
                <img
                  className="w-80 mx-auto h-72 rounded-xl object-cover p-2"
                  src={e.hostImageArray[0]}
                  alt=""
                />
                <h1 className="text-lg font-semibold">{e.name}</h1>
              </div>
            ))}
      </div>
      <div className="w-fit mx-auto">
        {buttons?.map((e, idx) => (
          <button onClick={()=>handlePage(idx)} className="btn mr-3 ">{e + 1}</button>
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
