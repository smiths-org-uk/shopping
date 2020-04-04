import React from 'react';
import Item from './Item';
import styled from 'styled-components';

const StyledTable = styled.div`
    margin: 10px 0 30px 0;
    width: 100%;
    text-align: left;
    font-size: 12px;
`;

const StyledHeader = styled.div`
    background: black;
    color: white;
`;

const StyledTH = styled.div`
    display: inline-block;
    width: ${props => props.width};
    padding: 5px 0;
    text-align: center;
    font-weight: bold;
`;

const StyledItems = styled.div`
    width: 100%;
`;

export default class ItemTable extends React.Component {
    render() {
        const REGULARITY_WIDTH = "15%";
        const TITLE_WIDTH = "35%";
        const QUANTITY_WIDTH = "15%";
        const NOTES_WIDTH = "35%";

        return (
            <StyledTable>
                <StyledHeader>
                    <StyledTH width={REGULARITY_WIDTH}>Regularity</StyledTH>
                    <StyledTH width={TITLE_WIDTH}>Item</StyledTH>
                    <StyledTH width={QUANTITY_WIDTH}>Quantity</StyledTH>
                    <StyledTH width={NOTES_WIDTH}>Notes</StyledTH>
                </StyledHeader>
                <StyledItems>
                {
                    this.props.items.map((item, index) => {
                        return (
                            <Item
                                key={index}
                                index={index}
                                item={item}
                                regularityWidth={REGULARITY_WIDTH}
                                titleWidth={TITLE_WIDTH}
                                quantityWidth={QUANTITY_WIDTH}
                                notesWidth={NOTES_WIDTH}
                            />
                        )
                    })
                }
                </StyledItems>
            </StyledTable>
        )
    }
}