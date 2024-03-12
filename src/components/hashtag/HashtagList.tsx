import HashtagItem from "./HashtagItem";

type hashtagListProps = {
  companyList: string[];
};

const HashtagList = ({ companyList }: hashtagListProps) => {
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem company={company} />
      ))}
    </ul>
  );
};

export default HashtagList;
