import { create } from "zustand";
import { TFeedbackItem } from "../../lib/types";

type Store = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
  selectedCompany: string;
  getCompanyList: () => string[];
  getFilteredFeedbackItems: () => TFeedbackItem[];
  addItemsToList: (text: string) => Promise<void>;
  selectCompany: (company: string) => void;
  fetchFeedbackItems: () => Promise<void>;
};

// "set" is used to update the state in zustand
// "get" is used to read the state in zustand
export const useFeedbackItemsStore = create<Store>((set, get) => ({
  // Initial state
  feedbackItems: [],
  isLoading: false,
  errorMessage: "",
  selectedCompany: "",

  // Derived state
  getCompanyList: () => {
    return get()
      .feedbackItems.map((item) => item.company)
      .filter((company, index, array) => {
        return array.indexOf(company) === index;
      });
  },
  getFilteredFeedbackItems: () => {
    const state = get();

    return state.selectedCompany
      ? state.feedbackItems.filter(
          (feedbackItem) => feedbackItem.company === state.selectedCompany
        )
      : state.feedbackItems;
  },

  // Actions
  addItemsToList: async (text: string) => {
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
    // setFeedbackItems([...feedbackItems, newItem]);
    set((state) => ({ feedbackItems: [...state.feedbackItems, newItem] }));

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
  },
  selectCompany: (company: string) => {
    // setSelectedCompany(company);
    set({ selectedCompany: company });
  },
  fetchFeedbackItems: async () => {
    //   setIsLoading(true)
    set(() => ({ isLoading: true }));
    try {
      const res = await fetch(
        "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
      );
      if (!res.ok) {
        throw new Error("Something went wrong. Please try again later.");
      }
      const data = await res.json();
      // setFeedbackItems(data.feedbacks);
      set(() => ({ feedbackItems: data.feedbacks }));
    } catch (error) {
      // setErrorMessage("Something went wrong. Please try again later.");
      set(() => ({
        errorMessage: "Something went wrong. Please try again later.",
      }));
    } finally {
      // setIsLoading(false);
      set(() => ({ isLoading: false }));
    }
  },
}));
