import { useRef } from "react";
import styled from 'styled-components';
import { Card } from "../Card";
import { VirtualScrollChild } from "../VirtualScrollChild";

const CardContainerList = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow-y: scroll;
`

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
    <CardContainerList onScroll={handleScroll} ref={containerRef}>
      {listItems.map((item: any, index: number) => {
        const props: any = { key: `card-${index}` };
        return (
          <VirtualScrollChild {...props}>
            <Card data={item} />
          </VirtualScrollChild>
        );
      })}
    </CardContainerList>
  );
};

export default InfiniteScroll;
