import React, { useState } from "react";
import { Table } from "react-bootstrap";
const InfoView = () => {
  return (
    <Table size="m" hover>
      <tbody>
        <tr>
          <td>Asuinpinta-ala</td>
          <td>Hinta</td>
        </tr>
        <tr>
          <td>300m2</td>
          <td>250 000 €</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default InfoView;
