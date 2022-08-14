import { Module, DynamicModule } from '@nestjs/common';

import { DomainModule } from '@Domain/domain.module';
import { InfrastructureModule } from '@Infrastructure/infrastructure.module';
import { ApplicationModule } from '@Application/application.module';

@Module({})

export class ServerModule {
    public static forRoot(): DynamicModule {
        return {
            module: ServerModule,
            imports: [
                DomainModule,
                InfrastructureModule,
                ApplicationModule,
            ],
        };
    }
}
