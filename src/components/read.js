import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
export default function Read() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("https://610d6e0e48beae001747b852.mockapi.io/fakeData")
      .then((response) => setApiData(response.data));
  }, []);
  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => (
            <Table.Row>
              <Table.Cell>{data.firstName}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
              <Table.Cell>{data.checkbox ? "Checked" : "Unchecked"}</Table.Cell>
              <Table.Cell>
                <button>Update</button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
