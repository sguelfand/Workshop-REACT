import React,{Component} from 'react'
import {connect} from 'react-redux'

let CartCounter = props=>{
    return(
        <i className="badge badge-info">{props.selectedItems}</i>
    )
}

let mapStateToProps = state=>({
    selectedItems:state.total
})
export default connect(mapStateToProps)(CartCounter)