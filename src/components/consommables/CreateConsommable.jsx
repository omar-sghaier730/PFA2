import React, { Component } from 'react';
import axios from "axios";
class CreateConsommable extends Component {
constructor(props){
super();
this.state = {
créférence: '',
cnom: '',
cprix: 0,
cquantité: 0,
}
this.onChangeCRéférence = this.onChangeCRéférence.bind(this);
this.onChangeCnom = this.onChangeCnom.bind(this);
this.onChangeCPrix = this.onChangeCPrix.bind(this);
this.onChangeCQuantité = this.onChangeCQuantité.bind(this);
this.onSubmit = this.onSubmit.bind(this);
}
onChangeCRéférence(e) {
this.setState({ créférence: e.target.value})
}
onChangeCnom(e) {
this.setState({ cnom: e.target.value})
}
onChangeCPrix(e) {
this.setState({ cprix: e.target.value})
}
onChangeCQuantité(e) {
this.setState({ cquantité: e.target.value})
}
onSubmit(e) {
e.preventDefault();
const consommable = {
créférence: this.state.créférence,
cnom: this.state.cnom,
cprix: this.state.cprix,
cquantité: this.state.cquantité,
}
console.log(consommable);
axios.post('http://localhost:5000/consommables/add', consommable)
.then(res => console.log(res.data));
this.setState({
créférence: '',
cnom: '',
cprix: 0,
cquantité: 0,
})
}
render() {  
return (
<div className="container">

<h3>Ajouter au consommables</h3>

<form onSubmit={this.onSubmit}>

<div className="form-group">
<label>Référence: </label>
<input
type="text" required
className="form-control"
value={this.state.créférence}
onChange={this.onChangeCRéférence}
/>
</div>

<div>
<label>Nom: </label>
<input
type="text" required
className="form-control"
value={this.state.cnom}
onChange={this.onChangeCnom}
/>
</div>

<div>
<label>Prix unitaire: </label>
<input
type="text" required
className="form-control"
value={this.state.cprix}
onChange={this.onChangeCPrix}
/>
</div>

<div>
<label>Quantité disponible dans le stock: </label>
<input
type="text" required
className="form-control"
value={this.state.cquantité}
onChange={this.onChangeCQuantité}
/>
</div>

<div className="form-group">
<input type="submit" value="Ajouter" className="btn btn-primary" />
</div>
</form>
</div>
);
}
}
export default CreateConsommable;