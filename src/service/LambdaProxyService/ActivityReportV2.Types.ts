export type ActivityReportRequestMethod = 'generate' | 'publish';

export interface ActivityReportRequestBody {
    cognitoToken: string,
    entityId: string,
    method: string
}

export interface LambdaServiceResponse {
    response: { statusCode: number; body: string };
    statusCode: number;
    functionName: string;
    invocationType?: string;
}
