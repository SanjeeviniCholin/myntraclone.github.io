import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";
import EmptyBag from "../components/EmptyBag";
const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItems = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItems.length === 0 ? (
            <EmptyBag />
          ) : (
            finalItems.map((item) => <BagItem item={item} />)
          )}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
