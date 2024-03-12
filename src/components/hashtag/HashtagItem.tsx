type HashtagItemProps = {
  company: string;
};

const HashtagItem = ({ company }: HashtagItemProps) => {
  return (
    <li key={company}>
      <button>#{company}</button>
    </li>
  );
};

export default HashtagItem;
