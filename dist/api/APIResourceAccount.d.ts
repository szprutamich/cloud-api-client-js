import { API } from '../API';
import { APIList } from './APIList';
import { APIResource } from './APIResource';
import { APIResourceBillingPeriod } from './APIResourceBillingPeriod';
import { Account, AccountData } from './models/Account';
import { AccountConcurrencyStatusMap } from './models/AccountConcurrencyStatusMap';
import { AccountPreferences } from './models/AccountPreference';
import { AccountService } from './models/AccountService';
import { AccountServicePayment } from './models/AccountServicePayment';
import { BillingPeriod, BillingPeriodQueryParams } from './models/BillingPeriod';
import { DeviceTimeSummaryQueryParams } from './models/Device';
import { CollectionBasicQueryParams, NoQueryParams, QueryParams, SimpleCollectionResponse } from './models/HTTP';
import { User, UserData } from './models/User';
import { DeviceTimeQueryParams, UserDeviceTime } from './models/UserDeviceTime';
import { UserDeviceTimeSummary } from './models/UserDeviceTimeSummary';
import { VisualTestAccess } from './models/VisualTest';
export declare class APIResourceAccount extends APIResource<Account, QueryParams, AccountData> {
    constructor(parent: API, id: number);
    concurrencyStatus(): APIResource<AccountConcurrencyStatusMap, NoQueryParams, void>;
    deviceTime(): APIList<UserDeviceTime, DeviceTimeQueryParams, void>;
    deviceTimeSummary(): APIList<UserDeviceTimeSummary, DeviceTimeSummaryQueryParams, void>;
    preferences(): APIResource<AccountPreferences, NoQueryParams, SimpleCollectionResponse<AccountPreferences>>;
    users(): APIList<User, CollectionBasicQueryParams, UserData>;
    removeUser(id: number): APIResource<User, NoQueryParams, void>;
    disableUser(id: number): APIResource<User, NoQueryParams, void>;
    enableUser(id: number): APIResource<User, NoQueryParams, void>;
    resendActivation(id: number): APIResource<User, NoQueryParams, void>;
    billingPeriods(): APIList<BillingPeriod, CollectionBasicQueryParams, void>;
    billingPeriod(id: number): APIResourceBillingPeriod;
    serviceBillingPeriod(id: number): APIResource<AccountServicePayment, BillingPeriodQueryParams, void>;
    visualTestAccess(): APIResource<VisualTestAccess, NoQueryParams, VisualTestAccess>;
    accountServices(): APIList<AccountService, import("./models/HTTP").CollectionQueryParams, any>;
}
export default APIResourceAccount;
