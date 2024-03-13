import { createContext, useMemo, useState } from "react";
import { TFeedbackItem } from "../../lib/types";
import { useFeedbackItems } from "../../lib/hooks";

// Create a context object
type FeedbackItemsContextProviderProps = {
  children: React.ReactNode;
};

type TFeedbackItemsContext = {
  isLoading: boolean;
  errorMessage: string;
  companyList: string[];
  filteredFeedbackItems: TFeedbackItem[];
  handleAddToList: (text: string) => void;
  handleSelectCompany: (company: string) => void;
};

export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(
  null
);

// Create a context provider
const FeedbackItemsContextProvider = ({
  children,
}: FeedbackItemsContextProviderProps) => {
  const { feedbackItems, isLoading, errorMessage, setFeedbackItems } =
    useFeedbackItems();

  const [selectedCompany, setSelectedCompany] = useState("");

  // Use the useMemo hook to memoize the company list
  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((company, index, array) => array.indexOf(company) === index),
    [feedbackItems]
  );

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            (feedbackItem) => feedbackItem.company === selectedCompany
          )
        : feedbackItems,
    [feedbackItems, selectedCompany]
  );

  // Create a function to add a new item to the list
  const handleAddToList = async (text: string) => {
    const companyNameWord = text.split(" ").find((word) => word.includes("#"));
    if (!companyNameWord) {
      console.error("No company name found in the text.");
      return;
    }
    const companyName = companyNameWord.substring(1);
    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      company: companyName,
      badgeLetter: companyName.substring(0, 1).toUpperCase(),
    };
    setFeedbackItems([...feedbackItems, newItem]);

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      }
    );
  };

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };

  // Provide the context object to its children
  return (
    <FeedbackItemsContext.Provider
      value={{
        isLoading,
        errorMessage,
        companyList,
        handleAddToList,
        handleSelectCompany,
        filteredFeedbackItems,
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
};

export default FeedbackItemsContextProvider;
