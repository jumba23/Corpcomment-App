import { useContext, useEffect, useState } from "react";
import { FeedbackItemsContext } from "../components/contexts/FeedbackItemsContextProvider";
import { TFeedbackItem } from "./types";

// Create a custom hook to consume the context
export const useFeedbackItemsContext = () => {
  const context = useContext(FeedbackItemsContext);
  if (!context) {
    throw new Error(
      "FeedbackItemsContext is not available in FeedbackList component."
    );
  }
  return context;
};

export const useFeedbackItems = () => {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    const fetchFeedbackItems = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );
        if (!res.ok) {
          throw new Error("Something went wrong. Please try again later.");
        }
        const data = await res.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage("Something went wrong. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchFeedbackItems();
  }, []);

  return {
    feedbackItems,
    isLoading,
    errorMessage,
    setFeedbackItems,
    setIsLoading,
    setErrorMessage,
  };
};
