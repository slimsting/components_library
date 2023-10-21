const TestimonialImage = ({ children }) => {
  console.log(children);

  const answer = children;
  console.log(answer);
  return (
    <div>
      <img
        src={answer}
        alt="profile picture "
        className="rounded-3xl aspect-auto mt-[-4em] h-[200px]"
      />
    </div>
  );
};

export default TestimonialImage;
