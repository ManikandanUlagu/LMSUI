export class EnvironVal {

}

export class EnvironmentContext {
    gatewayUrl: string;
    authorizationKey: string;
    requestcontext:string;
    public constructor(gatewayUrl: string, authorizationKey: string,requestcontext:string) {
        this.gatewayUrl = gatewayUrl;
        this.authorizationKey = authorizationKey;
        this.requestcontext=requestcontext;
    }
}