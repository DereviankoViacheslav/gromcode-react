import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends Component {
  state = {
    filterText: '',
    inStockOnly: false
  };

  handleFilterTextChange = filterText => {
    this.setState({
      filterText,
    });
  }

  handleInStockChange = inStockOnly => {
    this.setState({
      inStockOnly,
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
          {...this.state} />
        <ProductTable
          products={this.props.products}
          {...this.state} />
      </div>
    );
  }
}

export default FilterableProductTable;