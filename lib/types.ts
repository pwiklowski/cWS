export type Listener = (...args: any[]) => void;

export type SocketAddress = {
  remotePort: number | string | null,
  remoteAddress: string | null,
  remoteFamily: string | null
};

export type ConnectionInfo = {
  req: any,
  origin: string,
  secure: boolean
};

export type BroadcastOptions = {
  binary?: boolean
};

export type ServerConfigs = {
  path?: string,
  port?: number,
  host?: string,
  server?: any,
  noDelay?: boolean,
  maxPayload?: number,
  perMessageDeflate?: { serverNoContextTakeover: boolean }
  verifyClient?: (info: ConnectionInfo, next: Listener) => void
};

export type SendOptions = {
  binary?: boolean,
  compress?: boolean
};