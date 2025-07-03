import { TbMoodEmpty } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
const EmptyBag = () => {
  const navigate = useNavigate();

  return (
    <div className="empty_bag">
      <TbMoodEmpty size={70} />
      <h1>Your Bag is Empty</h1>
      <p>Looks like you haven't added anything to your bag yet.</p>
      <button
        type="button"
        class="btn btn-primary shop-button"
        onClick={() => navigate("/")}
      >
        Shop Now
      </button>
    </div>
  );
};

export default EmptyBag;
