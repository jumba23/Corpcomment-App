import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";
import HashtagItem from "./HashtagItem";

const HashtagList = () => {
  // const { companyList, handleSelectCompany } = useFeedbackItemsContext();
  const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  const selectCompany = useFeedbackItemsStore((state) => state.selectedCompany);

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectedCompany={selectCompany}
        />
      ))}
    </ul>
  );
};

export default HashtagList;
