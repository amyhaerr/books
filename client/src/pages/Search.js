import React from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        search: "",
        books: [],
        
    };

    componentDidMount() {
        this.searchBook("Hunger Games");
    }

    makeBook = bookData => {
        // console.log("bookData", bookData);
        return {
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink  
        }
        
    }

    searchBook = query => {
       
        API.getBook(query)
            .then(res => this.setState({ books: res.data.items.map(book => this.makeBook(book)) }))
            .catch(err => console.error(err));
            // console.log("searchBook", query)
    };

    handleInputChange = event =>  {
      const {name, value} = event.target
        this.setState({
            [name]: value
        });
        // console.log ("handleInputChange", name, value)
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search);
    };

    render() {
        return (
            <div>
                <Form
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <div className="container">
                    <h2>Results</h2>
                    <Results books={this.state.books} />
                </div>
            </div>
        )
    }
}

export default Search;