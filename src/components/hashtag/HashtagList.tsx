import { useFeedbackItemsContext } from "../../lib/hooks";
import HashtagItem from "./HashtagItem";

const HashtagList = () => {
  const { companyList, handleSelectCompany } = useFeedbackItemsContext();

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectedCompany={handleSelectCompany}
        />
      ))}
    </ul>
  );
};

export default HashtagList;
