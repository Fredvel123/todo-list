import { useEffect } from "react";
import { getAllTasks } from "../../config/endpoints";
import useFetch from "../../hooks/useFetch";
import SpinnerLoading from "../../components/SpinnerLoading/SpinnerLoading";

export default function AllTasks() {
  const { response, fetchApi } = useFetch();

  useEffect(() => {
    fetchApi(getAllTasks);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      All Tasks
      {response !== null ? (
        response.map((item) => <h2>{item.description}</h2>)
      ) : (
        <SpinnerLoading />
      )}
    </div>
  );
}
