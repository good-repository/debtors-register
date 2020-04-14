import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { remove } from './debtActions'

import { Table, Button } from 'react-bootstrap'
import { FaTrashAlt } from 'react-icons/fa'

const DebtList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(debt => (
            <tr key={debt._id}>
                <td>{debt.description}</td>
                <td>{debt.date}</td>
                <td>{debt.value}</td>
                <td>{debt.debtor}</td>
                <td>
                    <Button variant='danger' onClick={() => props.remove(debt)}> <FaTrashAlt /> </Button>
                </td>
            </tr>
        ))
    }

    return (
        <Table hover responsive>
            <thead>
                <tr>
                    <th>Dívida</th>
                    <th className='tableTime'>Data</th>
                    <th className='tableTime'>Valor</th>
                    <th className='tableTime'>Devedor</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </Table >
    )
}

const mapStateToProps = state => ({ list: state.debt.list })
const mapDispathToProps = dispatch => bindActionCreators({ remove }, dispatch)

export default connect(mapStateToProps, mapDispathToProps)(DebtList)