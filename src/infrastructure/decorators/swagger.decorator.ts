import { applyDecorators, Type } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';

import { ResponseFormat } from '@Infrastructure/interceptors/response.interceptor';

export const ApiResponseType = <TModel extends Type<any>>(model: TModel): any => {
    return applyDecorators(
        ApiOkResponse({
            schema: {
                allOf: [
                    { $ref: getSchemaPath(ResponseFormat) },
                    {
                        properties: {
                            data: {
                                $ref: getSchemaPath(model),
                            },
                        },
                    },
                ],
            },
        }),
    );
}
