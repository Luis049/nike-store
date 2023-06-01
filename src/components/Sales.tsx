import Item from "./util/Item";
import Title from "./util/Title";

type Props = {
  ifExists?: boolean;
  endpoint: {
    title: string;
    items: {
      id: string;
      title: string;
      text: string;
      rating: string;
      btn: string;
      img: string;
      price: string;
      color: string;
      shadow: string;
    }[];
  };
};

const Sales = ({ ifExists = false, endpoint: { title, items } }: Props) => {
  // console.log( {endpoint} )
  return (
    <>
      <div className="nike-container">
        <Title title={title} />
        <div
          className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${
            ifExists
              ? "grid-cols-3 xl:grid-cols-2 sm:grid-cols-1"
              : "grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          }`}
        >
          {items?.map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
