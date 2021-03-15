import React from 'react'
import './index.css'
import { SelectProps } from './types'

const Select: React.FC<SelectProps> = ({ label, value, onChange, options, selectTitle }) => (
    <div className="form-group row">
        <div className="col-xs-12 col-sm-2">
            <label>{label}</label>
        </div>
        <div className="col-xs-12 col-sm-10">
            <select className="form-control" onChange={onChange} value={value}>
                <option>Please choose a {selectTitle}</option>
                {options.map(option => <option key={option.id} value={option.id}>{option.value}</option> )}
            </select>
        </div>
    </div>
)

export default Select