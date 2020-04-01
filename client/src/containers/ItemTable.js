import React from 'react';
import Item from './Item';
import styled from 'styled-components';

const StyledHeader = styled.tr`
    background: black;
    color: white;
`;

const StyledTable = styled.table`
    margin: 10px 0 30px 0;
    width: 100%;
    text-align: left;
    font-size: 20px;
`;

const StyledTH = styled.th`
    padding: 10px 20px;
    text-align: center;
`;

export default class ItemTable extends React.Component {
    render() {
        return (
            <StyledTable>
                <thead>
                    <StyledHeader>
                        <StyledTH>Item</StyledTH>
                        <StyledTH>Quantity</StyledTH>
                        <StyledTH>Notes</StyledTH>
                    </StyledHeader>
                </thead>
                <tbody>
                {
                    this.props.items.map((item, index) => {
                        return (
                            <Item
                                key={index}
                                index={index}
                                item={item}
                            />
                        )
                    })
                }
                </tbody>
            </StyledTable>
        )
    }
}