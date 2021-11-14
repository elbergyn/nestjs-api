import { Injectable } from '@nestjs/common';
import { Account } from '../../accounts/entities/account.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TenantService {
  private account: Account | null = null;

  get tenant() {
    return this.account;
  }

  set tenant(tenant: Account) {
    this.account = tenant;
  }

  constructor(@InjectModel(Account) private accountModel: typeof Account) {}

  async setTenantBy(subdomain: string) {
    this.tenant = await this.accountModel.findOne({
      where: {
        subdomain,
      },
      rejectOnEmpty: true,
    });
  }
}
