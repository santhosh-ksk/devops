import React from 'react';
import { Container, Checkbox, Header } from 'semantic-ui-react'


class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      course:''
    }
  }

  changeCourse(e, data){
    this.setState({course:data.label})
    console.log(data.label);
  }

   render() {
      return (
        <Container align="justify">
          <Checkbox label='react' onClick={this.changeCourse.bind(this)} checked={this.state.course=='react'}/>
          <Checkbox label='angularJS' onClick={this.changeCourse.bind(this)} checked={this.state.course=='angularJS'}/>
          <Checkbox label='angular 2' onClick={this.changeCourse.bind(this)} checked={this.state.course=='angular 2'}/>
          <Checkbox label='vue' onClick={this.changeCourse.bind(this)} checked={this.state.course=='vue'}/><br/><br/><br/><br/>
          <Header as="h1">selected course <br/>
                      {this.state.course}
          </Header>
        </Container>
      );
   }
}
export default App;
