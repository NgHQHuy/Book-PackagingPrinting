import { CategoryType, GenreType } from "@/utils/constants/type/book";
import { useEffect, useState } from "react";

interface IUseFetchProps {
  callFunc: () => void;
  body?: CategoryType | GenreType;
}

interface IPagination {
  type: "page" | "scroll";
  pageNumber: number;
  pageSize: number;
}

const useFetch = ({ callFunc, body }: IUseFetchProps) => {
  const [pagination, setPagination] = useState<IPagination>({
    type: "page",
    pageNumber: 1,
    pageSize: 10,
  });
  const [params, setParams] = useState(body || {});
  const [data, setData] = useState([]);

  const fetchData = async () => {
    callFunc();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, setData, pagination, setPagination, params, setParams };
};

export default useFetch;
