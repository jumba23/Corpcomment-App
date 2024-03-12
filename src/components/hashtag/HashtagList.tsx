type hashtagListProps = {
  companyList: string[];
};

const HashtagList = ({ companyList }: hashtagListProps) => {
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <li key={company}>
          <button>#{company}</button>
        </li>
      ))}
    </ul>
  );
};

export default HashtagList;
