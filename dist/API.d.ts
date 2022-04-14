import './finka';
import ApiConfig from './ApiConfig';
import { AxiosInstance } from 'axios';
import APIList from './api/APIList';
import APIListDevices from './api/APIListDevices';
import APIListUsers from './api/APIListUsers';
import APIResourceUser from './api/APIResourceUser';
import APIResourceDevice from './api/APIResourceDevice';
import APIResourceDeviceGroup from './api/APIResourceDeviceGroup';
import APIResourceUserSession from './api/APIResourceUserSession';
import APIAdminResource from './api/APIAdminResource';
import APIResourceAccount from './api/APIResourceAccount';
import APIResource from "./api/APIResource";
import APIResourceDeviceSession from "./api/APIResourceDeviceSession";
import APIResourceBroker from "./api/APIResourceBroker";
declare class API {
    private config;
    private axiosConfig;
    axios: AxiosInstance;
    constructor(config: ApiConfig);
    userSession(): APIResourceUserSession;
    user(id: number | 'me'): APIResourceUser;
    users(): APIListUsers;
    account(id: number): APIResourceAccount;
    me(): APIResourceUser;
    admin(): APIAdminResource;
    devices(): APIListDevices;
    device(id: number): APIResourceDevice;
    deviceGroups(): APIList;
    deviceGroup(id: number): APIResourceDeviceGroup;
    deviceSessions(): APIList;
    deviceSession(id: number): APIResourceDeviceSession;
    labelGroups(): APIList;
    deviceStatistics(): APIList;
    enums(): APIResource;
    licenses(): APIResource;
    labels(): APIList;
    broker(): APIResourceBroker;
}
export default API;
