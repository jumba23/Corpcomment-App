import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import FeedbackItem from "./FeedbackItem";
import { TFeedbackItem } from "../../lib/types";

type FeedbackListProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
};

const FeedbackList = ({
  feedbackItems,
  isLoading,
  errorMessage,
}: FeedbackListProps) => {
  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}

      {errorMessage && <ErrorMessage message={errorMessage} />}

      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
};

export default FeedbackList;
