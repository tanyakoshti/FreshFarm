import { Module } from '@nestjs/common';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { FeedbackModule } from './modules/feedback/feedback.module';
import { DeliveriesModule } from './modules/deliveries/deliveries.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { OrdersModule } from './modules/orders/orders.module';
import { PaymentsModule } from './modules/payments/payments.module';
import { ReportsModule } from './modules/reports/reports.module';
import { FraudModule } from './modules/fraud/fraud.module';
import { AlertsModule } from './modules/alerts/alerts.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    ProductsModule,
    OrdersModule,
    PaymentsModule,
    DeliveriesModule,
    AnalyticsModule,
    FeedbackModule,
    ReportsModule,
    FraudModule,
    AlertsModule,
  ],
})
export class AppModule {}