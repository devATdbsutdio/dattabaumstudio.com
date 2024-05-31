import * as React from "react";
import Button from "../Button";
import BandSize from "../BandSize";

export default function BandSizeButton({
  className,
  label,
}: {
  className?: string;
  label?: string;
}) {
  const [isBandSizeOpen, setIsBandSizeOpen] = React.useState(false);

  const toggleBandSizeButton = () => {
    setIsBandSizeOpen((v) => !v);
  };
  return (
    <>
      <Button
        variant="primary-dark"
        onClick={toggleBandSizeButton}
        className={className}
        ariaLabel={label || "Select the band size"}
      >
        {label || "Select the band size"}
      </Button>
      <BandSize isOpen={isBandSizeOpen} toggle={toggleBandSizeButton} />
    </>
  );
}
