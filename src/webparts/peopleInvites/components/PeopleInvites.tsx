import * as React from 'react';
import styles from './PeopleInvites.module.scss';
import { IPeopleInvitesProps } from './IPeopleInvitesProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class PeopleInvites extends React.Component<IPeopleInvitesProps, {}> {
  public render(): React.ReactElement<IPeopleInvitesProps> {
    return (
      <div className={ styles.peopleInvites }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
