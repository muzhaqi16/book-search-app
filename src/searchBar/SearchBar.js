import React, {Component} from 'react';

export default class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
          searchTerm:""
        };
    }
    searchChanged(searchTerm) {
        this.setState({
          searchTerm
        });
      }    
    handleSearch(e) {
        e.preventDefault();
        console.log(this.state.searchTerm);
        const apiKey='AIzaSyD0FAv25ngJQgOSMFj1j2Gvtpp9OCzUbDw';
        const url = 'https://www.googleapis.com/books/v1/volumes?q='+this.state.searchTerm +'&key='+apiKey;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            data.items.map(item=>{
                console.log(item.saleInfo.listPrice);
                console.log(item.volumeInfo.title)
                console.log(item.volumeInfo.authors[0])
                console.log(item.volumeInfo.imageLinks.thumbnail)
                console.log(item.volumeInfo.description)
            });
        }).catch(err => {
            //this catch handles the error condition
            this.setState({
                error: err.message
            });
        });
    }
    render(){
        return <form onSubmit={e => this.handleSearch(e)}>
        <label >Search:</label>
        <input type="text" name="search" placeholder="Enter a book name" onChange={e => this.searchChanged(e.target.value)}/>
        <input type="submit" value="Search"/>
    </form>;
    }
}