import classes from "./TableComponent.module.css";

function TableComponent({ usersData }) {
  return (
    <div className={classes.container}>
      <h2>Table Component</h2>
      <table className={classes.table}>
        <tr className={classes.table_row}>
          <th className={classes.table_header}>Name</th>
          <th className={classes.table_header}>Age</th>
          <th className={classes.table_header}>Gender</th>
        </tr>
        <tr className={classes.table_row}>
          <td className={classes.table_data}>Arthur</td>
          <td className={classes.table_data}>19</td>
          <td className={classes.table_data}>Male</td>
        </tr>
        <tr className={classes.table_row}>
          <td className={classes.table_data}>Arthur</td>
          <td className={classes.table_data}>19</td>
          <td className={classes.table_data}>Male</td>
        </tr>
      </table>
    </div>
  );
}

export default TableComponent;
