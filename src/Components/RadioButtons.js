import React from 'react';
export class Radiobuttons extends React.Component {
	render() {
		return (
			<div>
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="radio"
						name="inlineRadioOptions"
						id="inlineRadio1"
						value="option1"
					/>
					<label class="form-check-label" for="inlineRadio1">
						B
					</label>
				</div>

				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="radio"
						name="inlineRadioOptions"
						id="inlineRadio2"
						value="option2"
					/>
					<label class="form-check-label" for="inlineRadio2">
						I
					</label>
				</div>

				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="radio"
						name="inlineRadioOptions"
						id="inlineRadio3"
						value="option3"
					/>
					<label class="form-check-label" for="inlineRadio3">
						D
					</label>
				</div>
			</div>
		);
	}
}

export default Radiobuttons;
