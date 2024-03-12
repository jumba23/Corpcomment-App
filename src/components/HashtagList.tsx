const HashtagList = ({ companyList }) => {
  return (
    <ul className="hashtags">
      {companyList.map((company, index) => (
        <li key={index}>
          <button>#{company}</button>
        </li>
      ))}
    </ul>
  );
};

export default HashtagList;
