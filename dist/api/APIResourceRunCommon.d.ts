import { API } from '../API';
import { APIEntity } from './APIEntity';
import { APIList } from './APIList';
import { APIResource } from './APIResource';
import { AdminTestRun } from './models/AdminTestRun';
import { DeviceSession, DeviceSessionStep, TRunDeviceSessionQueryParams } from './models/DeviceSession';
import { CollectionBasicQueryParams, NoQueryParams } from './models/HTTP';
import { Screenshot, ScreenshotExtended, ScreenshotQueryParams } from './models/Screenshot';
import { Tag, TagsData, TagsQueryParams, TaqQueryParams, TestRunTagsData } from './models/Tag';
import { RunData, RunQueryParam, TestRun, TestRunData } from './models/TestRun';
import { TestRunDataAvailability, TestRunDataAvailabilityQueryParams } from './models/TestRunDataAvailability';
import { UserFile } from './models/UserFile';
export declare class APIResourceRunCommon extends APIResource<TestRun, RunQueryParam, TestRunData | RunData> {
    constructor(parent: APIEntity<any> | API, id: number);
    abort(): APIResource<TestRun | AdminTestRun, NoQueryParams, RunData>;
    dataAvailability(): APIResource<TestRunDataAvailability, TestRunDataAvailabilityQueryParams, void>;
    deviceSessions(): APIList<DeviceSession, CollectionBasicQueryParams | TRunDeviceSessionQueryParams, void>;
    filesZip(ids?: Array<number>): APIResource<UserFile, import("./models/UserFile").BuildLogsData, import("./models/UserFile").BuildLogsData>;
    logsZip(ids?: Array<number>): APIResource<UserFile, import("./models/UserFile").BuildLogsData, import("./models/UserFile").BuildLogsData>;
    performanceZip(ids?: Array<number>): APIResource<UserFile, import("./models/UserFile").BuildLogsData, import("./models/UserFile").BuildLogsData>;
    retry(ids?: Array<number>): APIResource<TestRun, import("./models/UserFile").BuildLogsData, import("./models/UserFile").BuildLogsData>;
    screenshotNames(): APIList<Screenshot, NoQueryParams, void>;
    screenshots(): APIList<ScreenshotExtended, ScreenshotQueryParams, void>;
    screenshotsZip(ids?: Array<number>): APIResource<UserFile, import("./models/UserFile").BuildLogsData, import("./models/UserFile").BuildLogsData>;
    steps(): APIList<DeviceSessionStep, CollectionBasicQueryParams, void>;
    tags(): APIList<Tag, CollectionBasicQueryParams | TagsQueryParams, TestRunTagsData | TagsData>;
    tag(id: number): APIResource<Tag, TaqQueryParams, void>;
}
export default APIResourceRunCommon;
