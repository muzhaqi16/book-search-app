import React, {Component} from 'react';

export default class SearchFilters extends Component{
    changeSelection(value){
        console.log(value)
    }
    render(){
        return <div className="searchFilters">
            <form>
                <label htmlFor="printType">Print Type</label>
                <select id="printType" onChange={e => this.changeSelection(e.target.value)}>
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>
                </select>
                <label htmlFor="bookType">Book Type</label>
                <select id="bookType" onChange={e => this.changeSelection(e.target.value)}>
                    <option value="no-filter">No Filter</option>
                    <option value="partial">Partial</option>
                    <option value="full">Full</option>
                    <option value="free-ebooks">Free eBooks</option>
                    <option value="paid-ebooks">Paid eBooks</option>
                    <option value="ebooks">eBooks</option>
                </select>
            </form>
        </div>;
    }
}