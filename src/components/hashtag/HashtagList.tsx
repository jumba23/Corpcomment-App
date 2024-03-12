import HashtagItem from "./HashtagItem";

type hashtagListProps = {
  companyList: string[];
  handleSelectCompany: (company: string) => void;
};

const HashtagList = ({
  companyList,
  handleSelectCompany,
}: hashtagListProps) => {
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
