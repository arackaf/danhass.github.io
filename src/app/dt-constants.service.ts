import { Time, WeekDay } from '@angular/common';
import { Injectable } from '@angular/core';
import { session } from './google-handler/google-handler.component';

export const dtConstants = {
  dtSessionKey : "dtSessionId",
  dtPlannerServiceStatusKey : "dtPlannerService",
  //apiTarget : "https://localhost:44324",
  apiTarget : "https://7822-54268.el-alt.com",
  loginEndpoint : "/login",
  planItemsEndpoint : "/Planner/PlanItems",
  planStatiEndpoint : "/Planner/Stati",
  planColorCodeEndpoint : "/Planner/ColorCodes",
  projectsEndpoint: "/Planner/Projects",
  sentToGoogleFlag: "sentToGoogle",
  setProjectEndpoint: "/Planner/SetProject",
  setPlanItemEndPoint: "/Planner/SetPlanItem"
}

export interface DTLogin {
  session: string,
  fName: string,
  lName: string,
  email: string,
  message: string
}

export interface DTUser {
  id: number,
  email: string,
  fName: string,
  lastLogin: Date,
  otherName: null,
  refreshToken: string,
  session: string,
  suspending: boolean,
  token: string
}

export interface DTPlanItem {
  id: number,
  addToCalendar: boolean,
  completed: boolean,
  day: Date,
  duration: Time,
  durationString: string,
  note: string | undefined,
  priority: number,
  projectId: number | undefined,
  project: DTProject | undefined,
  projectMnemonic: string,
  projectTitle: string,
  start: Date,
  startTime: string,
  title: string
}

export interface DTStatus {
  id: number,
  title: string,
  note: string | undefined,
  colorCode: number | undefined,
  color: DTColorCode | undefined,
  colorString: string
}

export interface DTColorCode {
  id: number,
  title: string,
  note: string | undefined
}

export interface DTConstants {
  dtSessionKey: string,
  dtPlannerServiceStatusKey: string,
  apiTarget: string,
  loginEndpoint: string,
  planItemsEndpoint: string,
  planStatiEndpoint: string,
  planColorCodeEndpoint:string,
  projectsEndpoint:string,
  sentToGoogleFlag:string,
  setProjectEndpoint: string
}

export interface DTProject {
  id: number,
  title: string,
  shortCode: string,
  priority: number | undefined,
  sortOrder: number | undefined,
  user: DTUser,
  colorCodeId: number | undefined,
  color: DTColorCode | undefined,
  colorString: string,  
  status: number,
  statusObj: DTStatus
}
