type errorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: errorMessageProps) => {
  return <div>{message}</div>;
};

export default ErrorMessage;
