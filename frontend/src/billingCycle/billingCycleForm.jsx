import React, { Component } from "react";
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";
import { init } from "./billingCycleActions";
import { reduxForm, Field } from "redux-form"; //reduxForm funciona como se fosse o connect.. ele conecta o component ao redux
//Field é usada para controlar os campos do formularia
import LabelAndInput from "../common/form/labelAndInput";

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props
        const isReadOnly = this.props.readOnly ? true : false
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={LabelAndInput} label='Nome' cols='12 4' placeholder="Informe o nome" readOnly={isReadOnly}/>
                    <Field name='month' component={LabelAndInput}
                    label='Mês' cols='12 4' placeholder="Informe o mês" type='number' readOnly={isReadOnly}/>
                    <Field name='year' component={LabelAndInput}
                    label='Ano' cols='12 4' placeholder="Informe o ano" type='number' readOnly={isReadOnly}/>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.color}`}>{this.props.label}</button>
                    <button type="button" className="btn btn-deafult" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ init }, dispatch)
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)

export default connect(null, mapDispatchToProps)(BillingCycleForm)
//destroyOnUnmount não destroi os dados do formulario quando o componente for destruido
// formulario dinamico e sendo reusado

