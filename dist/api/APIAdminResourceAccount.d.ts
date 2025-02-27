import { APIAdminResource } from './APIAdminResource';
import { APIList } from './APIList';
import { APIResource } from './APIResource';
import { Account } from './models/Account';
import { NoData, NoQueryParams } from './models/HTTP';
import { Role, RoleData, RoleParams } from './models/Role';
import { AccountService } from './models/AccountService';
import { AccountPreferences } from './models/AccountPreference';
export declare class APIAdminResourceAccount extends APIResource<Account, NoQueryParams, NoData> {
    constructor(parent: APIAdminResource, id: number);
    roles(): APIList<Role, RoleParams, RoleData>;
    role(id: number): APIResource<Role, RoleParams, void>;
    accountServices(): APIList<AccountService, import("./models/HTTP").CollectionQueryParams, any>;
    preferences(): APIResource<AccountPreferences, NoQueryParams, Partial<Omit<AccountPreferences, "id">>>;
}
export default APIAdminResourceAccount;
