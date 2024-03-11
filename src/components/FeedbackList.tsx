import { TriangleUpIcon } from "@radix-ui/react-icons";

const FeedbackList = () => {
  return (
    <ol className="feedback-list">
      <li className="feedback">
        <button>
          <TriangleUpIcon />
          <span>568</span>
        </button>
        <div>
          <p>B</p>
        </div>
        <div>
          <p>SoftSolutions</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            laboriosam incidunt alias, libero voluptate sunt.
          </p>
        </div>
        <p>4d</p>
      </li>
    </ol>
  );
};

export default FeedbackList;
