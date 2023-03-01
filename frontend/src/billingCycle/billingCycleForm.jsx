import React, { Component } from "react";
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";
import { init } from "./billingCycleActions";
import { reduxForm, Field, formValueSelector } from "redux-form"; //reduxForm funciona como se fosse o connect.. ele conecta o component ao redux
//Field é usada para controlar os campos do formularia
import LabelAndInput from "../common/form/labelAndInput";
import ItemList from "./itemList";
import Summary from "./summary";

class BillingCycleForm extends Component {

    calculateSummary() {
        const sum =(t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, credits, debts } = this.props
        const isReadOnly = this.props.readOnly ? true : false
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={LabelAndInput} label='Nome' cols='12 4' placeholder="Informe o nome" readOnly={isReadOnly}/>
                    <Field name='month' component={LabelAndInput}
                    label='Mês' cols='12 4' placeholder="Informe o mês" type='number' readOnly={isReadOnly}/>
                    <Field name='year' component={LabelAndInput}
                    label='Ano' cols='12 4' placeholder="Informe o ano" type='number' readOnly={isReadOnly}/>
                    <Summary credit={sumOfCredits} debt={sumOfDebts}></Summary>
                    <ItemList cols='12 6' readOnly={isReadOnly} list={credits} field='credits' legend='Créditos'/>
                    <ItemList cols='12 6' readOnly={isReadOnly} list={debts} field='debts' legend='Débitos' showStatus={true}/>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.color}`}>{this.props.label}</button>
                    <button type="button" className="btn btn-deafult" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        credits: selector(state, 'credits'),
        debts: selector(state, 'debts')
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ init }, dispatch)
}

const selector = formValueSelector('billingCycleForm') //Pegar informação|| é usado dentro do mapStateToProps pq recebe o state como parametro e o nome do atributo que quer extrair do formulario

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
//destroyOnUnmount não destroi os dados do formulario quando o componente for destruido
// formulario dinamico e sendo reusado

