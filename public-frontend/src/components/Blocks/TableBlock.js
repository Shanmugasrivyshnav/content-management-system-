import React from "react";
import styled from "styled-components";

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
`;

const TableRow = styled.tr`
  border: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 0.5rem;
  border: 1px solid #ddd;
`;

const TableHeader = styled.th`
  padding: 0.5rem;
  border: 1px solid #ddd;
  background: #f5f5f5;
`;

const TableBlock = ({ data }) => {
  const { headers, rows } = data;

  return (
    <TableContainer>
      <thead>
        <TableRow>
          {headers.map((header, i) => (
            <TableHeader key={i}>{header}</TableHeader>
          ))}
        </TableRow>
      </thead>

      <tbody>
        {rows.map((row, i) => (
          <TableRow key={i}>
            {row.map((cell, j) => (
              <TableCell key={j}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default TableBlock;
