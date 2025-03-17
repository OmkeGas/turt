/**
 * Script
 */
import 'flowbite';

/**
 * Style
 */
import './index.css';

/**
 * Custom Script
 */
const pemasukanData = [1800000, 1700000, 1600000, 1750000, 1850000, 1860000]; // Total = 10.560.000
const pengeluaranData = [750000, 820000, 680000, 720000, 750000, 790000]; // Total = 4.510.000

const pemasukan = {
  xaxis: {
    show: true,
    categories: ['Sep', 'Okt', 'Nov', 'Des', 'Jan', 'Feb'],
    labels: {
      show: true,
      style: {
        fontFamily: 'Inter, sans-serif',
        cssClass: 'text-xs font-normalfill-gray-400',
      },
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    show: true,
    labels: {
      show: true,
      style: {
        fontFamily: 'Inter, sans-serif',
        cssClass: 'text-xs font-normalfill-gray-400',
      },
      formatter: (value) => 'Rp ' + value.toLocaleString('id-ID'),
    },
  },
  series: [{ name: 'Pemasukan', data: pemasukanData, color: '#7bf1a8' }],
  chart: {
    sparkline: { enabled: false },
    height: '100%',
    width: '100%',
    type: 'area',
    fontFamily: 'Inter, sans-serif',
    dropShadow: { enabled: false },
    toolbar: { show: false },
  },
  tooltip: { enabled: true, x: { show: false } },
  fill: {
    type: 'gradient',
    gradient: { opacityFrom: 0.55, opacityTo: 0, shade: '#1C64F2', gradientToColors: ['#1C64F2'] },
  },
  dataLabels: { enabled: false },
  stroke: { width: 6 },
  legend: { show: false },
  grid: { show: false },
};

const pengeluaran = {
  ...pemasukan, // Menggunakan struktur yang sama dengan pemasukan
  series: [{ name: 'Pengeluaran', data: pengeluaranData, color: 'oklch(0.808 0.114 19.571)' }],
};

if (document.getElementById('labels-chart-pemasukan') && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById('labels-chart-pemasukan'), pemasukan);
  chart.render();
}

if (document.getElementById('labels-chart-pengeluaran') && typeof ApexCharts !== 'undefined') {
  const chart = new ApexCharts(document.getElementById('labels-chart-pengeluaran'), pengeluaran);
  chart.render();
}
