// components/MyHighChart.js
"use client"; // Ensure this is a client component

import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import { useEffect } from 'react';

const MyHighChart = () => {
  useEffect(() => {
    // Initialize the exporting module
    HighchartsExporting(Highcharts);

    Highcharts.chart('container', {
      chart: {
        type: 'line'
      },
      title: {
        text: 'My Chart'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
      },
      yAxis: {
        title: {
          text: 'Values'
        }
      },
      series: [{
        name: 'Sample Data',
        data: [1, 3, 2, 4, 6]
      }],
      exporting: {
        buttons: {
          contextButton: {
            menuItems: ['downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadCSV', 'downloadXLS']
          }
        }
      }
    });
  }, []);

  return <div id="container" style={{ height: '400px' }} />;
};

export default MyHighChart;
