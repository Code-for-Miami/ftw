const guid = require('objection-guid')();
import { Model } from 'objection';
// const DriverLicense = require('./driverLicense');

import DriverLicense from './driverLicense';
// DL in florida beging with one letter followed by 12 digits the nubmer is split in 5 fields ****-***-**-***-*
export class DriverLicenseReport extends guid(Model) {

    static get tableName() {
        return 'driverLicenseReport';
      }

    readonly id!: string;
    county: Counties;
    driverLicenseId: string;
    createdOn: Date;
    modifiedOn?: Date;
      //sthis relation mapping is likely pointless
    static get relationMappings() {

    return {
      driverLicenseIdFk: {
        relation: Model.BelongsToOneRelation,
        modelClass: DriverLicense,
        join: {
          from: 'driverLicenseReport.driverLicenseId',
          to: 'driverLicense.id'
        }
      }
    }
  }
}

export enum Counties {
  'MIAMI-DADE' = 'MIAMI-DADE', 'BROWARD' = 'BROWARD', 'PALM-BEACH' = 'PALM-BEACH', 'ORANGE' = 'ORANGE'
}


