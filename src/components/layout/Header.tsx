import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";
import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";

const Header = () => {
  // const { handleAddToList } = useFeedbackItemsContext();
  const addItemsToList = useFeedbackItemsStore((state) => state.addItemsToList);

  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={addItemsToList} />
    </header>
  );
};

export default Header;
