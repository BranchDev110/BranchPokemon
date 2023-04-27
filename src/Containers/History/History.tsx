import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import styled from "styled-components";
import { useState } from "react";
import { Card } from "../../Components/Card";

const HistoryContainer = styled.div`
    display: flex;
    width: 100%;
    color: white;
    padding: 30px;
    font-size: 14px;
`

const TR = styled.tr`
    background-color: rgba(50,50,50,0.8);
    &: hover {
        background-color: rgba(50,50,50,0.5);
    }
`

const TD = styled.td`
    padding: 10px 20px;
    text-align: center;
    cursor: pointer;
    letter-spacing: 1.2px;
`

const TH = styled.td`
    padding: 10px 20px;
    text-align: center;
    cursor: pointer;
`

const HistoryList = styled.div`
    flex: 3;
`

const HistoryViewer = styled.div`
    flex: 1;
    height: 700px;
    overflow-y: scroll;
`

const HistoryListTable = styled.table`
    width: 100%;
`

const History = () => {
    const { value } = useSelector((state: RootState) => state.history);
    const [currentHistory, setCurrentHistory] = useState<any []>([]);
    return (
        <HistoryContainer>
            <HistoryList>
                <HistoryListTable>
                    <thead>
                        <TR>
                            <TH>Search Query</TH>
                            <TH>Search Result</TH>
                            <TH>Count</TH>
                            <TH>Date</TH>
                        </TR>
                    </thead>
                    <tbody>
                        {
                            value.map(item => <TR onClick={() => setCurrentHistory(item.value)}>
                                <TD>{item.key}</TD>
                                <TD>{item.value.map(it => it.name.toUpperCase()).join(', ')}</TD>
                                <TD>{item.value.length}</TD>
                                <TD>{item.date.toLocaleString()}</TD>
                            </TR>)
                        }
                    </tbody>
                </HistoryListTable>
            </HistoryList>
            <HistoryViewer>
                {
                    currentHistory.map(item => <Card data={item} key={item.id}/>)
                }
            </HistoryViewer>
        </HistoryContainer>
    )
}

export default History;