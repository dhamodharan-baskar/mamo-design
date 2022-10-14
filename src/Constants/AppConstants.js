import { ReactComponent as PaymentIcon } from '../Icons/payment.svg'
import { ReactComponent as OverviewIcon } from '../Icons/overview.svg'
import { ReactComponent as SettingIcon } from '../Icons/setting.svg'
import { ReactComponent as SettlementIcon } from '../Icons/settlement.svg'
import { ReactComponent as InvoiceIcon } from '../Icons/invoices.svg'
import { ReactComponent as PaymentLink } from '../Icons/paymentlink.svg'

export const DROPDOWN_OPTIONS = [
  {
  icon: OverviewIcon,
  name: 'Overview',
  },
  {
  icon: PaymentLink ,
  name: 'Payment Links'
  },
  {
  icon: InvoiceIcon ,
  name: 'Invoices',
  route: '/'
  },
  {
  icon: PaymentIcon ,
  name: 'Payments'
  },
  {
  icon: SettlementIcon ,
  name: 'Settlements'
  },
  {
  icon: SettingIcon ,
  name: 'Settings'
  }
]