import { Breadcrumb } from './breadcrumb';
import { Contexts } from './context';
import { DebugMeta } from './debugMeta';
import { Exception } from './exception';
import { Extras } from './extra';
import { Primitive } from './misc';
import { Request } from './request';
import { ScopeContext, ScopeLike } from './scope';
import { SdkInfo } from './sdkinfo';
import { Severity } from './severity';
import { Span } from './span';
import { Stacktrace } from './stacktrace';
import { Measurements } from './transaction';
import { User } from './user';

export interface SentryEvent {
  event_id?: string;
  message?: string;
  timestamp?: number;
  start_timestamp?: number;
  level?: Severity;
  platform?: string;
  logger?: string;
  server_name?: string;
  release?: string;
  dist?: string;
  environment?: string;
  sdk?: SdkInfo;
  request?: Request;
  transaction?: string;
  modules?: { [key: string]: string };
  fingerprint?: string[];
  exception?: {
    values?: Exception[];
  };
  stacktrace?: Stacktrace;
  breadcrumbs?: Breadcrumb[];
  contexts?: Contexts;
  tags?: { [key: string]: Primitive };
  extra?: Extras;
  user?: User;
  type?: EventType;
  spans?: Span[];
  measurements?: Measurements;
  debug_meta?: DebugMeta;
}

export enum EventType {
  Error = 'error',
  Session = 'session',
  Transaction = 'transaction',
}

export type EventHint = {
  event_id?: string;
  originalException?: unknown;
  syntheticException?: Error;
  data?: Record<string, unknown>;
};

export type CaptureContext = {
  scope?: ScopeContext | ScopeLike;
  hint?: EventHint;
};
