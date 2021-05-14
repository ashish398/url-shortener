import { useAllUrLsQuery } from "./types/operations";
import UrlTable from "./UrlTable";
const UrlList = () => {
  const { data, loading, error } = useAllUrLsQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h1>Ouch! That page didn't load</h1>
        <p>Here's why : {error.message}</p>
      </div>
    );
  }
  const items = data?.queryURL;
  return (
    <>
      <UrlTable items={items} />
    </>
  );
};

export default UrlList;
