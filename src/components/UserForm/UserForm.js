import React, { Component } from "react";
import styles from "./UserForm.module.css";


class UserForm extends Component {

    state = {
        genre: '',
        category: ''
    }
    handleSubmit = (e) => {

        e.preventDefault();

        const { onUpdate } = this.props;

        fetch(`https://api.openai.com/v1/completions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer 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`,
                },
                body: JSON.stringify({
                    prompt: "Create a list of 5 " + this.state.genre + " " + this.state.category + " available on netflix !",
                    max_tokens: 2000,
                    model: "text-davinci-003"
                }),
        })
        .then((response) => response.json())
        .then(data => 
            onUpdate(data.choices[0].text.split('\n').map((str) => `${str}`).join('<br/>'))
            //console.log(data)
        )
    }

    handleChangeGenre = (e) => {
        const value = e.currentTarget.value
        this.setState({ genre: value })
    }
    handleChangeCategory = (e) => {
        const value = e.currentTarget.value
        this.setState({ category: value })
    }
    render() {
        return (
        <form className={styles.form} onSubmit={this.handleSubmit}>

            <label>What genre?</label>
            <input type='text' placeholder='Medieval, fantasy,...' value={this.state.genre} onChange={this.handleChangeGenre}/>

            <label>What category?</label>
            <input type='text' placeholder='Movie, documentary,...' value={this.state.category} onChange={this.handleChangeCategory}/>
        
            <input type="submit" value="Submit" />
        </form> 
        )  
    }
}

export default UserForm;