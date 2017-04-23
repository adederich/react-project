import React, { Component } from 'react';
// import fetch from 'isomorphic-fetch';

class ItemList extends Component {

  renderDove = (item, key) => (
    <tr key={key} className="itemRow">
      <td>{item.id}</td>
      <td>{item.active ? "True" : "False"}</td>
      <td style={{ color: item.color }}>{item.color}</td>
      <td>{item.images_collected}</td>
      <td>{item.last_command}</td>
      <td>{item.deorbit_dt}</td>
    </tr>
  )

  render() {
    let listItems;
    if (!this.props.items) {
      listItems = <td>loading</td>;
    } else {
      listItems = this.props.items.map((item, key) =>
        this.renderDove(item, key)
      );
    }

    return (
      <div className="itemContainer">
        <table className="itemList">
          <tbody>
            <tr className="columnTitle">
              <td>Id</td>
              <td>Active</td>
              <td>Color</td>
              <td>Images Collected</td>
              <td>Last Command</td>
              <td>Deorbit DT</td>
            </tr>
            {listItems}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ItemList;
