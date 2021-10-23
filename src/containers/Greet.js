import React,{Component} from 'react';
import {Input} from '../components/Input';
import {Operation} from '../components/Operation';
import {Output} from '../components/Output';
export class Greet extends Component{
    constructor(){
        super();
        this.firstName='';
        this.lastName='';
        this.fullName='';
        this.state=({msg:this.fullName})
    }
    clearAll(){
        this.firstName='';
        this.lastName='';
        this.fullName='';
        this.setState({...this.state});
        
    }
    makefullName(){
        this.fullName=this.initCap(this.firstName)+ ' ' +this.initCap(this.lastName)+'';
        console.log("Full Name is",this.fullName)
        this.setState({...this.state,msg:this.fullName})
    }

    initCap(str){
     return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase()
    }

    takeFirstName(event){
         console.log("First Name Is",event.target.value);
         this.firstName=event.target.value;
         console.log("First Name",this.firstName);
         this.setState({...this.state})


         
    }
    takeLastName(event){
        console.log("Last Name Is",event.target.value);
        this.lastName=event.target.value;
        console.log("Last Name",this.lastName);
        this.setState({...this.state})
        

    }
    render(){
      
        return(
        <>
            <Input val={this.firstName} click={this.takeFirstName.bind(this)} Title="First Name"/>
            <br/>
            <Input val={this.lastName} click={this.takeLastName.bind(this)} Title="Last Name"/>
            <br/>
            <Operation click={this.makefullName.bind(this)}  title="Greet"/>
            <br/>
            <Operation click={this.clearAll.bind(this)} title="Clear"/>
            <Output result={this.fullName}/>
        </>
        )
    }
}