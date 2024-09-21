import React from 'react';
import useAxios, { AxiosSource } from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useProducts = (id) => {
    const axiosLink = useAxios(AxiosSource)
    const { isPending, isError, data, error, refetch } = useQuery({
        queryKey: ['todos', id],
        queryFn: async ()=>{
            const res = await axiosLink.get(`/products?data=${id}`)
            // console.log(res);
            
            return res?.data
        },
      })
    
      if (isPending) {
        return 'Loading...'
      }
    
      if (isError) {
        return `Error: ${error.message}`
      }


      return [data, refetch]
  
};

export default useProducts;