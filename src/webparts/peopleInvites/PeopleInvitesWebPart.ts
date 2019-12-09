import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { sp } from "@pnp/sp";
import * as strings from 'PeopleInvitesWebPartStrings';
import PeopleInvites from './components/PeopleInvites';
import { IPeopleInvitesProps } from './components/IPeopleInvitesProps';

export interface IPeopleInvitesWebPartProps {
  description: string;
}

export default class PeopleInvitesWebPart extends BaseClientSideWebPart<IPeopleInvitesWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IPeopleInvitesProps > = React.createElement(
      PeopleInvites,
      {
        description: this.properties.description
      }
    );

    ReactDom.render(element, this.domElement);
  }
  public onInit(): Promise<void> {

    return super.onInit().then(_ => {
  
      // other init code may be present
  
      sp.setup({
        spfxContext: this.context
      });
    });
  }
  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
