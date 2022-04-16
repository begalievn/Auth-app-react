import classes from "./TableComponent.module.css";

function TableComponent({ usersData }) {
  function displayTableContent(usersData) {
    // eslint-disable-next-line no-lone-blocks
    {
      /* 
        age: "23"
        email: "nuser@mail.ru"
        id: 467
        name: "Beks"
        role: "client"
        status: "new"
      */
    }

    return usersData.map((item) => {
      return (
        <tr key={item.id} className={classes.table_row}>
          <td className={classes.table_data}>{item.id}</td>
          <td className={classes.table_data}>{item.name}</td>
          <td className={classes.table_data}>{item.email}</td>
          <td className={classes.table_data}>{item.age}</td>
          <td className={classes.table_data}>{item.role}</td>
          <td className={classes.table_data}>{item.status}</td>
        </tr>
      );
    });
  }

  return (
    <div className={classes.container}>
      <table className={classes.table}>
        <tbody>
          <tr className={classes.table_row}>
            <th className={classes.table_data}>ID</th>
            <th className={classes.table_data}>NAME</th>
            <th className={classes.table_data}>EMAIL</th>
            <th className={classes.table_data}>AGE</th>
            <th className={classes.table_data}>ROLE</th>
            <th className={classes.table_data}>STATUS</th>
          </tr>
          {displayTableContent(usersData)}
        </tbody>
      </table>
    </div>
  );
}

export default TableComponent;
