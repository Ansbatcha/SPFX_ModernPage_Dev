import * as React from 'react';
import styles from './PeopleInvites.module.scss';
import { IPeopleInvitesProps } from './IPeopleInvitesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { sp } from '@pnp/sp';
export interface PeopleInvitesState {
  options: any;

}


export default class PeopleInvites extends React.Component<IPeopleInvitesProps, {}> {
  public state;
  constructor(props) {
    super(props);
    this.state = {
      options: ""
    };
    this.getallCountries();
  }
  public getallCountries() {
    var val = [];
    var value;
    sp.web.lists.getByTitle("City_List").items.get().then((items: any) => {
      items.forEach((element, index) => {
        value = { "key": index, "text": element.Title };
        val.push(value);
        this.setState({
          options: val
        });
      });
    }
    ).catch((err: any) => {
      console.log(err);
    }
    );
  }
  public _onselect = (index, item) => {
    console.log(item);
  }
  public render(): React.ReactElement<IPeopleInvitesProps> {
    return (
      <div className={styles.peopleInvites}>
        <div className={styles.container}>
          <div className={styles.row}>
            <Dropdown
              placeholder="Required with no label"
              ariaLabel="Required dropdown example"
              options={this.state.options}
              defaultValue="Select the country here"
              onChange={this._onselect}
              required={true}
              styles={{ dropdown: { width: 300 } }}
            />
          </div>
        </div>
      </div>
    );
  }
}
