import React, { Component } from "react";
import { reduxForm, Field } from "redux-form"; //reduxForm funciona como se fosse o connect.. ele conecta o component ao redux
//Field é usada para controlar os campos do formularia
import LabelAndInput from "../common/form/labelAndInput";

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props

        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component={LabelAndInput} label='Nome' cols='12 4' placeholder="Informe o nome"/>
                    <Field name='month' component={LabelAndInput}
                    label='Mês' cols='12 4' placeholder="Informe o mês" type='number'/>
                    <Field name='year' component={LabelAndInput}
                    label='Ano' cols='12 4' placeholder="Informe o ano" type='number'/>
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'billingCycleForm'})(BillingCycleForm)

