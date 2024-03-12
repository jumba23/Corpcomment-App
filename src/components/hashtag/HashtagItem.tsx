type HashtagItemProps = {
  company: string;
  onSelectedCompany: (company: string) => void;
};

const HashtagItem = ({ company, onSelectedCompany }: HashtagItemProps) => {
  return (
    <li key={company}>
      <button onClick={() => onSelectedCompany(company)}>#{company}</button>
    </li>
  );
};

export default HashtagItem;
