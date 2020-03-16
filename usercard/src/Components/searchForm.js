import React from "react";

class SearchForm extends React.Component {

    submitHandler = e => {
        e.preventDefault()
        console.log("%c Submit in SearchForm", 'color: orange', e.target.value)
    }
    changeHandler = e =>{
        
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <input 
                    type="text"
                    placeholder="..Git User Name"/>
                <button>Get</button>
            </form>
        )
    }
}

export default SearchForm;