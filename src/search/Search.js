import React, {Component} from 'react';
import SearchBar from '../searchBar/SearchBar';
import SearchFilters from '../searchFilters/SearchFilters';

export default class Search extends Component{
    render(){
        return <div>
            <SearchBar />
            <SearchFilters />
        </div> ;
    }
}