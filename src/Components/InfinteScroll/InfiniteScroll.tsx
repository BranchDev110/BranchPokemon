import { useRef } from "react";
import { Card } from "../Card";
import { VirtualScrollChild } from "../VirtualScrollChild";

const InfiniteScroll = ({ listItems, callbackAction }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleScroll = (e: any) => {
    const top: number | any = containerRef?.current?.scrollTop;
    const offsetHeight: number | any = containerRef?.current?.offsetHeight;
    const scrollHeight: number | any = containerRef?.current?.scrollHeight;
    if(top + offsetHeight >= scrollHeight) {
      callbackAction();
    }
  }
  return (
    <div className="card__container__list" onScroll={handleScroll} ref={containerRef}>
      {listItems.map((item: any, index: number) => {
        const props: any = { key: `card-${index}` };
        return (
          <VirtualScrollChild {...props}>
            <Card data={item} />
          </VirtualScrollChild>
        );
      })}
    </div>
  );
};

export default InfiniteScroll;
