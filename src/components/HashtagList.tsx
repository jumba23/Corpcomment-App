const HashtagList = ({ companyList }) => {
  return (
    <ul className="hashtags">
      {companyList.map((company, index) => (
        <li key={index}>
          <button>#{company}</button>
        </li>
      ))}
      {/* <li>
        <button>#SoftSolutions</button>
      </li>
      <li>
        <button>#Nike</button>
      </li>
      <li>
        <button>#McDonald's</button>
      </li> */}
    </ul>
  );
};

export default HashtagList;
