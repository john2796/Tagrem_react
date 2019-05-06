import React, { Component } from 'react';
import Select from 'react-select';
import styled from 'styled-components';

import ModalPage from '../modal/ModalPage';
import close from '../../images/close.png';

const ModalStyle = styled.div`
  /* ------------> State Modal <---------------*/
  .state-modal-title-close {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    h2 {
      margin-bottom: 20px;
      margin: 20px;
      margin-bottom: -1px;
    }
    button {
      display: flex;
      align-items: center;
      border: none;
      font-style: italic;
      font-size: 1.3rem;
      color: var(--blue);
      span {
        margin-left: 6px;
        width: 12px;
        height: 12px;
      }
    }
  }
  p {
    margin: 20px;
    font-size: 1.3rem;
    line-height: 1.25;
    color: var(--ptag-gray);
  }
`;

const stateData = [
  { label: 'Select State', value: 'state' },
  { label: 'Alabama', value: 'AL' },
  { label: 'Alaska', value: 'AK' },
  { label: 'Arizona', value: 'AZ' },
  { label: 'Arkansas', value: 'AR' },
  { label: 'California', value: 'CA' },
  { label: 'Colorado', value: 'CO' },
  { label: 'Connecticut', value: 'CT' },
  { label: 'Delaware', value: 'DE' },
  { label: 'District Of Columbia', value: 'DC' },
  { label: 'Florida', value: 'FL' },
  { label: 'Georgia', value: 'GA' },
  { label: 'Hawaii', value: 'HI' },
  { label: 'Idaho', value: 'ID' },
  { label: 'Illinois', value: 'IL' },
  { label: 'Indiana', value: 'IN' },
  { label: 'Iowa', value: 'IA' },
  { label: 'Kansas', value: 'KS' },
  { label: 'Kentucky', value: 'KY' },
  { label: 'Louisiana', value: 'LA' },
  { label: 'Maine', value: 'ME' },
  { label: 'Maryland', value: 'MD' },
  { label: 'Massachusetts', value: 'MA' },
  { label: 'Michigan', value: 'MI' },
  { label: 'Minnesota', value: 'MN' },
  { label: 'Mississippi', value: 'MS' },
  { label: 'Missouri', value: 'MO' },
  { label: 'Montana', value: 'MT' },
  { label: 'Nebraska', value: 'NE' },
  { label: 'Nevada', value: 'NV' },
  { label: 'New Hampshire', value: 'NH' },
  { label: 'New Jersey', value: 'NJ' },
  { label: 'New Mexico', value: 'NM' },
  { label: 'New York', value: 'NY' },
  { label: 'North Carolina', value: 'NC' },
  { label: 'North Dakota', value: 'ND' },
  { label: 'Ohio', value: 'OH' },
  { label: 'Oklahoma', value: 'OK' },
  { label: 'Oregon', value: 'OR' },
  { label: 'Pennsylvania', value: 'PA' },
  { label: 'Rhode Island', value: 'RI' },
  { label: 'South Carolina', value: 'SC' },
  { label: 'South Dakota', value: 'SD' },
  { label: 'Tennessee', value: 'TN' },
  { label: 'Texas', value: 'TX' },
  { label: 'Utah', value: 'UT' },
  { label: 'Vermont', value: 'VT' },
  { label: 'Virginia', value: 'VA' },
  { label: 'Washington', value: 'WA' },
  { label: 'West Virginia', value: 'WV' },
  { label: 'Wisconsin', value: 'WI' },
  { label: 'Wyoming', value: 'WY' },
];

class StateFinder extends Component {
  state = {
    modal: false,
    currentValue: '',
  };

  handleChange = (state) => {
    console.log(state.label);
    this.setState(prevState => ({ currentValue: state.label, modal: !prevState.modal }));
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal,
      currentValue: '',
    }));
  };

  render() {
    const { modal, currentValue } = this.state;

    return (
      <>
        <h4>State Finder</h4>
        <p>Morbi ac hendrerit nulla. Sed nec ex commodo</p>
        <Select
          className="state-select"
          defaultValue={stateData[0]}
          options={stateData}
          onChange={this.handleChange}
        />

        <ModalPage toggle={this.toggle} modal={modal}>
          <ModalStyle>
            <div className="state-modal-title-close">
              <h2>{currentValue}</h2>
              <button type="button" onClick={this.toggle}>
                Close
                <span>
                  <img src={close} alt="close" />
                </span>
              </button>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto provident ad enim
              doloribus soluta quibusdam ab expedita iste similique possimus?
            </p>
          </ModalStyle>
        </ModalPage>
      </>
    );
  }
}

export default StateFinder;
