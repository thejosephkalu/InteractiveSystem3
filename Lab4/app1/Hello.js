'use strict';

class Hello extends React.Component{
constructor(props){
    super(props);
    this.state = {personName:'World'};

}
render(){
    return React.creareElement('h1',null,'Hello, ' + this.state.personName);
}
}