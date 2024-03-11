import { useState } from "react";
import FeedbackItem from "./FeedbackItem";

const exampleFeedbackItems = [
  {
    upVoteCount: 245,
    badgeLetter: "P",
    companyName: "Pied Piper",
    text: "I'm the CEO and I love the product.",
    daysAgo: 2,
  },
  {
    upVoteCount: 127,
    badgeLetter: "H",
    companyName: "Hooli",
    text: "I'm the CEO and I love the product.",
    daysAgo: 4,
  },
  {
    upVoteCount: 487,
    badgeLetter: "R",
    companyName: "Raviga",
    text: "I'm the CEO and I love the product.",
    daysAgo: 1,
  },
];

const FeedbackList = () => {
  const [feedbackItems, setFeedbackItems] = useState(exampleFeedbackItems);

  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem
          key={feedbackItem.companyName}
          feedbackItem={feedbackItem}
        />
      ))}
    </ol>
  );
};

export default FeedbackList;
