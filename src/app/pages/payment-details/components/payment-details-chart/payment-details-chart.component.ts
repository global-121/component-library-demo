import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { getTailwindConfig } from '../../../../utils/tailwind';

const tailwindConfig = getTailwindConfig();

@Component({
  selector: 'app-payment-details-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './payment-details-chart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentDetailsChartComponent {
  paymentDetails = input.required<{
    pending: number;
    sent: number;
    successful: number;
    failed: number;
  }>();

  chartData = computed(() => {
    const { pending, sent, successful, failed } = this.paymentDetails();
    return {
      labels: ['Pending', 'Sent', 'Successful', 'Failed'],
      datasets: [
        {
          data: [pending, sent, successful, failed],
          backgroundColor: [
            tailwindConfig.theme.colors.orange[500],
            tailwindConfig.theme.colors.blue[500],
            tailwindConfig.theme.colors.green[500],
            tailwindConfig.theme.colors.red[500],
          ],
        },
      ],
    };
  });

  chartOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: false,
      datalabels: {
        align: 'right',
        anchor: 'end',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          crossAlign: 'far',
        },
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: { display: false },
      },
    },
  };
}
