import Table from "react-bootstrap/Table";
import "./style.css";

function RsTable({ users, showUser }) {
  console.log(users, "this rstable");
  return (
    <div className="RsTable-main-div">
      <div className="RsTable-sub-div">
        <Table responsive="md">
          <thead className="RsTable-thead">
            <tr>
              <th></th>
              <th>No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Number</th>
            </tr>
          </thead>
          {showUser ? (
            <tbody>
              {users?.map((item, index) => {
                console.log(item, "this is item");

                <tr key={item.id}>
                  <td>1</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                </tr>;
                // <tr key={item.id}>
                //   <td></td>

                //   <td>2</td>
                //   <td>Table cell</td>
                //   <td>Table cell</td>
                //   <td>Table cell</td>
                //   <td>Table cell</td>
                // </tr>;
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td></td>

                <td>2</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              ;
            </tbody>
          )}

          {/* {showUser ? (
            <tbody>
              {users.map((item, index) => {
                console.log(item, "this is item");

                <tr>
                  <td></td>
                  <td>1</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                </tr>;
                <tr>
                  <td></td>

                  <td>2</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                  <td>Table cell</td>
                </tr>;
              })}
            </tbody>
          ) : (
            <h1>no users</h1>
          )} */}
        </Table>
        {/* <tbody>
            <tr>
              <td></td>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td></td>

              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td></td>

              <td>3</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table> */}
      </div>
    </div>
  );
}

export default RsTable;
