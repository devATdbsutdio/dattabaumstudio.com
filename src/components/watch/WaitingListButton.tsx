import * as React from "react";
import WaitingList from "../WaitingList";
import Button from "../Button";

export default function WaitingListButton({
  className,
}: {
  className?: string;
}) {
  const [isWaitingListOpen, setIsWaitingListOpen] = React.useState(false);

  const toggleWaitingList = () => {
    setIsWaitingListOpen((v) => !v);
  };
  return (
    <>
      <Button
        variant="primary-dark"
        onClick={toggleWaitingList}
        className={className}
        ariaLabel="Add to Cart"
      >
        Add to Cart
      </Button>
      <WaitingList isOpen={isWaitingListOpen} toggle={toggleWaitingList} />
    </>
  );
}
