import createReactClass from 'create-react-class'
import '../stylesheets/ui.scss'

export const ActivityCount = createReactClass({
	percernToDecimal(value){
		return ((value*100)+'%')
	},
	goalCalcualtion(total,actual){
		return this.percernToDecimal(total/actual)
	},
	render(){
		return (
			<div className = "ski-day-count">
				<div className="total-days">
				<span>{this.props.total}</span>
					<span>  days</span>
				</div>
				<div className="powder-days">
				<span>{this.props.powder}</span>
					<span> days</span>
				</div>
				<div className="backcountry-days">
				<span>{this.props.backCountry}</span>
					<span> days</span>
				</div>
				<div>
				<span>{this.goalCalcualtion(this.props.total,this.props.goal)}</span>
				</div>
			</div>
			)
	}
})