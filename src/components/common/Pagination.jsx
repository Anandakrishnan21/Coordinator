import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationSubmit,
} from "@/components/ui/pagination";

export function PaginationComp({
  maxLength,
  currentIndex,
  setCurrentIndex,
  handleSubmit,
}) {
  const prevBtnHandle = () => {
    if (currentIndex !== 0 && currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const NextBtnHandle = () => {
    if (currentIndex < maxLength) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(currentIndex);
    }
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={prevBtnHandle} />
        </PaginationItem>
        <PaginationItem>
          {currentIndex < maxLength - 1 ? (
            <PaginationNext href="#" onClick={NextBtnHandle} />
          ) : (
            <PaginationSubmit onClick={handleSubmit} />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
